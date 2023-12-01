import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className="nav-link"
          >
            Portfolio
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className="nav-link"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  