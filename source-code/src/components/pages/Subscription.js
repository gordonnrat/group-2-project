import Navbar from "../Navbar";
import "../Navbar.css";
import "../Subscription.css";

function Subscription() {
    return(
        <div>
            <Navbar />
            <div className="subscription-page">
                <h1 className="subscription-page-title">Your Subscription</h1>
                <div className="subscription-card">
                    <div className="subscription-row subscription-header">
                        <div className="s-row-item">Artist</div>
                        <div className="s-row-item">Subscription plan</div>
                        <div className="s-row-item">Cancel subscription?</div>
                    </div>
 
                    <div className="subscription-row"> 
                        <div className="s-row-item">
                            <div className="subscription-artist-info">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Artist Name</p>
                            </div>
                        </div>
                        <div className="subscription-subrow">
                            <div className="s-row-item">
                                <p>Supporter</p>
                            </div>
                            <div className="s-row-item">
                                <p>$5 / month</p>
                            </div>
                        </div>
                        <div className="s-row-item">
                            <button type="button" className="cancel-subscription">Cancel</button>
                        </div>
                    </div>

                    <div className="subscription-row"> 
                        <div className="s-row-item">
                            <div className="subscription-artist-info">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Artist Name</p>
                            </div>
                        </div>
                        <div className="subscription-subrow">
                            <div className="s-row-item">
                                <p>Intermediate</p>
                            </div>
                            <div className="s-row-item">
                                <p>$10 / month</p>
                            </div>
                        </div>
                        <div className="s-row-item">
                            <button type="button" className="cancel-subscription">Cancel</button>
                        </div>
                    </div>

                    <div className="subscription-row"> 
                        <div className="s-row-item">
                            <div className="subscription-artist-info">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Artist Name</p>
                            </div>
                        </div>
                        <div className="subscription-subrow">
                            <div className="s-row-item">
                                <p>Top Supporter</p>
                            </div>
                            <div className="s-row-item">
                                <p>$15 / month</p>
                            </div>
                        </div>
                        <div className="s-row-item">
                            <button type="button" className="cancel-subscription">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription