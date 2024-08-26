import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        
        <li><Link to="/contact">Contact Us</Link></li>
        
      </ul>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={require('./instagram.png')} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={require('./linkedin.png')} alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
};

export default Menu;
