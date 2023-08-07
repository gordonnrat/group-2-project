import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar"; // Import your Sidebar component
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
      <div className="main-container">
        <Sidebar /> {/* Render your Sidebar component here */}
        <div className="square-container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
