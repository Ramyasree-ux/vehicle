import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../Pages/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Rhyno EV Logo" />
        </Link>
      </div>
      <ul className="footer-links">
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Website Policy</li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>Products</li>
        <li>
          <a href="https://www.linkedin.com/company/your-company-name" target="_blank" rel="noopener noreferrer">
            Career
          </a>
        </li>
        <li>Rentals</li>
      </ul>
      <div className="social-icons">
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <img src={require('./instagram.png')} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/your-company-name" target="_blank" rel="noopener noreferrer">
          <img src={require('./linkedin.png')} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
