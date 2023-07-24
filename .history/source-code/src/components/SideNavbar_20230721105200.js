import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // List of navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse' },
    // Add more navigation items as needed
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
