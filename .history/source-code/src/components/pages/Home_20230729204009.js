import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./js.css";

function Home() {
  return (
    <div>
      <Navbar />
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
          <Link to="/square2">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 3 */}
          <Link to="/">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 4 */}
          <Link to="/Playlist Name">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square"></div>
            </div>
          </Link>

          {/* Square 5 */}
          <Link to="/Playlist Name">
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
