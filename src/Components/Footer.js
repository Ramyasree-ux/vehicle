import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/refund-policy">Refund Policy</Link></li>
          <li><Link to="/website-policy">Website Policy</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/rentals">Rentals</Link></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.ev/" target="_blank" rel="noopener noreferrer">
          <img src="rhyno-ev/src/assets/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/rhyno-ev/" target="_blank" rel="noopener noreferrer">
          <img src="rhyno-ev/src/assets/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
