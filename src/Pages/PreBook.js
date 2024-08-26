import React from 'react';
import './PreBook.css';

const PreBook = () => {
  return (
    <div className="prebook-page">
      <h1>Pre-Book Your Rhyno EV</h1>
      <p>Secure your spot to own a Rhyno EV by pre-booking now! Experience the future of electric vehicles.</p>
      
      <form className="prebook-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" placeholder="Your Phone Number" required />
        </label>
        <label>
          Select Model:
          <select name="model" required>
            <option value="se03Lite">SE03 Lite</option>
            <option value="se03">SE03</option>
            <option value="se03Max">SE03 Max</option>
          </select>
        </label>
        <button type="submit" className="prebook-button">Submit</button>
      </form>
    </div>
  );
};

export default PreBook;
