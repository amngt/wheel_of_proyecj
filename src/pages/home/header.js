import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/v4-shims.scss'
import '../../assets/styles/header-style.scss'
import './hamburguer-animation.js'
import logo from '../../assets/img/logo.png'
import './audio.js'
document.getElementById('header').innerHTML = `
  <header>
    <nav class="navbar">
     <img src="${logo}" class="logo" alt="ShowDown Saloon logo" />
     <i class="fa-solid fa-gear navbar-toggle" ></i>
     <div class="dropdown-menu" id="configNav">
        <audio controls autoplay loop >
          <source src="./src/assets/audio/Western Modern Soundtrack - Freedom Trail Studio.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
    </div>
    
      <div class="navbar-toggle" id="navbarToggle">
        <span class="br-1"></span>
        <span class="br-2"></span>
        <span class="br-3"></span>
      </div>
      <div class="dropdown-menu" id="navbarNav">
        <ul class="navbar-nav ">
            <li> <a href="/">Home</a></li>
            <li> <a href="/src/pages/players/players.html">Players</a></li>
            <li> <a href="/src/pages/results/results.html">Results</a></li>
            <li> <a href="#">Settings</a></li>
        </ul>
      </div>
    </nav>
  </header>
`

