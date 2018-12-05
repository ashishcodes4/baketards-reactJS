import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-brand" to="/home">
          © 2018 Baketards
        </Link>
      </nav>
    );
  }
}

export default Footer;
