import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_modf.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-brand" to="/home">
          <img
            src={logo}
            width="250"
            height="77"
            alt=""
          />
        </Link>
      </nav>
    );
  }
}

export default Navbar;
