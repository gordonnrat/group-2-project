import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import App from './App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

const router = createBrowserRouter([
  {
    path: "/", // This is the relative URL path which users can bookmark and navigate to
    element: <Home />, // This is the React Component to load when navigating to the associated path URL
    // errorElement: <ErrorPage />, // This is a React Component to load when a URL is invalid or something goes wrong
  },
  {
    path: "/login",
    element: <Login />,
  },
  // More routes...
  {
  path: "/group-2-project",
  element: 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
