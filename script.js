/* =========================================
   ANIMAÇÕES ELEGANTES AO ROLAR A PÁGINA
   Padrão profissional e discreto
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-down"
  );

  /* Estado inicial (antes de aparecer) */
  animatedElements.forEach(el => {
    el.style.opacity = "0";
  });

  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }

    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

});


/* =========================================
   SCROLL SUAVE PARA LINKS INTERNOS
   Clássico e funcional
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================================
   HEADER SOMBRA AO ROLAR
   Sensação de profundidade sutil
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});
