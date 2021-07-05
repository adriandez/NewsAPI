import React from "react";
import Nav from "../Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="wrapperHeader">
        <h2>NewsApi</h2>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
