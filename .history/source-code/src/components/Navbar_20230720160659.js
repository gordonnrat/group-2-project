import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="left-nav">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/Store">
            <i className="fas fa-store"></i> Store
          </Link>
        </li>
        <li>
          <Link to="/Channels">
            <i className="fas fa-tv"></i> Channels
          </Link>
        </li>
        <li>
          <Link to="/Subscription">
            <i className="fas fa-newspaper"></i> Subscription
          </Link>
        </li>
      </ul>
      <div className="right-nav">
        <input type="text" placeholder="Search" />
        <div className="user-section">
          <span>Username</span>
          <i className="fas fa-user"></i> {/* User icon */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
