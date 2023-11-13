import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss';
import '../../assets/styles/footer-style.scss'



document.getElementById('footer').innerHTML = `
  <footer>
  <a href="http://github.com/erigt/wheel_of_proyecj.git">
      <i class="fa-brands fa-square-github" ></i></a>
  <a href="https://discord.com/">
      <i class="fa-brands fa-discord" ></i></a>
  <a href="https://www.tiktok.com/es/">
      <i class="fa-brands fa-tiktok" ></i></a>
      <p><i class="fa-regular fa-copyright"></i> The West End Five</p>
  </footer>
`;
