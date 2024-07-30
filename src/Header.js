import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // Cassi  
    // CONTROL- ASSESSMENT FOR IT SERVICES
    // #db0011
    <header className="App-header">
      <div className="logo">CO-ASSIST</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// CO-ASSIST 