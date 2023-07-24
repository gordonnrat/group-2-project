import { Link } from "react-router-dom";
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
                <input type="text" placeholder="Search" />
                <div className="user-section">
                    {/* Your user-related elements can go here */}
                    <span>Username</span>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
