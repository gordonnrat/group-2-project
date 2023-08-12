import { Link } from "react-router-dom";
import "../Landing.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLocation } from "react-router-dom";

function Landing() {
    return(
        <div className="landing-page">
            <nav className="landing-nav">
                <ul id="nav-logo">
                    <li>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942V1.20577C0.5 0.43597 1.33333 -0.0451542 2 0.339746L15.5 8.13397Z" fill="#00B4D8"/>
                        </svg>
                    </li>
                    <li><span className="blue">sound</span>ex</li>
                </ul>
                <ul id="nav-right">
                    <li><button type="button" className="login-button">Login</button></li>
                    <li><button type="button " className="get-started button-hover">Get Started</button></li>
                </ul>
            </nav>
            <div>
                <div className="hero-title">
                    <h1>Empower <span className="blue">Sound</span> with Your <span className="blue">Support</span></h1>
                    <button type="button" className="get-started button-hover">Get Started</button>
                </div>
                <img src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80" alt="microphone" className="hero-img" />
            </div>
            <div className="about">
                <h1 id="about-section-title">What is Soundex?</h1>
                <ul className="about-list">
                    <li className="about-card">
                        <div className="card-image">
                            <svg width="156" height="153" viewBox="0 0 156 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M156 76.5C156 118.75 121.078 153 78 153C34.9218 153 0 118.75 0 76.5C0 34.2502 34.9218 0 78 0C121.078 0 156 34.2502 156 76.5Z" fill="url(#paint0_linear_87_494)"/>
                            <defs>
                            <linearGradient id="paint0_linear_87_494" x1="78" y1="0" x2="78" y2="153" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00B4D8"/>
                            <stop offset="0.770833" stopColor="#E393FF"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <svg width="52" height="59" viewBox="0 0 52 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49.5 25.1699C52.8333 27.0944 52.8333 31.9056 49.5 33.8301L8.25 57.6458C4.91667 59.5703 0.75 57.1647 0.75 53.3157V5.68431C0.75 1.8353 4.91667 -0.570326 8.25 1.35417L49.5 25.1699Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="about-card-desc">
                            <h2>Listen and Discover Music</h2>
                            <p>Listen to your favorite music and discover new music.</p>
                        </div>
                    </li>
                    <li className="about-card">
                        <div className="card-image">
                            <svg width="156" height="153" viewBox="0 0 156 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M156 76.5C156 118.75 121.078 153 78 153C34.9218 153 0 118.75 0 76.5C0 34.2502 34.9218 0 78 0C121.078 0 156 34.2502 156 76.5Z" fill="url(#paint0_linear_87_494)"/>
                            <defs>
                            <linearGradient id="paint0_linear_87_494" x1="78" y1="0" x2="78" y2="153" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00B4D8"/>
                            <stop offset="0.770833" stopColor="#E393FF"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <i className="fa-solid fa-heart card-icon fa-4x"></i>
                        </div>
                        <div className="about-card-desc">
                            <h2>Support your Favorite Artist</h2>
                            <p>You can support your favorite artists and get access to exclusive benefits. </p>
                        </div>
                    </li>
                    <li className="about-card">
                        <div className="card-image">
                            <svg width="156" height="153" viewBox="0 0 156 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M156 76.5C156 118.75 121.078 153 78 153C34.9218 153 0 118.75 0 76.5C0 34.2502 34.9218 0 78 0C121.078 0 156 34.2502 156 76.5Z" fill="url(#paint0_linear_87_494)"/>
                            <defs>
                            <linearGradient id="paint0_linear_87_494" x1="78" y1="0" x2="78" y2="153" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00B4D8"/>
                            <stop offset="0.770833" stopColor="#E393FF"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <i className="fa-solid fa-globe card-icon fa-4x"></i>
                        </div>
                        <div className="about-card-desc">
                            <h2>Connect with Others</h2>
                            <p>Chat with others through user-created Channels, or through exclusive artist Channels. </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="about about-sexp">
                <svg width="248" height="282" viewBox="0 0 248 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M240.5 128.01C250.5 133.783 250.5 148.217 240.5 153.99L23 279.564C13 285.338 0.5 278.121 0.5 266.574V15.4263C0.5 3.87928 13 -3.33756 23 2.43594L240.5 128.01Z" fill="#00B4D8"/>
                </svg>

                <div className="about-sexp-title">
                    <h1 id="about-section-title">Engage in the Sound Experience.</h1>
                    <div className="underline"></div>
                </div>
 
                {/* Cards */}
                <div>
                    <div className="card-sexp">
                        <div className="card">
                            <div className="card-content">
                                <h2>Explore and Discover Artists and Podcasts</h2>
                                <p>Immerse yourself in the world of music. Explore a vast collection of songs from talented artists. </p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <h2>Listen to Your Favorite Artists</h2>
                                <p>Listen to songs by your favorite artists and experience their amazing work. </p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="headphones" />
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <h2>Create Playlists for Your Everyday Listen</h2>
                                <p>Tailor your listening experience by curating playlists that reflect your everyday mood, activity, and style. </p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="records" />
                        </div>
                    </div>
                </div>

                <svg className="left-triangle" width="247" height="282" viewBox="0 0 247 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49997 153.99C-2.50003 148.217 -2.5 133.783 7.5 128.01L225 2.43592C235 -3.33758 247.5 3.87931 247.5 15.4263V266.574C247.5 278.121 235 285.338 225 279.564L7.49997 153.99Z" fill="#00B4D8"/>
                </svg>
            </div>

            <div className="about-support about">
                <div id="support-header">
                    <h1 id="support-header-title">Support Artists</h1>
                    <img src={require("../images/dots-pattern.png")} alt="dots pattern" />
                </div>
                <div className="support-cards">
                    <svg width="248" height="282" viewBox="0 0 248 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M240.5 128.01C250.5 133.783 250.5 148.217 240.5 153.99L23 279.564C13 285.338 0.5 278.121 0.5 266.574V15.4263C0.5 3.87928 13 -3.33756 23 2.43594L240.5 128.01Z" fill="#00B4D8"/>
                    </svg>
                    <div className="support-cards-desc">
                        <h2>Subscribe to Your Favorite Artists</h2>
                        <p>Make a difference through your subscription. Select from a range of plans to directly support your favorite artists. </p>
                    </div>
                </div>

                <div className="support-cards">
                    <div className="support-cards-desc">
                        <h2>Get Access to Benefits and Exclusive Channels</h2>
                        <p>Gain access to special benefits and private Channels reserved for supporters. </p>
                    </div>
                    <svg width="248" height="282" viewBox="0 0 248 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49997 153.99C-2.50003 148.217 -2.5 133.783 7.5 128.01L225 2.43591C235 -3.33759 247.5 3.8793 247.5 15.4263V266.574C247.5 278.121 235 285.338 225 279.564L7.49997 153.99Z" fill="#00B4D8"/>
                    </svg>

                </div>

                <div className="support-cards">
                    <svg width="248" height="282" viewBox="0 0 248 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M240.5 128.01C250.5 133.783 250.5 148.217 240.5 153.99L23 279.564C13 285.338 0.5 278.121 0.5 266.574V15.4263C0.5 3.87928 13 -3.33756 23 2.43594L240.5 128.01Z" fill="#00B4D8"/>
                    </svg>
                    <div className="support-cards-desc">
                        <h2>Shop for Merchandise from Artists</h2>
                        <p>From apparel to CDs, shop through a range of Artists' Merchandise. </p>
                    </div>
                </div>

            </div>

            <style>{`
            .now-playing-hide{
              display:none;
            }
            `}
            </style>

        </div>
    )
}

export default Landing