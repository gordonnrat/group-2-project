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
      <a href="/Favorites"> {/* Anchor tag to make the square clickable */}
        <div className="square-container">
          <div className="text">Favorites</div> {/* Add the text above the square */}
          <div className="square"></div>
          <div className="text">yello</div>
        </div>
      </a>
    </div>
  );
}

export default Home;
