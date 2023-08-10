import "./NowPlaying.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useRef, useEffect } from "react";

function NowPlaying() {
    
    let musicInfo = [
        {
            name: 'Winter',
            artist: 'Antonio Vivaldi',
            src: require("./music/Winter-Vivaldi-PM-Music.mp3"),
            img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Cello Suite No. 1',
            artist: 'Bach',
            src: require("./music/Bach-Cello-Suite-No.-1-G-Major.mp3"),
            img: 'https://images.unsplash.com/photo-1506423456648-c11ccb27338d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80'
        }
    ]
    const audioRef = useRef(null);
    const timelineRef = useRef(null);
    const volumeRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [timelinePercentage, setTimelinePercentage] = useState(0);
    const [volumeValue, setVolumeValue] = useState(0.5);

    function toggleAudio() {
        const audio = audioRef.current;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const audio = audioRef.current;
        const onEnded = () => {
            setIsPlaying(false);
        }

        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("ended", onEnded);
        }
    });

    useEffect(() => {
        const audio = audioRef.current;

        const changeTimelinePosition = () => {
            const percentagePosition = (100 * audio.currentTime) / audio.duration;
            setTimelinePercentage(percentagePosition);
        };

        audio.ontimeupdate = changeTimelinePosition;
    
    });

    const timelineChange = (e) => {
        const newPosition = e.target.value;
        const audio = audioRef.current;
        const newTime = (newPosition / 100) * audio.duration;
        audio.currentTime = newTime;
        setTimelinePercentage(newPosition);
    };

    const volumeChange = (e) => {
        const newVolume = e.target.value;
        const audio = audioRef.current;
        audio.volume = newVolume;
        setVolumeValue(newVolume);
    };

    const toggleSound = () => {
        const audio = audioRef.current;
        if (isMuted) {
          audio.volume = volumeValue; 
        } else {
          setVolumeValue(audio.volume); 
          audio.volume = 0;
        }
        audio.muted = !isMuted;
        setIsMuted(!isMuted);
      };

    const timelineProgress  = {
        background: `linear-gradient(to right, #00B4D8 ${timelinePercentage}%, #3A3A3A ${timelinePercentage}%)`      
    };

    const volumeProgress = {
        background: `linear-gradient(to right, #00B4D8 ${isMuted ? 0 : volumeValue * 100}%, #3A3A3A ${isMuted ? 0 : volumeValue * 100}%)`,
    };
    
    return(
        <div className="audio-player">

            <div className="controls">
                <div className="audio-player-info">
                    <img src={musicInfo[0].img} alt="" />
                    <div className="audio-player-info-title">
                        <p className="audio-player-info-song-title">{musicInfo[0].name}</p>
                        <p className="audio-player-info-song-artist">{musicInfo[0].artist}</p>
                    </div>
                </div>

                <div className="audio-play-timeline">
                    <button className="player-button" onClick={toggleAudio}>
                        {isPlaying ? <i className="fa-solid fa-pause fa-xl"></i> : <i className="fa-solid fa-play fa-xl	"></i>}
                    </button>
                    <input style={timelineProgress} type="range" className="timeline" max="100" value={timelinePercentage} onChange={timelineChange}ref={timelineRef} />
                </div>

                <div className="audio-volume">
                    <button className="sound-button" onClick={toggleSound}>
                        {isMuted ? <i className="fa-solid fa-volume-xmark fa-xl icon-white"></i> : <i className="fa-solid fa-volume-low fa-xl icon-white"></i>}
                    </button>
                    <input style={volumeProgress} type="range" className="volume-control" max="1" step="0.01" value={isMuted ? 0 : volumeValue} onChange={volumeChange} ref={volumeRef} />
                </div>

            </div>

            <audio ref={audioRef} src={musicInfo[0].src} />

        </div>
    )
}

export default NowPlaying