import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Store</Link></li>
                <li><Link to='/login'>C/Link></li>


            </ul>
        </nav>
        
    )
}

export default Navbar