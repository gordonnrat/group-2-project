import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="sidebar-left">
        {/* Content for the left sidebar */}
        {/* For example, you can add additional links or elements here */}
        <ul>
          <li>
            <Link to="/profile">
              <i className="fas fa-user"></i> Profile
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <i className="fas fa-cog"></i> Settings
            </Link>
          </li>
        </ul>
      </div>

      <ul className="left-nav">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/Store">
            <i className="fas fa-store"></i> Store
          </Link>
        </li>
        <li>
          <Link to="/Channels">
            <i className="fas fa-tv"></i> Channels
          </Link>
        </li>
        <li>
          <Link to="/Subscription">
            <i className="fas fa-newspaper"></i> Subscription
          </Link>
        </li>
      </ul>

      <div className="sidebar-right">
        {/* Content for the right sidebar */}
        {/* For example, you can add user-related elements here */}
        <div className="user-section">
          <span>Username</span>
          {/* Add additional elements for user information, logout, etc. */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
