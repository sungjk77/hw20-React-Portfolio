import React from "react";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-dark bg-dark p-0 m-0">
    <ul className="nav">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
