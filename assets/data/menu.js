/**
 * Menu principal (header da home).
 * - "submenu" cria um dropdown.
 * - O submenu "Edições Passadas" também existe, em HTML fixo, nas páginas de edicoes-passadas/.
 * No WordPress: register_nav_menus() + Aparência › Menus.
 */
export default [
  {
    "label": "Início",
    "url": "#"
  },
  {
    "label": "Sobre",
    "url": "#sec2"
  },
  {
    "label": "Programação",
    "url": "#sec3"
  },
  {
    "label": "Participantes",
    "url": "#sec4"
  },
  {
    "label": "Ação Educativa",
    "url": "assets/docs/comunicacaoantiracista_3a_documentacao_educativo_A4.pdf"
  },
  {
    "label": "Legado",
    "url": "assets/docs/comunicacaoantiracista_3a_documentacao_relatoria_A4.pdf"
  },
  {
    "label": "Edições Passadas",
    "url": "#",
    "submenu": [
      {
        "label": "Brasília 25",
        "url": "edicoes-passadas/05-25/"
      },
      {
        "label": "Rio de Janeiro 25",
        "url": "edicoes-passadas/09-25/"
      }
    ]
  },
  {
    "label": "Contato",
    "url": "#footer"
  }
];
