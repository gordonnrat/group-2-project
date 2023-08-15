import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../Playlist.css";
import { useEffect } from "react";

function Album() {
    return (
        <div>
            <Navbar />  
            <div className="playlist-page">
                <div className="playlist-header">
                    <div className="playlist-img">
                        <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div className="playlist-info">
                        <h1>The Four Seasons</h1>
                        <h4>Playlist</h4>
                        <h3>By Antonio Vivaldi</h3>
                        <div className="playlist-info-icons">
                            <button className="player-button playlist-play-button">
                                <i className="fa-solid fa-play fa-2xl"></i>
                            </button>
                            <i className="fa-regular fa-heart fa-2xl playlist-fav"></i>
                        </div>
                    </div>
                </div>
                <div className="playlist-list">
                    <div className="playlist-list-row playlist-list-header">
                        <div className="p-row-item">Title</div>
                        <div className="p-row-item">Album</div>
                        <div className="p-row-item">Artist</div>
                        <div className="p-row-item">Length</div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Spring</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>The Four Seasons</p>
                        </div>
                        <div className="p-row-item">
                            <p>Antonio Vivaldi</p>
                        </div>
                        <div className="p-row-item">
                            <p>4:53</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Summer</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Antonio Vivaldi</p>
                        </div>
                        <div className="p-row-item">
                            <p>3:09</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Autumn</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Antonio Vivaldi</p>
                        </div>
                        <div className="p-row-item">
                            <p>2:52</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>Winter</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Antonio Vivaldi</p>
                        </div>
                        <div className="p-row-item">
                            <p>4:20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Album;