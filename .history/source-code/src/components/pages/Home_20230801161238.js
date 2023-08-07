// Home.js

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./js.css";


// ... (previous code)

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
          {/* ... (previous code) */}
        </div>

        <div className="circles-container">
          {/* Circle 1 */}
          <Link to="/Playlist">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </Link>

          {/* Circle 2 */}
          <Link to="/Playlist">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </Link>

          {/* Circle 3 */}
          <Link to="/Playlist">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </Link>

          {/* Circle 4 */}
          <Link to="/Playlist">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </Link>

          {/* Circle 5 */}
          <Link to="/Playlist">
            <div className="circle-container">
              <div className="circle"></div>
            </div>
          </Link>
        </div>

        <div className="squares-container">
          {/* Square 6 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-yellow"></div>
            </div>
          </Link>

          {/* Square 7 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-cyan"></div>
            </div>
          </Link>

          {/* Square 8 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-pink"></div>
            </div>
          </Link>

          {/* Square 9 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-brown"></div>
            </div>
          </Link>

          {/* Square 10 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-gray"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
