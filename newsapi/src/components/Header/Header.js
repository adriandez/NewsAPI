import React from "react";
import Nav from "../Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <h1>NewsApi</h1>
          <Nav />
      </div>
    </header>
  );
}

export default Header;
