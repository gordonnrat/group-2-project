import Navbar from "../Navbar";
import "./js.css";

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <ul>
                <li>Liberty</li>
            </ul>
            <sidebar />
        </div>
    );
}

export default Home;
