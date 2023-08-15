import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {

  const userSignUpInfo = JSON.parse(localStorage.getItem('userSignUpInfo'));

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
          <div className="search-button">
            <Link to="/search">
              <i className="fas fa-magnifying-glass"></i> Search
            </Link>
          </div>
          <div className="user-section">
            <span>{userSignUpInfo.username}</span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="top-heading">
          <div className="library-header">
            <i className="fas fa-play library-title-icon"></i> 
            <p>Your Library</p>
          </div>
          <i className="fa-solid fa-plus playlist-add"></i>
        </div>
        <ul>
          <li>
            <Link to="/playlist/songs-to-cry-to-alone">
              <div className="library-list library-playlist">
                <div className="library-playlist-img-container-fav">
                  <img src={require("./images/Favorite_fill.png")} alt="" className="library-playlist-img-fav" />
                </div>
                <div className="library-list-info">
                  <p className="library-list-name">Favorites</p>
                  <p className="library-list-type">Playlist</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/playlist/songs-to-cry-to-alone">
              <div className="library-list library-playlist">
                <div className="library-img-container">
                  <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="library-img library-playlist-img" />
                </div>
                <div className="library-list-info">
                  <p className="library-list-name">songs to cry to alone</p>
                  <p className="library-list-type">Playlist</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/artist">
              <div className="library-list library-artist">
                <div className="library-img-container">
                  <img src="https://cdn8.picryl.com/photo/2016/05/14/vivaldi-antonio-b60bb4-1024.jpg" alt="" className="library-img library-artist-img" />
                </div>
                <div className="library-list-info">
                  <p className="library-list-name">Antonio Vivaldi</p>
                  <p className="library-list-type">Artist</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/album/the-four-seasons">
              <div className="library-list library-playlist">
                <div className="library-img-container">
                  <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="library-img library-playlist-img" />
                </div>
                <div className="library-list-info">
                  <p className="library-list-name">The Four Seasons</p>
                  <p className="library-list-type">Album | Antonio Vivaldi</p>
                </div>
              </div>
            </Link>
          </li>
        
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;

