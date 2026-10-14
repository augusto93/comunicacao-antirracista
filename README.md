# Comunicação Antirracista — site

Site do evento **Comunicação Antirracista** (3ª edição — *Nordeste em Voz Alta*, Fortaleza, 30 e 31 de maio de 2026).
Produção: <https://comunicacaoantirracista.com.br/>

O site é **estático** (HTML + CSS + JavaScript, sem etapa de build), mas já está organizado
no formato de um **tema WordPress**: cada componente JS corresponde a um *template-part*
e cada arquivo de dados (`assets/data/*.js`) corresponde a um tipo de conteúdo do WordPress.
Tudo é HTML, CSS e JavaScript puro.
A ideia é que a migração seja uma tradução direta, arquivo por arquivo, e não uma reescrita.

---

## Sumário

1. [Como rodar localmente](#1-como-rodar-localmente)
2. [Estrutura de pastas](#2-estrutura-de-pastas)
3. [Como a página é montada](#3-como-a-página-é-montada)
4. [Edição do dia a dia](#4-edição-do-dia-a-dia)
5. [Migração para WordPress](#5-migração-para-wordpress)
6. [Observações e pendências](#6-observações-e-pendências)

---

## 1. Como rodar localmente

O site **precisa de um servidor HTTP**: ele usa ES modules (`<script type="module">` e `import`),
que o navegador bloqueia ao abrir o arquivo direto (`file://`).

- **XAMPP:** com o Apache ligado, acesse `http://localhost/www/antirracista/`
- **Alternativa:** na pasta do projeto, `npx serve .` ou `php -S localhost:8000`

> O `.htaccess` só funciona no Apache. Nos servidores alternativos acima, o site abre normalmente,
> só os redirecionamentos de PDFs antigos (ver seção 6) não funcionam.

---

## 2. Estrutura de pastas

```
index.html                     <head>, CSS, pontos de montagem [data-component] e scripts
.htaccess                      Redireciona PDFs antigos e bloqueia _backup/ (Apache)
.gitignore                     O que não vai para o Git (_backup/, .DS_Store, editores, node_modules…)

assets/
  css/
    base.css                   Variáveis (cores, fontes), reset, tipografia
    components/                header, footer, slider, card
    sections/                  um arquivo por seção, cada um com o seu próprio @media
  data/                        CONTEÚDO EDITÁVEL (módulos JS: export default [...])
    menu.js
    linha-do-tempo.js
    programacao.js
    participantes.js
  js/
    main.js                    Ponto de entrada: carrega dados → renderiza → inicia comportamentos
    utils.js                   Helpers: asset(), esc(), list()
    components/                Um arquivo por seção/componente; cada um retorna HTML
    modules/                   Comportamentos (GSAP): slider.js, header-logo.js
  img/
    header/  hero/  sobre/  programacao/  participantes/
    backgrounds/  icons/  logos/  favicon/
  docs/                        TODOS os PDFs do site (programas CE e RJ, Ação Educativa, Legado)

edicoes-passadas/              Sites das edições anteriores (independentes, HTML/CSS próprios)
  05-25/                       1ª edição — Brasília (menu adicionado em menu.css / menu.js)
  09-25/                       2ª edição — Rio de Janeiro (usa os módulos de assets/js/modules/)
_backup/                       Backup do projeto + TAPUME/ (fora do Git) — NÃO publicar
```

### Componentes × CSS × dados

| Componente JS (`assets/js/components/`) | CSS                                | Dados                     |
|-----------------------------------------|------------------------------------|---------------------------|
| `header.js`                             | `components/header.css`            | `data/menu.js`          |
| `hero-slider.js`                        | `components/slider.css`            | lista no próprio arquivo  |
| `destaque.js`                           | `sections/destaque.css`            | texto fixo                |
| `sobre.js`                              | `sections/sobre.css` + `slider.css`| texto fixo                |
| `linha-do-tempo.js`                     | `sections/linha-do-tempo.css`      | `data/linha-do-tempo.js`|
| `programacao.js` → `atividade.js`       | `sections/programacao.css`         | `data/programacao.js`   |
| `participantes.js` → `card-participante.js` | `sections/participantes.css` + `components/card.css` | `data/participantes.js` |
| `footer.js`                             | `components/footer.css`            | texto fixo                |

---

## 3. Como a página é montada

1. O `index.html` tem só o `<head>` e uma lista de marcadores:
   ```html
   <div data-component="programacao"></div>
   ```
2. O `assets/js/main.js` importa os quatro arquivos de dados de `assets/data/`.
3. Para cada marcador, chama o componente de mesmo nome e **substitui** o `<div>` pelo HTML retornado.
4. Com o HTML pronto, inicializa os comportamentos:
   - `modules/header-logo.js`: esconde o logo do topo ao rolar para baixo e mostra ao rolar para cima.
   - `modules/slider.js`: anima todo elemento com `data-slider` e baixa os slides sob demanda.
5. Se a URL tiver âncora (ex.: `#sec3`), rola até ela, já que o conteúdo só existe depois do passo 3.

Os componentes são **funções puras**: recebem dados e devolvem uma string HTML.
Todo texto vindo dos dados passa por `esc()`, exceto os campos que aceitam `<br>` (ver abaixo).

---

## 4. Edição do dia a dia

### Conteúdo

| O que mudar                      | Onde                                                    |
|----------------------------------|---------------------------------------------------------|
| Participantes (nome, foto, bio)  | `assets/data/participantes.js` + foto em `assets/img/participantes/` |
| Programação                      | `assets/data/programacao.js`                          |
| Linha do tempo                   | `assets/data/linha-do-tempo.js`                       |
| Itens do menu / submenu          | `assets/data/menu.js` (`"submenu": [...]` cria um dropdown) — o submenu "Edições Passadas" também existe nas páginas de `edicoes-passadas/` |
| Slides do topo                   | lista `slides` em `assets/js/components/hero-slider.js` |
| Fotos da seção Sobre             | `assets/img/sobre/sec2-N.webp` + `TOTAL_SLIDES` em `sobre.js` |
| Texto "Sobre", datas, rodapé     | direto no componente (`sobre.js`, `destaque.js`, `footer.js`) |

**Campos que aceitam HTML (`<br>`):** `tipo` e `titulo` da programação e `tema` da linha do tempo.
Os demais campos são texto puro.

**`video` (programação, opcional):** link da gravação (ex.: YouTube). Quando preenchido, aparece o botão
"assistir" abaixo da descrição da atividade. O botão aumenta a altura do item, então pode ser preciso
reajustar o `espacoInferior` para as colunas dos dois dias continuarem alinhadas.

**`espacoInferior` (programação):** margem, em px, abaixo da descrição de cada atividade.
Foi ajustada à mão para alinhar as colunas dos dois dias. Se mudar algum texto, talvez seja preciso reajustar.

### Visual

- **Cores e fontes:** variáveis em `assets/css/base.css` (`:root`).
- **Ordem dos CSS importa:** o `index.html` carrega base → components → sections. Cada regra de
  `@media` fica no mesmo arquivo do componente a que pertence.
- **Responsivo:** um único breakpoint, `max-width: 1080px`.

### Nova seção

1. Criar `assets/js/components/minha-secao.js` exportando uma função que retorna HTML.
2. Registrar em `components` dentro de `assets/js/main.js`.
3. Adicionar `<div data-component="minha-secao"></div>` no `index.html`, na posição desejada.
4. Criar `assets/css/sections/minha-secao.css` e linkar no `index.html`.

### Novo slider

Qualquer elemento com `data-slider` e filhos `.slide`. Só o primeiro slide usa `src`; os demais usam
`data-src` e são baixados sob demanda:

```html
<div data-slider data-slider-duration="1" data-slider-delay="4" data-slider-ease="power2.out">
  <img class="slide" src="primeira.webp">
  <img class="slide" data-src="segunda.webp">
  <img class="slide" data-src="terceira.webp">
</div>
```

### Carregamento das imagens (lazyload)

| Imagem                                   | Como carrega                                                         |
|------------------------------------------|----------------------------------------------------------------------|
| Logos do header                          | Imediato                                                             |
| 1º slide do topo                         | Imediato, com `fetchpriority="high"`                                 |
| Demais slides (topo e Sobre)             | `data-src`: `modules/slider.js` baixa só o slide atual e o próximo, e só depois que o slider entra na tela. No celular a galeria do Sobre fica oculta e não baixa nada |
| Todo o resto (programação, cards, rodapé) | `loading="lazy"` nativo: baixa quando a imagem se aproxima da tela   |

**Formato:** use **WebP** para fotos e imagens (qualidade ~82; com transparência, preserve o canal alfa).
SVG continua para logos e vetores. **Favicons ficam em PNG** (exigência do iOS e do `manifest.json`).
Para converter: exporte direto em WebP no editor de imagens (Photoshop, Figma etc.) ou use <https://squoosh.app> no navegador.

**Nova imagem:** use `loading="lazy"` em tudo que estiver abaixo da primeira tela. Num slider, use `data-src`
(exceto no primeiro slide).

> Para medir: o Chrome em modo headless (`--headless --screenshot`) **ignora** `loading="lazy"` e baixa tudo.
> Teste num navegador normal (DevTools › Network, filtro *Img*) ou com Playwright.

---

## 5. Migração para WordPress

### 5.1 Visão geral

O caminho recomendado é um **tema clássico em PHP**: os componentes JS viram *template-parts*
renderizados no servidor, o que é melhor para SEO e para quem edita pelo painel.
Os módulos de comportamento (`modules/*.js`) e todo o CSS são reaproveitados **sem alterações**.

### 5.2 Equivalências

| Hoje (estático)                                 | No WordPress                                                        |
|-------------------------------------------------|---------------------------------------------------------------------|
| `<head>` do `index.html`                        | `header.php` com `wp_head()`                                        |
| `<link>` e `<script>` do `index.html`           | `wp_enqueue_style()` / `wp_enqueue_script()` no `functions.php`     |
| `components/header.js`                          | `header.php` + `wp_nav_menu()`                                      |
| `components/footer.js`                          | `footer.php` com `wp_footer()`                                      |
| `index.html` (ordem das seções)                 | `front-page.php`                                                    |
| `components/<secao>.js`                         | `template-parts/sections/<secao>.php`                               |
| `components/atividade.js`, `card-participante.js` | `template-parts/components/<nome>.php`                            |
| `asset('img/x.webp')`                            | `get_theme_file_uri('assets/img/x.webp')`                            |
| `esc(texto)`                                    | `esc_html()` / `esc_attr()` / `esc_url()`                           |
| campos com `<br>` (inseridos sem `esc`)         | `wp_kses_post()`                                                    |
| `list(itens, Componente)`                       | `foreach` + `get_template_part(..., null, $args)`                   |
| `data/menu.js`                                | `register_nav_menus()` → Aparência › Menus                          |
| `data/participantes.js`                       | CPT `participante`                                                  |
| `data/programacao.js`                         | CPT `atividade` + campos ACF                                        |
| `data/linha-do-tempo.js`                      | Repeater ACF numa página de opções, ou CPT `edicao`                 |
| texto de `sobre.js`                             | Conteúdo de uma página "Sobre" (`the_content()`)                    |
| fotos de `sobre.js` / `hero-slider.js`          | Campo ACF *Gallery* ou galeria do editor                            |
| `modules/slider.js`, `modules/header-logo.js`   | **Sem mudança**                                                     |
| `main.js` (render + init)                       | Só a parte de *init* (o PHP já entrega o HTML pronto)               |

### 5.3 Estrutura do tema

```
wp-content/themes/comunicacao-antirracista/
  style.css                    Cabeçalho do tema (obrigatório; só metadados)
  functions.php                Enqueue de CSS/JS, menus, CPTs
  header.php
  footer.php
  front-page.php
  template-parts/
    sections/   hero-slider.php  destaque.php  sobre.php  linha-do-tempo.php
                programacao.php  participantes.php
    components/ atividade.php  card-participante.php
  assets/                      ← copiar a pasta assets/ atual inteira
    css/  js/  img/
```

`assets/data/` deixa de ser usado depois que o conteúdo for importado (passo 5.6).

### 5.4 Passo a passo

**1. Criar o tema e copiar os assets**

`style.css` na raiz do tema (o CSS real continua em `assets/css/`):

```css
/*
Theme Name: Comunicação Antirracista
Version: 1.0
*/
```

**2. `functions.php`: enqueue e menus**

Reproduza a mesma ordem de CSS do `index.html` atual. A cascata depende dela.

```php
<?php
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(['principal' => 'Menu principal']);
});

add_action('wp_enqueue_scripts', function () {
    $ver = wp_get_theme()->get('Version');
    $css = [
        'base', 'components/header', 'components/footer', 'components/slider', 'components/card',
        'sections/destaque', 'sections/sobre', 'sections/linha-do-tempo',
        'sections/programacao', 'sections/participantes',
    ];
    wp_enqueue_style('fonts', 'https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap', [], null);
    $prev = 'fonts';
    foreach ($css as $file) {
        $handle = 'ca-' . str_replace('/', '-', $file);
        wp_enqueue_style($handle, get_theme_file_uri("assets/css/$file.css"), [$prev], $ver);
        $prev = $handle; // garante a ordem
    }

    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], null, true);
    wp_enqueue_script('gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', ['gsap'], null, true);
    // WordPress 6.5+: suporte nativo a ES modules
    wp_enqueue_script_module('ca-main', get_theme_file_uri('assets/js/main.js'), [], $ver);
});
```

**3. Ajustar o `main.js`**

Remova a função `render()` e os imports de `components/` e `data/`. Fica só a inicialização:

```js
import initHeaderLogo from "./modules/header-logo.js";
import initSlider from "./modules/slider.js";

gsap.registerPlugin(ScrollTrigger);
initHeaderLogo();
document.querySelectorAll("[data-slider]").forEach(initSlider);
```

Depois disso, `assets/js/components/`, `assets/js/utils.js` e `assets/data/` podem ser apagados do tema.

**4. `header.php`, `footer.php` e `front-page.php`**

- `header.php`: o `<head>` do `index.html` atual, com `wp_head()` antes de `</head>`, `<body <?php body_class(); ?>>`,
  a abertura de `<main class="container">` e o markup de `components/header.js`.
- `footer.php`: o markup de `components/footer.js`, o fechamento de `</main>` e `wp_footer()` antes de `</body>`.
- `front-page.php`: a ordem das seções, igual aos marcadores do `index.html`:

```php
<?php get_header(); ?>
<?php get_template_part('template-parts/sections/hero-slider'); ?>
<?php get_template_part('template-parts/sections/destaque'); ?>
<?php get_template_part('template-parts/sections/sobre'); ?>
<?php get_template_part('template-parts/sections/linha-do-tempo'); ?>
<?php get_template_part('template-parts/sections/programacao'); ?>
<?php get_template_part('template-parts/sections/participantes'); ?>
<?php get_footer(); ?>
```

**5. Converter cada componente em template-part**

A conversão é mecânica: o markup é o mesmo, só muda a sintaxe. Exemplo com `atividade.js`:

```js
// HOJE — assets/js/components/atividade.js
<div class="time wid1">
  <h6>${esc(atividade.hora)}</h6>
  <h1>${atividade.tipo}</h1>
  <h2>${atividade.titulo}</h2>
  ${atividade.participantes ? `<p>${esc(atividade.participantes)}</p>` : "<br>"}
  <div class="time-descricao" style="margin-bottom: ${atividade.espacoInferior}px;">
    ${esc(atividade.descricao)}
  </div>
</div>
```

```php
<?php // DEPOIS — template-parts/components/atividade.php
$id = $args['id']; ?>
<div class="time wid1">
  <h6><?php echo esc_html(get_field('hora', $id)); ?></h6>
  <h1><?php echo wp_kses_post(get_field('tipo', $id)); ?></h1>
  <h2><?php echo wp_kses_post(get_the_title($id)); ?></h2>
  <?php if ($p = get_field('participantes', $id)) : ?>
    <p><?php echo esc_html($p); ?></p>
  <?php else : ?><br><?php endif; ?>
  <div class="time-descricao" style="margin-bottom: <?php echo (int) get_field('espaco_inferior', $id); ?>px;">
    <?php echo esc_html(get_field('descricao', $id)); ?>
  </div>
</div>
```

E a seção que faz o laço (`programacao.php`), agrupando por dia:

```php
<?php
$atividades = get_posts([
    'post_type'      => 'atividade',
    'posts_per_page' => -1,
    'meta_key'       => 'ordem',
    'orderby'        => 'meta_value_num',
    'order'          => 'ASC',
]);
$dias = [];
foreach ($atividades as $a) {
    $dias[get_field('dia', $a->ID)][] = $a->ID;
}
foreach ($dias as $dia => $ids) : ?>
  <div>
    <div><img src="<?php echo esc_url(get_theme_file_uri("assets/img/programacao/dia$dia.svg")); ?>" alt=""></div>
    <?php foreach ($ids as $id) get_template_part('template-parts/components/atividade', null, ['id' => $id]); ?>
  </div>
<?php endforeach; ?>
```

Faça o mesmo com as outras seções. A tabela da seção 2 indica qual componente usa quais dados.

**6. Tipos de conteúdo e campos**

Registre os CPTs em `functions.php` (ou com o plugin *CPT UI*) e crie os campos no **ACF**:

| CPT           | Campos nativos                     | Campos ACF                                                              | Origem dos dados                 |
|---------------|------------------------------------|-------------------------------------------------------------------------|----------------------------------|
| `participante`| título = `nome`, conteúdo = `bio`, imagem destacada = `foto`, slug = `slug` | `ordem` (número)          | `data/participantes.js`          |
| `atividade`   | título = `titulo`                  | `dia` (1/2), `hora`, `tipo`, `participantes`, `descricao`, `espaco_inferior`, `video` (URL), `ordem` | `data/programacao.js` |
| *(opções)*    | —                                  | Repeater `linha_do_tempo`: `ano`, `cidade`, `tema`                      | `data/linha-do-tempo.js`         |

```php
add_action('init', function () {
    register_post_type('participante', [
        'label' => 'Participantes', 'public' => true, 'show_in_rest' => true,
        'menu_icon' => 'dashicons-groups', 'supports' => ['title', 'editor', 'thumbnail'],
    ]);
    register_post_type('atividade', [
        'label' => 'Programação', 'public' => false, 'show_ui' => true, 'show_in_rest' => true,
        'menu_icon' => 'dashicons-calendar-alt', 'supports' => ['title'],
    ]);
});
```

**7. Importar o conteúdo**

São 18 participantes e 10 atividades. Dá para cadastrar à mão pelo painel, ou importar por script:
1. Exporte os dados para JSON com Node (os arquivos já são módulos JS), por exemplo
   `node --input-type=module -e "import d from './assets/data/participantes.js'; console.log(JSON.stringify(d))" > participantes.json`.
   Se o Node reclamar do `export`, copie o arquivo com extensão `.mjs` antes.
2. Num script WP-CLI (`wp eval-file importar.php`), leia esse JSON, chame `wp_insert_post()` e
   `update_field()` para cada item e envie as fotos com `media_sideload_image()`.
3. A ordem dos itens nos arquivos de dados deve virar o campo `ordem`.

**8. Menu**

Recrie o menu em Aparência › Menus, seguindo `assets/data/menu.js`. O item "Edições Passadas" tem dois filhos.
O CSS do dropdown (`.dropdown`, `.submenu`) espera esta estrutura: use um *walker* simples ou o filtro
`nav_menu_css_class` para adicionar `dropdown` ao `<li>` pai e `submenu` ao `<ul>` filho.

**9. Testar e publicar** (ver checklist abaixo)

### 5.5 Edições passadas, TAPUME e PDFs

- **`edicoes-passadas/`** e **`TAPUME/`** são sites estáticos independentes. **Não entram no tema.**
  Deixe-os como pastas na raiz do servidor, ao lado da instalação do WordPress. O `.htaccess` padrão do
  WordPress só redireciona para o `index.php` caminhos que não existem como arquivo ou pasta, então essas
  páginas continuam funcionando.
- Os links do menu para `edicoes-passadas/...` passam a ser absolutos (`/edicoes-passadas/05-25/`).
- **Os menus das edições passadas são HTML fixo** e navegam pela própria página: só **Início** (e, no Rio,
  o logo) volta para a home. Rio (`09-25/index.html`, no `<header>`): Sobre, Programação, Participantes, Ação
  Educativa, Legado, Edições Passadas, Contato. Brasília (`05-25/index.html`, `<nav class="menu-edicao">` com
  `menu.css`/`menu.js`): Sobre, Programação, Mesa-debate, Painel Público, O Espaço, Vídeo, Edições Passadas,
  Contato. Ao adicionar uma nova edição, **inclua-a no submenu "Edições Passadas" da home e dessas duas páginas**.
- **PDFs:** todos ficam em `assets/docs/`, inclusive os usados pelas edições passadas (que apontam para
  `../../assets/docs/`). Na migração, suba para a Biblioteca de Mídia ou mantenha `assets/docs/` como pasta
  estática na raiz, e atualize os links do menu e das páginas de `edicoes-passadas/`. Preserve as regras
  do `.htaccess` que atendem os endereços antigos dos PDFs. Elas devem ficar **antes** do bloco `# BEGIN WordPress`.
- A página do Rio (`09-25`) importa `../../assets/js/modules/slider.js` e `header-logo.js`, e todas usam PDFs de
  `../../assets/docs/`. Se `assets/` mudar de lugar na migração (ex.: para dentro do tema), atualize esses caminhos.
- As edições passadas usam os favicons de `assets/img/favicon/` via `../../assets/...`. Depois da migração,
  esse caminho muda para dentro do tema. Atualize as tags `<link rel="icon">` dessas páginas, ou mantenha
  uma cópia de `assets/img/favicon/` na raiz.

### 5.6 Alternativa: manter os componentes JS (headless)

Os dados têm o formato de uma resposta de API. Se preferir não reescrever os componentes, troque os
imports de `assets/data/` no `main.js` por chamadas `fetch()` à REST API
(`/wp-json/wp/v2/participante?per_page=100&_embed`, com os campos ACF expostos) e mapeie a resposta para os
mesmos nomes de campo.
O custo é que o conteúdo continua sendo renderizado no navegador, o que é pior para SEO.

### 5.7 Checklist da migração

- [ ] Tema criado, `assets/` copiado, CSS e JS enfileirados **na mesma ordem** do `index.html`
- [ ] `main.js` reduzido à inicialização; `components/`, `utils.js` e `data/` removidos do tema
- [ ] `header.php`, `footer.php`, `front-page.php` e todos os template-parts criados
- [ ] CPTs e campos ACF criados; 18 participantes e 10 atividades cadastrados, na ordem certa
- [ ] Linha do tempo, texto Sobre e galerias cadastrados
- [ ] Menu com dropdown "Edições Passadas" funcionando (mouse e teclado)
- [ ] Comparação visual com o site atual em 1440px e 390px (sliders, programação alinhada, cards)
- [ ] Âncoras `#sec2`, `#sec3`, `#sec4` e `#footer` funcionando
- [ ] `edicoes-passadas/`, `TAPUME/` e PDFs acessíveis nas mesmas URLs de antes
- [ ] Favicons e `<title>`/`description` corretos (`title-tag`, ou plugin de SEO)
- [ ] `_backup/` **não** enviado ao servidor

---

## 6. Observações e pendências

- **Fonte da verdade:** a pasta local já esteve desatualizada em relação à produção. Antes de editar,
  confirme que o projeto local corresponde ao que está no ar.
- **SEO:** hoje o conteúdo é montado por JavaScript. Sem JS a página fica vazia. A migração para
  template-parts PHP resolve isso.
- **Imagens em WebP:** todas as imagens (exceto SVGs e favicons) estão em WebP — o site e as edições passadas
  passaram de 55 MB para 5 MB de imagens. Os PNGs anteriores estão em `_backup/png-originais/`.
- **Menu no mobile:** abaixo de 1080px o menu inteiro fica oculto. Falta um menu hambúrguer.
- **Títulos:** cada atividade da programação usa `<h1>`, o que gera vários `<h1>` na página. Vale ajustar na migração.
- **Links quebrados já presentes na produção (página de Brasília, `edicoes-passadas/05-25/`):**
  `comunicacaoantirracista_programa.pdf` e `livro/como-nao-ser-racista-web.pdf` não existem no servidor.
- **`assets/img/favicon/manifest.json`** é o arquivo genérico do gerador de favicons (nome "App"). Vale
  personalizar.
- **`.htaccess`:** faz os endereços antigos dos PDFs servirem o arquivo de `assets/docs/`
  (`/comunicacaoantirracista_*.pdf`, que ficavam na raiz, e `/edicoes-passadas/09-25/comunicacaoantiracista_*.pdf`)
  e bloqueia o acesso a `_backup/`.
- **Novo PDF:** coloque em `assets/docs/` e use o caminho `assets/docs/arquivo.pdf` (ou `../../assets/docs/...`
  a partir de `edicoes-passadas/`).
