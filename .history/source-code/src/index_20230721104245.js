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

import App from './App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="sidebar-left">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* Add more links to other pages */}
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
          <Route path="/group-2-project" element={<Link to="/" />} />
        </Routes>
      </div>
      <div className="sidebar-right">
        {/* Add content for the right sidebar */}
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
