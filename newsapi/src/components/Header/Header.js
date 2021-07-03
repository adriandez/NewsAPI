import React, { Component } from "react";
import Nav from "../Nav";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          <h1>NewsApi</h1>
          <Nav />
        </div>
      </header>
    );
  }
}
