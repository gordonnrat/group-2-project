import Navbar from "../Navbar";
import "../Navbar.css";
import "../Artist.css";

function Artist() {
    return(
        <div>
            <Navbar />
            <div className="artist-section">
                <div>
                    <div className="artist-header">
                        <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="artist header" className="artist-header-img" />
                        <div className="artist-header-profile">
                            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="artist profile pic" className="artist-profile-pic" />
                        </div>
                        <div className="artist-info-container">
                            <h1>Artist Name</h1>
                            <div className="artist-stats-details">
                                <p>  subscribers</p>
                                <p>_____ monthly listeners</p>
                            </div>
                            <button type="button" className="subscribe-button">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="popular-songs">
                    <h1>Popular Songs</h1>
                    <div className="popular-songs-list">
                        <div className="popular-song">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="popular-song-img" /> 
                            <p>Song Name</p>
                            <div></div>
                            <p className="popular-song-timestamp">1:11</p>
                        </div>
                        <div className="popular-song">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="popular-song-img" /> 
                            <p>Song Name</p>
                            <div></div>
                            <p className="popular-song-timestamp">1:11</p>
                        </div>
                        <div className="popular-song">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="popular-song-img" /> 
                            <p>Song Name</p>
                            <div></div>
                            <p className="popular-song-timestamp">1:11</p>
                        </div>
                        <div className="popular-song">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="popular-song-img" /> 
                            <p>Song Name</p>
                            <div></div>
                            <p className="popular-song-timestamp">1:11</p>
                        </div>
                        
                    </div>
                </div>

                <div className="discography">
                    <h1>Discography</h1>
                    <div className="discography-albums">
                        <div className="discography-album">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="discography-img" />
                            <p>Album Name</p> 
                        </div>
                        <div className="discography-album">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="discography-img" />
                            <p>Album Name</p> 
                        </div>
                        <div className="discography-album">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="discography-img" />
                            <p>Album Name</p> 
                        </div>
                        <div className="discography-album">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="discography-img" />
                            <p>Album Name</p> 
                        </div>
                        <div className="discography-album">
                            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="discography-img" />
                            <p>Album Name</p> 
                        </div>
                    </div>
                </div>

                <div className="subscription-plan">
                    <h1>Subscription Plan</h1>
                    <div className="subscription-cards">
                        <div className="subscription-cards-container">
                            <p>Supporter</p>
                            <p>$5 / month</p>
                            <button type="button" className="join-button">Join</button>
                            <ul className="subscription-list">
                                <li>...</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>
                        <div className="subscription-cards-container">
                            <p>Intermediate</p>
                            <p>$10 / month</p>
                            <button type="button" className="join-button">Join</button>
                            <ul className="subscription-list">
                                <li>...</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>
                        <div className="subscription-cards-container">
                            <p>Top Supporter</p>
                            <p>$15 / month</p>
                            <button type="button" className="join-button">Join</button>
                            <ul className="subscription-list">
                                <li>...</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Artist