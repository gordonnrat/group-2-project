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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="navbar-logo">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942V1.20577C0.5 0.43597 1.33333 -0.0451542 2 0.339746L15.5 8.13397Z" fill="#00B4D8"/>
                  </svg>
                  <div><span className="blue">sound</span>ex</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/store">
              <i className="fas fa-store"></i> Store
            </Link>
          </li>
          <li>
            <Link to="/channels">
              <i className="fas fa-tv"></i> Channels
            </Link>
          </li>
          <li>
            <Link to="/subscription">
              <i className="fas fa-newspaper"></i> Subscription
            </Link>
          </li>
        </ul>
        <div className="right-nav">
          <input type="text" placeholder="Search" />
          <div className="user-section">
            {/* Your user-related elements can go here */}
            <span>User</span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        {/* Your sidebar content can go here */}
        <h1 className="top-heading">
          <i className="fas fa-music"></i> Your Library
        </h1>
        <ul>
          <li>
            <Link to="/favorites">
              <i className="far fa-heart"></i> Favorites
            </Link>
          </li>
          
          <li>
            <Link to="/songs to cry to alone">
              <i className="fas fa-square"></i> songs to cry to alone
              
            </Link>
          </li>

          <li>
          <Link to="/artist name">
              <i className="fas fa-circle"></i> Artist Name
            </Link>
          </li>

          <li>
            <Link to="/artist name">
              <i className="fas fa-circle"></i> Artist Name
            </Link>
          </li>
            
          <li>
            <Link to="/playlist">
              <i className="fas fa-square"></i> Playlist #2
            </Link>
          </li>

          <li>
            <Link to="/album name">
              <i className="fas fa-square"></i> Album Name
            </Link>
          </li>
        
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;

