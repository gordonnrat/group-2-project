// Home.js

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
      <div className="main-container">
        <div className="squares-container">
          {/* Square 1 */}
          {/* ... Square 1 content ... */}

          {/* Square 2 */}
          {/* ... Square 2 content ... */}

          {/* Square 3 */}
          {/* ... Square 3 content ... */}

          {/* Square 4 */}
          {/* ... Square 4 content ... */}

          {/* Square 5 */}
          {/* ... Square 5 content ... */}

          {/* Square 6 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-pink"></div>
            </div>
          </Link>

          {/* Square 7 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-yellow"></div>
            </div>
          </Link>

          {/* Square 8 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-cyan"></div>
            </div>
          </Link>

          {/* Square 9 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-gray"></div>
            </div>
          </Link>

          {/* Square 10 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-brown"></div>
            </div>
          </Link>
        </div>

        {/* Circle Section */}
        {/* ... Circle section content ... */}
      </div>
    </div>
  );
}

export default Home;
