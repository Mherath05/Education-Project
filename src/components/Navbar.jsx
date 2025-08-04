import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        EduLearn
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button onClick={() => onNavigate('home')} className="navbar-link">
            Home
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => onNavigate('classes')} className="navbar-link">
            Classes
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => onNavigate('contact')} className="navbar-link">
            Contact Us
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => onNavigate('profile')} className="navbar-link">
            Profile
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
