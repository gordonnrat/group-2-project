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
        <div className="circles-container">
          {/* Circle 1 */}
          <div className="circle-container">
            <div className="circle"></div>
            {/* Square 1 */}
            <Link to="/Playlist">
              <div className="square-container">
                <div className="text">Playlist Name</div>
                <div className="square square-yellow"></div>
              </div>
            </Link>
            {/* Square 2 */}
            <Link to="/Playlist">
              <div className="square-container">
                <div className="text">Playlist Name</div>
                <div className="square square-pink"></div>
              </div>
            </Link>
            {/* Square 3 */}
            <Link to="/Playlist">
              <div className="square-container">
                <div className="text">Playlist Name</div>
                <div className="square square-cyan"></div>
              </div>
            </Link>
            {/* Square 4 */}
            <Link to="/Playlist">
              <div className="square-container">
                <div className="text">Playlist Name</div>
                <div className="square square-gray"></div>
              </div>
            </Link>
            {/* Square 5 */}
            <Link to="/Playlist">
              <div className="square-container">
                <div className="text">Playlist Name</div>
                <div className="square square-brown"></div>
              </div>
            </Link>
          </div>

          {/* Repeat the same structure for other circles */}
          {/* Circle 2 */}
          {/* Circle 3 */}
          {/* Circle 4 */}
          {/* Circle 5 */}
        </div>
      </div>
    </div>
  );
}

export default Home;
