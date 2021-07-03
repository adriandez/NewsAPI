import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form">NewsForm</Link>
        </li>
        <li>
          <Link to="/list">NewsList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
