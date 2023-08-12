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
            artist: 'Johann Sebastian Bach',
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
    const [currentTrack, setCurrentTrack] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
  
    function toggleAudio() {
        const audio = audioRef.current;
        setHasInteracted(true);
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }
    
    const nextSong = () => {
        setCurrentTrack((currentTrack + 1) % musicInfo.length);
        setTimelinePercentage(0);
    };

    const prevSong = () => {
        setCurrentTrack((currentTrack - 1 + musicInfo.length) % musicInfo.length);
        setTimelinePercentage(0);
    };

    useEffect(() => {
        if (hasInteracted && isPlaying) {
          const audio = audioRef.current;

          audio.pause();
          audio.src = "";
  
          audio.src = musicInfo[currentTrack].src;

          audio.play().catch(error => {
            console.error(error);
          });;
        }
    }, [hasInteracted, currentTrack]);
    
    useEffect(() => {
        const audio = audioRef.current;

        const changeTimelinePosition = () => {
            const percentagePosition = (100 * audio.currentTime) / audio.duration;
            setTimelinePercentage(percentagePosition);
        };

        function songEnded() {
            nextSong();
        }

        audio.ontimeupdate = changeTimelinePosition;
        audio.onended = songEnded;
    });

    const timelineChange = (e) => {
        const position = e.target.value;
        const audio = audioRef.current;
        const time = (position / 100) * audio.duration;
        audio.currentTime = time;
        setTimelinePercentage(position);
    };

    const volumeChange = (e) => {
        const volume = e.target.value;
        const audio = audioRef.current;
        audio.volume = volume;
        setVolumeValue(volume);
        if (audio.volume === 0) {
            setIsMuted(true);
            console.log("its 0");
          } else {
            setIsMuted(false);
          }
    };

    const toggleSound = () => {
        const audio = audioRef.current;
        audio.volume = volumeValue;
        if (isMuted) {
          audio.volume = volumeValue; 
        } else {
          setVolumeValue(audio.volume); 
          audio.volume = 0;
        }
        setIsMuted(!isMuted);
      };

    const timelineProgress  = {
        background: `linear-gradient(to right, #00B4D8 ${timelinePercentage}%, #3A3A3A ${timelinePercentage}%)`      
    };

    const volumeProgress = {
        background: `linear-gradient(to right, #00B4D8 ${isMuted ? 0 : volumeValue * 100}%, #3A3A3A ${isMuted ? 0 : volumeValue * 100}%)`,
    };
    
    return(
        <div className="audio-player now-playing-hide">

            <div className="audio-bar">
                <div className="audio-player-song-info">
                    <img src={musicInfo[currentTrack].img} alt="" />
                    <div className="audio-player-info">
                        <p className="audio-player-info-title">{musicInfo[currentTrack].name}</p>
                        <p className="audio-player-info-artist">{musicInfo[currentTrack].artist}</p>
                    </div>
                </div>

                <div className="controls">
                    <div className="audio-play-timeline">
                        <button className="player-button" onClick={toggleAudio}>
                            {isPlaying ? <i className="fa-solid fa-pause fa-xl"></i> : <i className="fa-solid fa-play fa-xl	"></i>}
                        </button>
                        <button className="control-button" onClick={prevSong}>
                            <i className="fa-solid fa-backward-step fa-xl"></i> 
                        </button>
                        <input style={timelineProgress} type="range" className="timeline" max="100" value={timelinePercentage} onChange={timelineChange} ref={timelineRef} />
                        <button className="control-button" onClick={nextSong}>
                            <i className="fa-solid fa-forward-step fa-xl"></i> 
                        </button>
                    </div>
                </div>

                <div className="audio-volume">
                    <button className="sound-button" onClick={toggleSound}>
                        {isMuted ? <i className="fa-solid fa-volume-xmark fa-xl icon-white"></i> : <i className="fa-solid fa-volume-low fa-xl icon-white"></i>}
                    </button>
                    <input style={volumeProgress} type="range" className="volume-control" max="1" step="0.01" value={isMuted ? 0 : volumeValue} onChange={volumeChange} ref={volumeRef} />
                </div>
            </div>

            <audio ref={audioRef} src={musicInfo[currentTrack].src} />

        </div>
    )
}

export default NowPlaying