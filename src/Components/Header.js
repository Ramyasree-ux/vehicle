import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Import images directly
import logo from '../assets/logo (2).png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Rhyno EV" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="dropdown">
            <Link to="/products">Products</Link>
            <ul className="dropdown-content">
              <li><Link to="/products/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/products/se03">SE03</Link></li>
              <li><Link to="/products/se03-max">SE03 Max</Link></li>
              <li><Link to="/compare">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/pre-book">Pre-book Now</Link></li>
          <li className="social-icons">
            <a href="https://www.instagram.com/rhyno.ev/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/rhyno-ev/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
