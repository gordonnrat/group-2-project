import Navbar from "../Navbar";
import "../Navbar.css";
import "../Artist.css";

function Artist() {
    return(
        <div className="artist-section">
            {/* <Navbar /> */}
            <div>
                <div className="artist-header">
                    <img src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80" alt="artist header" className="artist-header-img" />
                    <div className="artist-header-profile">
                        <img src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80" alt="artist profile pic" className="artist-profile-pic" />
                    </div>
                    <h1>Artist Name</h1>
                    <div className="artist-stats-details">
                        <p>_____ subscribers</p>
                        <p>_____ monthly listeners</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Artist