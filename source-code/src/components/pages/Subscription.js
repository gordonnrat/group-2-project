import Navbar from "../Navbar";
import "../Navbar.css";
import "../Subscription.css";
import React, { useState, useRef, useEffect } from "react";

function Subscription() {

    useEffect(() => {
        document.title = "Subscription"
     }, []);

     useEffect(() => {
        window.scrollTo(0, 0);
    })

     const [subscription, setSubscription] = useState(
        JSON.parse(localStorage.getItem('subscription'))
      );

     const cancelSubscription = () => {
        localStorage.removeItem('subscription');
        localStorage.setItem('isSubscribed', false);
        setSubscription(null);
    };

    return(
        <div>
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

                        {subscription && (
                            <div className="subscription-row">
                            <div className="s-row-item">
                                <div className="subscription-artist-info">
                                <img src={subscription.artistPic} alt="" />
                                <p>{subscription.artistName}</p>
                                </div>
                            </div>
                            <div className="subscription-subrow">
                                <div className="s-row-item">
                                <p>{subscription.subPlan}</p>
                                </div>
                                <div className="s-row-item">
                                <p>{subscription.subPlanCost}</p>
                                </div>
                            </div>
                            <div className="s-row-item">
                                <button type="button" className="cancel-subscription" onClick={cancelSubscription}>
                                Cancel
                                </button>
                            </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription