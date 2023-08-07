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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes here */}
        <Route path="/group-2-project" element={<Link to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




import React from 'react';
import './CenteredSquare.css'; // Import the CSS file for styling (if needed)

const CenteredSquare = () => {
  return (
    <div className="center-container">
      <div className="square"></div>
    </div>
  );
};

export default CenteredSquare;