import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/contact-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} className='app-logo' alt='logo' />
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
