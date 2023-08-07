import React from "react";
import Navbar from "../Navbar";
import "./js.css";
import "./square.css";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <ul>
        <li>Liberty</li>
      </ul>
      <div className="square-container">
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Home;
