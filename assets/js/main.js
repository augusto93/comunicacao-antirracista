/**
 * Comunicação Antirracista — ponto de entrada.
 * 1. Renderiza cada componente no seu ponto de montagem ([data-component] no index.html),
 *    usando os dados de assets/data/*.js
 * 2. Inicializa os comportamentos (slider, header)
 */
import menu from "../data/menu.js";
import edicoes from "../data/linha-do-tempo.js";
import dias from "../data/programacao.js";
import participantes from "../data/participantes.js";
import Header from "./components/header.js";
import HeroSlider from "./components/hero-slider.js";
import Destaque from "./components/destaque.js";
import Sobre from "./components/sobre.js";
import LinhaDoTempo from "./components/linha-do-tempo.js";
import Programacao from "./components/programacao.js";
import Participantes from "./components/participantes.js";
import Footer from "./components/footer.js";
import initHeaderLogo from "./modules/header-logo.js";
import initSlider from "./modules/slider.js";

function render() {
  const components = {
    "header": () => Header({ menu }),
    "hero-slider": HeroSlider,
    "destaque": Destaque,
    "sobre": Sobre,
    "linha-do-tempo": () => LinhaDoTempo({ edicoes }),
    "programacao": () => Programacao({ dias }),
    "participantes": () => Participantes({ participantes }),
    "footer": Footer,
  };

  document.querySelectorAll("[data-component]").forEach((mount) => {
    const component = components[mount.dataset.component];
    if (component) mount.outerHTML = component();
  });
}

function init() {
  render();

  gsap.registerPlugin(ScrollTrigger);
  initHeaderLogo();
  document.querySelectorAll("[data-slider]").forEach(initSlider);

  // Como o conteúdo é renderizado via JS, rola até a âncora da URL (ex.: #sec3) depois de montar
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
}

init();
