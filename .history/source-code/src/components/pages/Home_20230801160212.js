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
          <Link to="/favorites">
            <div className="square-container">
              <div className="text">Favorites</div>
              <div className="square square-red"></div>
            </div>
          </Link>

          {/* Square 2 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-blue"></div>
            </div>
          </Link>

          {/* Square 3 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-green"></div>
            </div>
          </Link>

          {/* Square 4 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-orange"></div>
            </div>
          </Link>

          {/* Square 5 */}
          <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-purple"></div>
            </div>
          </Link>
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






         {/* Additional Square 6 */}
         <Link to="/Playlist">
            <div className="square-container">
              <div className="text">Playlist Name</div>
              <div className="square square-yellow"></div>
            </div>
          </Link>


     




























        </div>
      </div>
    </div>
  );
}

export default Home;
