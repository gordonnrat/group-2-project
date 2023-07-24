import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="left-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Store'>Store</Link></li>
                <li><Link to='/Channels'>Channels</Link></li>
                <li><Link to='/Subscription'>Subscription</Link></li>
            </ul>
            <div className="right-nav">
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="user-section">
                    <span>Username</span>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
