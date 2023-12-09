import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h3 className="header-name"> Kayla Sullens </h3>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
  
  export default NavTabs;
  