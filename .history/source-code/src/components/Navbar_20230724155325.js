import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <div>
      {/* Main Navbar */}
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
    <input type="text" placeholder="Search" />
    <i className="fas fa-search"></i>
  </div>
  
</div>

      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        {/* Your sidebar content can go here */}
        <ul>
          <li>
            <Link to="/Favorites">
              <i className="far fa-heart"></i> Favorites
            </Link>
          </li>
          <li>
            <Link to="/songs to cry to alone">
              <i className="fas fa-square"></i> songs to cry to alone
              
            </Link>
          </li>
          {/* Add more sidebar items as needed */}

          <li>
          <Link to="/Artist Name">
              <i className="fas fa-circle"></i> Artist Name
            </Link>
            </li>


            <li>
            <Link to="/Artist Name">
              <i className="fas fa-circle"></i> Artist Name
            </Link>
            </li>
            
            <li>
            <Link to="/Playlist">
              <i className="fas fa-square"></i> Playlist #2
            </Link>
            </li>
            <li>
            <Link to="/Album Name">
              <i className="fas fa-square"></i> Album Name
            </Link>
            </li>
          


          









        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
