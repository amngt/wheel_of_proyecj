import './src/pages/home/footer.js';
import './src/pages/home/header.js';

window.addEventListener('DOMContentLoaded', (event) => {

  fetch('header.html')
  .then(response => response.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html));
  

  fetch('footer.html')
  .then(response => response.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html));
});

