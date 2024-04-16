// components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <a href="#buy" style={{ color: 'white', textDecoration: 'none' }}>Buy Stocks</a>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <a href="#deposit" style={{ color: 'white', textDecoration: 'none' }}>Add Deposit</a>
        </li>
        <li style={{ display: 'inline' }}>
          <a href="#portfolio" style={{ color: 'white', textDecoration: 'none' }}>Check Portfolio</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

