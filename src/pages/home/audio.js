document.addEventListener('DOMContentLoaded', (event) => {
    const navbarToggle = document.querySelector('.fa-gear');
    const dropdownConfig = document.getElementById('configNav');
   
    if (navbarToggle && dropdownConfig) {
      navbarToggle.addEventListener('click', function() {
        dropdownConfig.classList.toggle('activado');
      });
    }
   });
   