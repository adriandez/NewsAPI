import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Nav.css";

const Nav = () => {
  const [user,] = useContext(UserContext)
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
        <li>User: {user}</li>
      </ul>
    </nav>
  );
}

export default Nav;
