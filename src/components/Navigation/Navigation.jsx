import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h3> Kayla Sullens </h3>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
  
  export default NavTabs;
  