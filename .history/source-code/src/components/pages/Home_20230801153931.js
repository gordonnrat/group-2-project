// Home.js

// ... (your existing imports and component definition)

function Home() {
  return (
    <div>
      {/* ... (your existing JSX code) */}

      {/* Add the horizontal squares container */}
      <div className="horizontal-squares-container">
        {/* Horizontal Square 6 */}
        <Link to="/Playlist">
          <div className="horizontal-square-container">
            <div className="horizontal-square square-yellow"></div>
            <div className="horizontal-text">Playlist Name</div>
          </div>
        </Link>

        {/* Horizontal Square 7 */}
        <Link to="/Playlist">
          <div className="horizontal-square-container">
            <div className="horizontal-square square-pink"></div>
            <div className="horizontal-text">Playlist Name</div>
          </div>
        </Link>

        {/* Horizontal Square 8 */}
        <Link to="/Playlist">
          <div className="horizontal-square-container">
            <div className="horizontal-square square-teal"></div>
            <div className="horizontal-text">Playlist Name</div>
          </div>
        </Link>

        {/* Horizontal Square 9 */}
        <Link to="/Playlist">
          <div className="horizontal-square-container">
            <div className="horizontal-square square-indigo"></div>
            <div className="horizontal-text">Playlist Name</div>
          </div>
        </Link>

        {/* Horizontal Square 10 */}
        <Link to="/Playlist">
          <div className="horizontal-square-container">
            <div className="horizontal-square square-cyan"></div>
            <div className="horizontal-text">Playlist Name</div>
          </div>
        </Link>
      </div>

      {/* Add the horizontal circles container */}
      <div className="horizontal-circles-container">
        {/* Horizontal Circle 6 */}
        <Link to="/Playlist">
          <div className="horizontal-circle-container">
            <div className="horizontal-circle"></div>
          </div>
        </Link>

        {/* Horizontal Circle 7 */}
        <Link to="/Playlist">
          <div className="horizontal-circle-container">
            <div className="horizontal-circle"></div>
          </div>
        </Link>

        {/* Horizontal Circle 8 */}
        <Link to="/Playlist">
          <div className="horizontal-circle-container">
            <div className="horizontal-circle"></div>
          </div>
        </Link>

        {/* Horizontal Circle 9 */}
        <Link to="/Playlist">
          <div className="horizontal-circle-container">
            <div className="horizontal-circle"></div>
          </div>
        </Link>

        {/* Horizontal Circle 10 */}
        <Link to="/Playlist">
          <div className="horizontal-circle-container">
            <div className="horizontal-circle"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
