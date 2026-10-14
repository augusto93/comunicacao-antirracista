/**
 * Esconde o logo do topo ao rolar para baixo e mostra ao rolar para cima.
 * Depende de GSAP + ScrollTrigger (globais, carregados no index.html).
 */
export default function initHeaderLogo() {
  const logo = document.querySelector(".header-logo");
  if (!logo) return;

  let lastDirection = 0;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      // Só anima quando a direção muda, em vez de criar um tween a cada evento de scroll
      if (self.direction === lastDirection) return;
      lastDirection = self.direction;

      if (self.direction === 1) {
        // rolando pra baixo → fade + esconder (display none)
        gsap.to(logo, {
          opacity: 0,
          y: -20,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
          onComplete: () => (logo.style.display = "none")
        });
      } else {
        // rolando pra cima → mostrar (display block antes da animação)
        logo.style.display = "block";
        gsap.to(logo, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true
        });
      }
    }
  });
}
