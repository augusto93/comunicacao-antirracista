import { asset, esc } from "../utils.js";

const slides = [
  { img: "img/hero/slide-1.webp", alt: "Carla Akotirene" },
  { img: "img/hero/slide-2.webp", alt: "Aurila Quilombola" },
  { img: "img/hero/slide-3.webp", alt: "Bruno de Castro" },
  { img: "img/hero/slide-4.webp", alt: "Dediane Souza" },
  { img: "img/hero/slide-5.webp", alt: "Juliana Jenipapo" },
  { img: "img/hero/slide-6.webp", alt: "Caio Prado" },
  { img: "img/hero/slide-7.webp", alt: "Wellyson Aguiar" },
  { img: "img/hero/slide-8.webp", alt: "Carlos Borges" },
  { img: "img/hero/slide-9.webp", alt: "Pâmela Carvalho" },
  { img: "img/hero/slide-10.webp", alt: "Luizete Vicente" },
  { img: "img/hero/slide-11.webp", alt: "Roberta Kaya" },
  { img: "img/hero/slide-12.webp", alt: "Zelma Madeira" },
  { img: "img/hero/slide-13.webp", alt: "Vera Rodrigues" },
  { img: "img/hero/slide-14.webp", alt: "Sarah Menezes" },
  { img: "img/hero/slide-15.webp", alt: "Rubens Rodrigues" },
  { img: "img/hero/slide-16.webp", alt: "Raquel Kariri" },
  { img: "img/hero/slide-17.webp", alt: "Larissa Carvalho" },
  { img: "img/hero/slide-18.webp", alt: "Karina Dória" },
  { img: "img/hero/slide-19.webp", alt: "Isaac Santos" },
];

/** Slider de destaque do topo. Só o 1º slide carrega de início; os demais, sob demanda (modules/slider.js). */
export default function HeroSlider() {
  return `
    <section class="imghf" data-slider data-slider-duration="1.2" data-slider-delay="4">
      ${slides.map((slide, i) => `
      <img class="slide" ${i === 0 ? `src="${asset(slide.img)}" fetchpriority="high"` : `data-src="${asset(slide.img)}"`} alt="${esc(slide.alt)}">`).join("")}
    </section>`;
}
