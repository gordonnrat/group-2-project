import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Create a separate CSS file for the sidebar styles

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/Favorites">
            <i className="far fa-heart"></i> Favorites
          </Link>
        </li>
        <li>
          <Link to="/songs-to-cry-to-alone">
            <i className="fas fa-square"></i> songs to cry to alone
          </Link>
        </li>
        {/* Add more sidebar items as needed */}
        <li>
          <Link to="/Artist-Name">
            <i className="fas fa-circle"></i> Artist Name
          </Link>
        </li>
        <li>
          <Link to="/Playlist">
            <i className="fas fa-square"></i> Playlist #2
          </Link>
        </li>
        <li>
          <Link to="/Album-Name">
            <i className="fas fa-square"></i> Album Name
          </Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
