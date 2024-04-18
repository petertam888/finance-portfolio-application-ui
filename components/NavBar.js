import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
         <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link href={`/`}>
            <span style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Home</span>
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link href={`/buyStock`}>
            <span style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Buy Stocks</span>
          </Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link href={`/deposit`}>
            <span style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Deposit</span>
          </Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link href={`/portfolio`}>
            <span style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Portfolio</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;












