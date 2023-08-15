import Navbar from "../Navbar";
import "../Navbar.css";
import "../Artist.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Artist() {

    useEffect(() => {
        document.title = "Antonio Vivaldi"
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscription, setSubscription] = useState(
        JSON.parse(localStorage.getItem('subscription'))
    );
    
    function subscribe(planName, planCost, artistName, artistPic) {

        const subscriptionInfo = {
          subPlan: planName,
          subPlanCost: planCost,
          artistName: artistName,
          artistPic: artistPic
        };
      
        localStorage.setItem('subscription', JSON.stringify(subscriptionInfo));
        localStorage.setItem('isSubscribed', true);
        setIsSubscribed(true);
        setSubscription(JSON.parse(localStorage.getItem('subscription')))
    }

    useEffect(() => {
        const storedStatus = localStorage.getItem('isSubscribed');
        if (storedStatus === 'true') {
          setIsSubscribed(true);
        } else {
          setIsSubscribed(false);
        }
    }, []);
      
    function goToSubscriptionPlan() {
        window.scrollTo({
            top: 1060,
            behavior: "smooth"
        })
    }

    return(
        <div>
            
            <div>
                <Navbar />
                <div className="artist-section">
                    <div>
                        <div className="artist-header">
                            <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="artist header" className="artist-header-img" />
                            <div className="artist-header-profile">
                                <img src="https://cdn8.picryl.com/photo/2016/05/14/vivaldi-antonio-b60bb4-1024.jpg" alt="artist profile pic" className="artist-profile-pic" />
                            </div>
                            <div className="artist-info-container">
                                <h1>Antonio Vivaldi</h1>
                                <div className="artist-stats-details">
                                    <p>2k subscribers</p>
                                    <p>|
                                    </p>
                                    <p>55k monthly listeners</p>
                                </div>
                                {isSubscribed ? (

                                    <Link to="/subscription">
                                       <button type="button" className="subscribe-button">Unsubscribe</button>
                                    </Link>

                                ) : (
                                    <button type="button" className="subscribe-button" onClick={goToSubscriptionPlan}>Subscribe</button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="popular-songs">
                        <h1>Popular Songs</h1>
                        <div className="popular-songs-list">
                            <div className="popular-song">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popular-song-img" /> 
                                <p className="pop-song-title">Winter</p>
                                <div></div>
                                <p className="popular-song-timestamp">3:44</p>
                            </div>
                            <div className="popular-song">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popular-song-img" /> 
                                <p className="pop-song-title">Spring</p>
                                <div></div>
                                <p className="popular-song-timestamp">5:24</p>
                            </div>
                            <div className="popular-song">
                                <img src="https://images.unsplash.com/photo-1508025690966-2a9a1957da31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" className="popular-song-img" /> 
                                <p className="pop-song-title">Gloria</p>
                                <div></div>
                                <p className="popular-song-timestamp">4:20</p>
                            </div>
                            <div className="popular-song">
                                <img src="https://images.unsplash.com/photo-1532089006065-de61ca171e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popular-song-img" /> 
                                <p className="pop-song-title">Et misericordia</p>
                                <div></div>
                                <p className="popular-song-timestamp">6:09</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="discography">
                        <h1>Discography</h1>
                        <div className="discography-albums">
                            <div className="discography-album">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="discography-img" />
                                <p>The Four Seasons</p> 
                            </div>
                            <div className="discography-album">
                                <img src="https://images.unsplash.com/photo-1508025690966-2a9a1957da31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" className="discography-img" />
                                <p>Gloria</p> 
                            </div>
                            <div className="discography-album">
                                <img src="https://images.unsplash.com/photo-1611727153919-e598e5a0baa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="discography-img" />
                                <p>Stabat Mater</p> 
                            </div>
                            <div className="discography-album">
                                <img src="https://images.unsplash.com/photo-1532089006065-de61ca171e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="discography-img" />
                                <p>Magnificat</p> 
                            </div>
                            <div className="discography-album">
                                <img src="https://images.unsplash.com/photo-1532342342267-77e8db262ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="discography-img" />
                                <p>Nisi dominus</p> 
                            </div>
                        </div>
                    </div>

                    {isSubscribed ? (
                        <div className="subscription-plan">
                            <h1>Subscription Plan</h1>
                            <div className="subscription-cards">
                                <div className="subscription-cards-container your-subscription-container">
                                    <div className="your-sub-content">
                                        <div>
                                            <h1>Your Subscription</h1>
                                            <p>{subscription.subPlan} | {subscription.subPlanCost}</p>
                                            <hr className="line-sub" />
                                            <p>Total Months Subscribed: <span className="month-subbed"> 1 month</span></p>
                                            <p>Thanks for supporting this artist</p>
                                        </div>
                                        <div>
                                            <button type="button" className="your-sub-button">Subscriber Channel</button>
                                            <Link to="/subscription">
                                                <button type="button" className="cancel-button">Manage Subscriptions</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="your-sub-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="subscription-plan">
                            <h1>Subscription Plan</h1>
                            <div className="subscription-cards">
                                <div className="subscription-cards-container">
                                    <p>Supporter</p>
                                    <p>$5 / month</p>
                                    <button type="button" className="join-button" onClick={() => subscribe("Supporter", "$5 / month", "Antonio Vivaldi", "https://cdn8.picryl.com/photo/2016/05/14/vivaldi-antonio-b60bb4-1024.jpg")}>Join</button>
                                    <ul className="subscription-list">
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className="subscription-cards-container">
                                    <p>Intermediate</p>
                                    <p>$10 / month</p>
                                    <button type="button" className="join-button" onClick={() => subscribe("Intermediate", "$10 / month", "Antonio Vivaldi", "https://cdn8.picryl.com/photo/2016/05/14/vivaldi-antonio-b60bb4-1024.jpg")}>Join</button>
                                    <ul className="subscription-list">
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className="subscription-cards-container">
                                    <p>Top Supporter</p>
                                    <p>$15 / month</p>
                                    <button type="button" className="join-button" onClick={() => subscribe("Top Supporter", "$15 / month", "Antonio Vivaldi", "https://cdn8.picryl.com/photo/2016/05/14/vivaldi-antonio-b60bb4-1024.jpg")}>Join</button>
                                    <ul className="subscription-list">
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <div className="subscription-plan">
                        <h1>Subscription Plan</h1>
                        <div className="subscription-cards">
                            <div className="subscription-cards-container">
                                <p>Supporter</p>
                                <p>$5 / month</p>
                                <button type="button" className="join-button" onClick={() => subscribe("Supporter", "$5 / month", "Artist Name", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")}>Join</button>
                                <ul className="subscription-list">
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </div>
                            <div className="subscription-cards-container">
                                <p>Intermediate</p>
                                <p>$10 / month</p>
                                <button type="button" className="join-button" onClick={() => subscribe("Intermediate", "$10 / month", "Artist Name", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")}>Join</button>
                                <ul className="subscription-list">
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </div>
                            <div className="subscription-cards-container">
                                <p>Top Supporter</p>
                                <p>$15 / month</p>
                                <button type="button" className="join-button" onClick={() => subscribe("Top Supporter", "$15 / month", "Artist Name", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")}>Join</button>
                                <ul className="subscription-list">
                                    <li>...</li>
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Artist