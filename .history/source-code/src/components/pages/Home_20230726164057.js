import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
t
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
      <a href="#favorites"> {/* Anchor tag to make the square clickable */}
        <div className="square-container">
          <div className="text">Favorites</div> {/* Add the text above the square */}
          <div className="square"></div>
        </div>
      </a>
      <Sidebar /> {/* Render the Sidebar component */}
    </div>
  );
}

export default Home;
