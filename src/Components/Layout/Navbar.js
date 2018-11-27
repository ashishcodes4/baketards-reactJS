import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="nav">
          <Link className="nav_link home" to="/home">
            home
          </Link>
          <Link className="nav_link about" to="/about">
            aboout
          </Link>
          <Link className="nav_link menu" to="/menu">
            menu
          </Link>
          <Link className="nav_link logo" href="/home">
            <img
              src=""
              alt="ultra_final_logo"
            />
          </Link>
          <Link className="nav_link gallery" to="/gallery">
            gallery
          </Link>
          <Link className="nav_link contacts" to="/contact">
            contact
          </Link>
          <Link className="nav_link deals" to="/about">
            deals
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
