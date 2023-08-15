import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../Playlist.css";
import { useEffect } from "react";

function Playlist() {
    return (
        <div>
            <Navbar />  
            <div className="playlist-page">
                <div className="playlist-header">
                    <div className="playlist-img">
                        <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div className="playlist-info">
                        <h1>songs to cry to alone</h1>
                        <h4>Playlist</h4>
                        <h3>Made by Soundex</h3>
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
                                <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>sad song</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Artist</p>
                        </div>
                        <div className="p-row-item">
                            <p>4:53</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>very sad song</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Artist</p>
                        </div>
                        <div className="p-row-item">
                            <p>3:09</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>extremely sad song</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Artist</p>
                        </div>
                        <div className="p-row-item">
                            <p>2:52</p>
                        </div>
                    </div>
                    <div className="playlist-list-row playlist-list-hover">
                        <div className="p-row-item">
                            <div className="playlist-list-info">
                                <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                                <p>extra sad song</p>
                            </div>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Collection</p>
                        </div>
                        <div className="p-row-item">
                            <p>Sad Songs Artist</p>
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

export default Playlist;