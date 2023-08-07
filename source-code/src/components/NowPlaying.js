import { Link } from "react-router-dom";
import "./NowPlaying.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NowPlaying() {
    return(
        <div className="now-playing-bar">
            <audio controls src="#" />
        </div>
    )
}

export default NowPlaying