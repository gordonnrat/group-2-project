import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
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
      <div className="right-nav">
        <input type="text" placeholder="Search" />
        <div className="user-section">
          {/* Your user-related elements can go here */}
          <span>Username</span>
          <img src="user_avatar.png" alt="User Avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
