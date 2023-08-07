import React from 'react';
import Navbar from '../Navbar';
import Square from './Square'; // Adjust the import path according to your project structure

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <ul>
        <li>Liberty</li>
      </ul>
      <div className="center-squares">
        <Square />
        <Square />
        {/* Add more squares if needed */}
      </div>
    </div>
  );
}

export default Home;
