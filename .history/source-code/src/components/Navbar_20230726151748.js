import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MainNavbar() {
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
        <div className="search-container">
          <button type="button" onClick={performSearch}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
        {/* Add more elements for the right side of the navbar */}
      </div>
    </nav>
  );
}

export default MainNavbar;
