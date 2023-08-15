import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import App from './App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';
import Artist from './components/pages/Artist';
import Subscription from './components/pages/Subscription';
import NowPlaying from "./components/NowPlaying";
import Playlist from "./components/pages/Playlist";
import SignUp from './components/pages/SignUp'; 

ReactDOM.render(
  <React.StrictMode>
    <NowPlaying />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/playlist/songs-to-cry-to-alone" element={<Playlist />} />
        <Route path="/*" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} /> 
        {/* Add more routes here */}
        <Route path="/group-2-project" element={<Landing />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


