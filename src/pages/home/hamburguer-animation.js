document.addEventListener('DOMContentLoaded', (event) => {
  const navbarToggle = document.getElementById('navbarToggle');
  const dropdownMenu = document.getElementById('navbarNav');
  const navLinks = dropdownMenu.querySelectorAll('a');
  const currentPath = window.location.pathname;

  if (navbarToggle && dropdownMenu) {
    navbarToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('activado');
      const spans = this.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.classList.remove('br-1', 'br-2', 'br-3');
        if (index % 2 === 0) {
          span.classList.add('br-1', 'animado');
        } else {
          span.classList.add('br-3', 'animado');
        }
        span.classList.add('br-2', 'animado');
      });
    });
  }

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.color = 'navy'; // Cambia el color al que desees
    }
  });
});
