// Home.js

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./js.css";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    document.title = "Soundex"
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // })

  return (
    <div>
      <Navbar />
      <div className="home-section">

        <div className="home-header">
          <h1>Play Your Music.</h1>
          {/* <h2>Welcome to Soundex</h2> */}
        </div>

        <div className="home-top-content">
          <div>
            <h2>Featured</h2>
            <div className="home-spotlight-cards">
              <div className="home-spotlight-card">
                <h3>Top Hits</h3>
              </div>
              <div className="home-spotlight-card">
                <h3>New Merch Drop</h3>
              </div>
              <div className="home-spotlight-card">
                <h3>Made For You</h3>
              </div>
            </div>
          </div>
          <div className="home-artist-spotlight">
            <svg className="ass-left-polygon" width="173" height="196" viewBox="0 0 173 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.5 85.0096C175.5 90.7831 175.5 105.217 165.5 110.99L23 193.263C13 199.036 0.5 191.819 0.5 180.272L0.5 15.7276C0.5 4.18058 13 -3.03629 23 2.73721L165.5 85.0096Z" fill="#00B4D8"/>
            </svg>
            <svg className="ass-right-polygon" width="173" height="196" viewBox="0 0 173 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 110.99C-2.5 105.217 -2.5 90.7831 7.5 85.0096L150 2.73721C160 -3.03629 172.5 4.18058 172.5 15.7276V180.272C172.5 191.819 160 199.036 150 193.263L7.5 110.99Z" fill="#00B4D8"/>
            </svg>

            <h2>Artist Spotlight</h2>
            <div className="artist-spotlight-content">
              <div className="artist-spotlight-card">
                <Link to="/artist">
                  <div className="artist-spotlight-img">
                    <img src="https://cdn2.picryl.com/thumbnail/1725/12/31/antonio-vivaldi-e192cf-200.jpg" alt="antonio vivaldi" />
                    <div className="artist-spotlight-img-text">
                      <h3>Antonio Vivaldi</h3>
                      <p>Listen to these Classics</p>
                    </div>
                  </div>
                </Link>
                <div className="artist-spotlight-song">
                    <div className="artist-spotlight-song-info">
                      <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popular-song-img" /> 
                      <p className="pop-song-title artist-spotlight-song-title">Winter</p>
                    </div>
                    <button className="player-button">
                      <i className="fa-solid fa-play fa-xl"></i>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-shelf home-playlist-for-you">
          <h2>Playlist For You</h2>
          <div className="home-shelf-cards">
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://plus.unsplash.com/premium_photo-1691852519415-0df4c22e49e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                  </div>
                  <p>Daily Mix 1</p>
                </div>
              </Link>
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1691446904763-2cc5ab59b7c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=717&q=80" alt="" />
                  </div>
                  <p>Daily Mix 2</p>
                </div>
              </Link>
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://plus.unsplash.com/premium_photo-1691438973177-cc200c2f7041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                  </div>
                  <p>Daily Mix 3</p>
                </div>
              </Link>
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1692015830187-4b754c2257fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=674&q=80" alt="" />
                  </div>
                  <p>Daily Mix 4</p>
                </div>
              </Link>
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>songs to cry to alone</p>
                </div>
              </Link>
              <Link to="/playlist/songs-to-cry-to-alone">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>Classical Music</p>
                </div>
              </Link>
          </div>
        </div>

        <div className="home-shelf home-artist-showcase">
          <h2>Artist Showcase</h2>
          <div className="home-shelf-cards">
            <Link to={"/artist"} style={{ textDecoration: 'none' }}>
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://cdn2.picryl.com/thumbnail/1725/12/31/antonio-vivaldi-e192cf-200.jpg" alt="antonio vivaldi" />
                </div>
                <p>Antonio Vivaldi</p>
              </div>
            </Link>
            <Link to="/artist">
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Bach_unedited.jpg" alt="" />
                </div>
                <p>Johann S. Bach</p>
              </div>
            </Link>
            <Link to="/artist">
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Mozartportrait.jpg" alt="" />
                </div>
                <p>Wolfgang A. Mozart</p>
              </div>
            </Link>
            <Link to="/artist">
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://cdn2.picryl.com/thumbnail/1850/12/31/ary-scheffer-portrait-of-frederic-chopin-wga20976-89c825-200.jpg" alt="" />
                </div>
                <p>Frédéric Chopin</p>
              </div>
            </Link>
            <Link to="/artist">
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Claude_Debussy_atelier_Nadar.jpg" alt="" />
                </div>
                <p>Claude Debussy</p>
              </div>
            </Link>
            <Link to="/artist">
              <div className="home-shelf-card">
                <div className="home-shelf-card-img home-shelf-img-artist">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Johannes_Brahms_%28before_1897%29_-_Archivio_storico_Ricordi_FOTO001204.jpg" alt="" />
                </div>
                <p>Johannes Brahms</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="home-shelf home-playlist-for-you">
          <h2>Popular Albums</h2>
          <div className="home-shelf-cards">
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>The Four Seasons</p>
                </div>
              </Link>
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1508025690966-2a9a1957da31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                  </div>
                  <p>Gloria</p>
                </div>
              </Link>
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1611727153919-e598e5a0baa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>Stabat Mater</p>
                </div>
              </Link>
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1532089006065-de61ca171e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>Magnificat</p>
                </div>
              </Link>
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1532342342267-77e8db262ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>Nisi dominus</p>
                </div>
              </Link>
              <Link to="/album/the-four-seasons">
                <div className="home-shelf-card">
                  <div className="home-shelf-card-img">
                    <img src="https://images.unsplash.com/photo-1603584915335-d612257071b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                  </div>
                  <p>Cello Suites</p>
                </div>
              </Link>
          </div>
        </div>

        <div className="home-browse-categories">
          <h2>Categories For You</h2>
          <div className="home-categories-container">
            <div className="home-categories">
              <h3>Pop</h3>
            </div>
            <div className="home-categories">
              <h3>Electronic</h3>
            </div>
            <div className="home-categories">
              <h3>R&B</h3>
            </div>
            <div className="home-categories">
              <h3>Rock</h3>
            </div>
            <div className="home-categories">
              <h3>Country</h3>
            </div>
            <div className="home-categories">
              <h3>Jazz</h3>
            </div>
            <div className="home-categories">
              <h3>Classical</h3>
            </div>
            <div className="home-categories">
              <h3>Indie</h3>
            </div>
          </div>
        </div>

        {/* <div className="main-container">
          <div className="squares-container">

            <Link to="/favorites">
              <div className="square-container">
                <div className="square square-red"></div>
                <div className="text">Favorites</div>
              </div>
            </Link>


            <Link to="/playlist">
              <div className="square-container">
              
                <div className="square square-blue"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="square-container">
                <div className="square square-green"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>


            <Link to="/playlist">
              <div className="square-container">
                
                <div className="square square-orange"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>


            <Link to="/playlist">
              <div className="square-container">
                <div className="square square-purple"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>
          </div>

          <div className="circles-container">

            <Link to="/playlist">
              <div className="circle-container">
              
                <div className="circle"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="circle-container">
              
                <div className="circle"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="circle-container">
              
                <div className="circle"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="circle-container">
            
                <div className="circle"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="circle-container">
              
                <div className="circle"></div>
                <div className="text">Playlist Name</div>
              </div>
            </Link>

          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
