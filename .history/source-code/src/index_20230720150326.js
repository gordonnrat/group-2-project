import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your custom CSS file with gradient styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate 
} from "react-router-dom";

import App from './App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

const router = createBrowserRouter([
  // Your existing route configurations...
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
