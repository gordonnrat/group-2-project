import Navbar from "../Navbar";
import "./js.css";
import "./square.css"; // Import the CSS file for the square

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <ul>
                <li>Liberty</li>
            </ul>
            <div className="square"></div> {/* Add the square */}
        </div>
    );
}

export default Home;
