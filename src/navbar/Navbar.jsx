import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-spacer">
        <h1 className="navbar-spacer-title">PoKéMern</h1>
      </div>
      <div className="navbar-container">
        <h1 className="navbar-title">PoKéMern</h1>
        <ul className="navbar-list">
          <li className="navbar-list-item" >
            <a href="Home">
              Home
            </a>
          </li>
          <li className="navbar-list-item" >
            Search
          </li>
          <li className="navbar-list-item" >
            <a href="https://github.com/dmpellegrini/pokemern-fe" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;
