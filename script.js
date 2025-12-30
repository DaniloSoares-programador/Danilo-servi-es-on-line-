const elements = document.querySelectorAll('.fade-up, .fade-down');

function animateScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateScroll);
window.addEventListener('load', animateScroll);
