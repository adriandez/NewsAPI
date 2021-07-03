import React, { Component } from "react";
import Nav from "../Nav";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="wrapper">
          <Nav />
        </div>
      </footer>
    );
  }
}

export default Footer;
