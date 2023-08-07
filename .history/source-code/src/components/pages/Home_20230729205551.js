import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./js.css";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="top-heading">
        <i className="fas fa-music"></i> Your Library
        
      </h1>
      <ul>
        <li>Liberty</li>
      </ul>
      <div className="main-container">
        <div className="squares-container">
          {/* Square 1 */}
          <Link to="/favorites">
            <div className="square-container">
              <div className="text">Favorites</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Add more square containers for other items */}
          {/* Square 2 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 3 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 4 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 5 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
