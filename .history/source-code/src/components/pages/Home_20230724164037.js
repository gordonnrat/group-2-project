import Navbar from "../Navbar";
import Sidebar from "../sidebar";


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
