import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Navbar from "../Navbar";
import "./js.css"; // Import the CSS file you created

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

      <div className="squares-container">
        <a href="/Favorites">
          <div className="square-container">
            <div className="text">Favorites</div>
            <div className="square"></div>
          </div>
        </a>

        {/* Add four more square containers */}
        <a href="/Square2">
          <div className="square-container">
            <div className="text">Square 2</div>
            <div className="square"></div>
          </div>
        </a>

        <a href="/Square3">
          <div className="square-container">
            <div className="text">Square 3</div>
            <div className="square"></div>
          </div>
        </a>

        <a href="/Square4">
          <div className="square-container">
            <div className="text">Square 4</div>
            <div className="square"></div>
          </div>
        </a>

        <a href="/Square5">
          <div className="square-container">
            <div className="text">Square 5</div>
            <div className="square"></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
