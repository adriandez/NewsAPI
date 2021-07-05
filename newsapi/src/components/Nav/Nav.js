import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { slide as Menu } from "react-burger-menu";
import "./Nav.scss";

const Nav = () => {
  const [user] = useContext(UserContext);
  // eslint-disable-next-line
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wapperNav">
      <Menu right width={"50%"} disableAutoFocus customCrossIcon={false}>
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
      </Menu>
    </div>
  );
};

export default Nav;
