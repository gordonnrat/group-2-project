import Navbar from "../Navbar";
import Sidebar from "../sidebar";
.sidebar

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <ul>
                <li>Liberty</li>
            </ul>
            <Sidebar />
        </div>
    );
}

export default Home;