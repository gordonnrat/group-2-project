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

      <div className="squares-container">
        {/* Square 1 */}
        <div className="square-container">
          <div className="text">Favorites</div>
          <div className="square"></div>
        </div>

        {/* Square 2 */}
        <div className="square-container">
          <div className="text">Square 2</div>
          <div className="square"></div>
        </div>

        {/* Square 3 */}
        <div className="square-container">
          <div className="text">Square 3</div>
          <div className="square"></div>
        </div>

        {/* Square 4 */}
        <div className="square-container">
          <div className="text">Square 4</div>
          <div className="square"></div>
        </div>

        {/* Square 5 */}
        <div className="square-container">
          <div className="text">Square 5</div>
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
