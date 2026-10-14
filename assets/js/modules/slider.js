/**
 * Slider com fade (GSAP) e carregamento sob demanda. Uso:
 *   <div data-slider data-slider-duration="1" data-slider-delay="4" data-slider-ease="power2.out">
 *     <img class="slide" src="primeira.webp">
 *     <img class="slide" data-src="segunda.webp">   ← só é baixada quando estiver para aparecer
 *   </div>
 *
 * - Só baixa o slide atual e o próximo (os demais ficam em data-src).
 * - Só começa a rodar quando o slider entra na tela; um slider oculto
 *   (ex.: display: none no mobile) nunca começa e não baixa nada.
 * - Se o próximo slide ainda não terminou de baixar, espera por ele antes da transição.
 */

/** Troca data-src por src, iniciando o download da imagem. */
function loadSlide(slide) {
  if (slide && slide.dataset.src) {
    slide.src = slide.dataset.src;
    slide.removeAttribute("data-src");
  }
}

/** Resolve quando a imagem terminou de carregar (ou falhou — o slider não deve travar). */
function whenLoaded(slide) {
  if (slide.complete) return Promise.resolve();
  return new Promise((resolve) => {
    slide.addEventListener("load", resolve, { once: true });
    slide.addEventListener("error", resolve, { once: true });
  });
}

export default function initSlider(container) {
  const slides = container.querySelectorAll(".slide");
  if (slides.length === 0) return;

  const duration = parseFloat(container.dataset.sliderDuration) || 1; // duração da transição (s)
  const delay = parseFloat(container.dataset.sliderDelay) || 4;       // tempo visível (s)
  const ease = container.dataset.sliderEase || "power2.out";
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const active = i === index;
      gsap.to(slide, {
        opacity: active ? 1 : 0,
        scale: active ? 1 : 1.05,
        visibility: active ? "visible" : "hidden",
        zIndex: active ? 1 : 0,
        duration,
        ease
      });
    });
  }

  async function next() {
    const index = (current + 1) % slides.length;
    loadSlide(slides[index]);
    await whenLoaded(slides[index]);
    current = index;
    showSlide(current);
    loadSlide(slides[(current + 1) % slides.length]); // adianta o download do seguinte
    setTimeout(next, (delay + duration) * 1000);
  }

  function start() {
    loadSlide(slides[0]);
    showSlide(current);
    if (slides.length > 1) {
      loadSlide(slides[1]);
      setTimeout(next, (delay + duration) * 1000);
    }
  }

  // Observa o primeiro slide (e não o container, que pode ter altura zero)
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      observer.disconnect();
      start();
    }
  }, { rootMargin: "200px" });
  observer.observe(slides[0]);
}
