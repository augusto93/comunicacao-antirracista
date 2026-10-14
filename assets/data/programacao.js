/**
 * Programação, agrupada por dia.
 * - "tipo" e "titulo" aceitam <br>.
 * - "participantes": null quando não há (ex.: pocket show).
 * - "espacoInferior": margem em px abaixo da descrição, ajustada à mão para alinhar as colunas dos dois dias.
 * - "video": link da gravação (ex.: YouTube). Vazio ("") = sem botão. Preenchido = aparece o botão "assistir"
 *   abaixo da descrição. Ex.: "video": "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 * No WordPress: CPT "atividade" + campos ACF.
 */
export default [
  {
    "imagem": "img/programacao/dia1.svg",
    "atividades": [
      {
        "hora": "30.MAI - 14h",
        "tipo": "Momento<br>Panorama",
        "titulo": "Políticas Antirracistas no Ceará: do papel à vida real",
        "participantes": "Com Zelma Madeira, Isaac Santos e Sarah Menezes | Mediação: Pâmela Carvalho",
        "descricao": "Este momento apresenta um panorama direto das políticas antirracistas em curso no Nordeste e no Ceará, olhando para o que já existe, o que está em estruturação e o que ainda não chega à população. A conversa aborda como programas públicos se organizam, como são comunicados e como se articulam com educação, cultura e direitos. Também discute os principais desafios de continuidade, orçamento e monitoramento das políticas. O objetivo é qualificar o debate público com base em dados e experiências concretas, sem promoção institucional, conectando políticas públicas, sociedade civil e comunicação.",
        "espacoInferior": 90,
        "video": "https://youtu.be/cpyEiH_-AEU"
      },
      {
        "hora": "30.MAI - 15h",
        "tipo": "Conferência de Abertura",
        "titulo": "Racismo estrutural e interseccionalidade: caminhos para transformar a comunicação",
        "participantes": "Com Carla Akotirene | Mediação: Luizete Vicente",
        "descricao": "A conferência abre o evento discutindo como raça, gênero, classe e território estruturam o poder e produzem apagamentos históricos e contemporâneos. A partir da experiência de pesquisa e militância de Carla Akotirene, a conversa aborda como o racismo se reproduz dentro das instituições, nas relações sociais e até mesmo dentro das próprias comunidades quando falta letramento racial. A reflexão propõe caminhos para que comunicação, cultura e políticas públicas enfrentem o racismo de forma prática, reconhecendo as complexidades da sociedade brasileira e abrindo espaço para novos pactos de convivência e responsabilidade coletiva.",
        "espacoInferior": 90,
        "video": "https://youtu.be/5vv7J4V7VFU"
      },
      {
        "hora": "30.MAI - 17h",
        "tipo": "Painel 1",
        "titulo": "Memória que resiste: reconstruindo presenças no Nordeste",
        "participantes": "Com Raquel Kariri e Bruno de Castro | Mediação: Pâmela Carvalho",
        "descricao": "O painel discute como o apagamento histórico de negros, indígenas e quilombolas produziu narrativas incompletas sobre o Nordeste. A conversa aborda como escolas, meios de comunicação e políticas culturais podem ajudar a reconstruir memórias coletivas e ampliar repertórios sobre quem somos. Ao colocar diferentes experiências em diálogo, o encontro busca refletir sobre como recuperar histórias silenciadas e fortalecer presenças que sempre fizeram parte da formação social do país.",
        "espacoInferior": 90,
        "video": "https://youtu.be/QUXt1J7bQJg"
      },
      {
        "hora": "30.MAI - 18h30",
        "tipo": "Painel 2",
        "titulo": "Quem pode narrar o Nordeste? Conhecimento, mídia e disputa de legitimidade",
        "participantes": "Com Vera Rodrigues e Rubens Rodrigues | Mediação: Luizete Vicente",
        "descricao": "Como universidades, meios de comunicação e espaços públicos de fala ajudam a definir quem é reconhecido como voz legítima para interpretar o Nordeste? Ao reunir pesquisa e jornalismo, o encontro propõe refletir sobre como narrativas públicas podem repetir estereótipos, inclusive por meio do racismo recreativo, ou ampliar repertórios, deslocando o Nordeste do lugar de caricatura e afirmando a região como centro de pensamento, crítica e produção de sentido.",
        "espacoInferior": 156,
        "video": "https://youtu.be/7YLsN--OLnE"
      },
      {
        "hora": "30.MAI - 20h",
        "tipo": "Pocket Show",
        "titulo": "Roberta Kaya",
        "participantes": null,
        "descricao": "Artista cearense, cantora, compositora, instrumentista e produtora musical, Roberta Kaya encerra o primeiro dia de programação com uma apresentação que atravessa música afro-brasileira, experimentação sonora, presença negra e criação contemporânea. Sua participação amplia a dimensão artística do evento, afirmando a cultura como campo de memória, linguagem e transformação.",
        "espacoInferior": 90,
        "video": "https://youtu.be/OBSl26fAc1U"
      }
    ]
  },
  {
    "imagem": "img/programacao/dia2.svg",
    "atividades": [
      {
        "hora": "31.MAI - 14H",
        "tipo": "PAINEL 3",
        "titulo": "Território, palavra e defesa<br>da vida: comunicação contra <br>o apagamento",
        "participantes": "Com Juliana Jenipapo e Aurila Quilombola | Mediação: Pâmela Carvalho",
        "descricao": "Em diferentes territórios do Ceará, povos indígenas e comunidades quilombolas seguem enfrentando apagamentos históricos, disputa por direitos e obstáculos para que suas demandas sejam compreendidas pela sociedade e incorporadas pelas políticas públicas. Este painel discute como a comunicação pode atuar na proteção de direitos, na preservação da memória e no fortalecimento da incidência pública, articulando território, organização coletiva e defesa da vida. Ao reunir experiências indígenas e quilombolas, a conversa propõe refletir sobre quem narra esses territórios, como romper silenciamentos e de que maneira a palavra pública pode se tornar ferramenta de permanência, reconhecimento e futuro.",
        "espacoInferior": 87,
        "video": "https://youtu.be/PuGVwAPRk5E"
      },
      {
        "hora": "31.MAI - 15H15",
        "tipo": "PAINEL 4",
        "titulo": "Coletivo Caixa Preta: presença<br>negra, organização coletiva<br>e transformação institucional",
        "participantes": "Com Karina Dória | Mediação: Carlos Borges",
        "descricao": "A trajetória do Coletivo Caixa Preta revela como a organização de empregadas e empregados negros dentro da CAIXA tem sido fundamental para ampliar debates sobre representatividade, enfrentamento ao racismo e transformação institucional. A conversa percorre o surgimento do coletivo, sua presença no Nordeste e os caminhos construídos para afirmar pautas de equidade racial em uma estrutura historicamente marcada por desigualdades, silenciamentos e barreiras de ascensão. Com a participação de uma representante do coletivo de Salvador (BA), o encontro busca refletir sobre conquistas já alcançadas, desafios ainda persistentes e sobre como a ação coletiva pode fortalecer pertencimento, incidência política e novos horizontes de justiça dentro do ambiente corporativo.",
        "espacoInferior": 62,
        "video": "https://youtu.be/_nkNiOSmyLQ"
      },
      {
        "hora": "31.MAI - 16h30",
        "tipo": "Painel 5",
        "titulo": "Vozes que contam o país: jornalismo, literatura e narrativas de dignidade",
        "participantes": "Com: Dediane Souza e Larissa Carvalho | Mediação: Luizete Vicente",
        "descricao": "Quem conta as histórias do Brasil? E de que forma essas histórias são contadas? Este painel reúne jornalistas e pesquisadoras para refletir sobre como narrativas produzidas a partir das experiências de pessoas negras e periféricas podem ampliar o debate público. A conversa discute ética, responsabilidade editorial e formas de construir narrativas que valorizem dignidade, memória e futuro, evitando reproduzir estigmas ou transformar sofrimento em espetáculo.",
        "espacoInferior": 90,
        "video": "https://youtu.be/BbHu55IMJTQ"
      },
      {
        "hora": "31.MAI - 18h",
        "tipo": "Painel 6",
        "titulo": "Diversidade na prática: investimento<br>e oportunidades<br>no Nordeste",
        "participantes": "Com representante CAIXA e representante do Banco do Nordeste | Mediação: Pâmela Carvalho",
        "descricao": "O painel reúne representantes de instituições públicas e da sociedade civil para discutir como políticas de diversidade, governança e investimento podem gerar oportunidades reais no Nordeste. A conversa aborda compromissos institucionais, programas de inclusão e estratégias para fortalecer ecossistemas locais de cultura, educação e economia. O objetivo é aproximar discurso e prática, apresentando caminhos para que equidade e desenvolvimento caminhem juntos.",
        "espacoInferior": 90,
        "video": "https://youtu.be/ob1wBUrfYv4"
      },
      {
        "hora": "31.MAI - 19h",
        "tipo": "Pocket Show",
        "titulo": "Caio Prado",
        "participantes": null,
        "descricao": "Cantor e compositor carioca, Caio Prado encerra a 3ª edição do Comunicação Antirracista com uma apresentação marcada por música, presença e afirmação política. Sua trajetória artística conecta voz, performance e crítica social, ampliando o encerramento do evento como experiência sensível de encontro, escuta e celebração.",
        "espacoInferior": 103,
        "video": "https://youtu.be/MuMTMl6NKTM"
      }
    ]
  }
];
