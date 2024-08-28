import React, { useState } from 'react';
import PayPalButton from '../Components/PayPalButton'; // Import the PayPalButton component
import './PreBook.css'; // Ensure your CSS file is included

const PreBook = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitted(true); // Set the submission state to true
  };

  return (
    <div className="prebook-page">
      <h1>Pre-Book Your Rhyno EV</h1>
      <p>Secure your spot to own a Rhyno EV by pre-booking now! Experience the future of electric vehicles.</p>
      
      <form className="prebook-form" onSubmit={handleSubmit}>
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
            <option value="" disabled selected>Select your model</option>
            <option value="se03Lite">SE03 Lite</option>
            <option value="se03">SE03</option>
            <option value="se03Max">SE03 Max</option>
          </select>
        </label>
        <button type="submit" className="prebook-button">Submit</button>
      </form>

      {/* Show the submitted message if the form is submitted */}
      {isSubmitted && <p className="submitted-message">Thank you! Your pre-booking has been submitted.</p>}

      {/* Add the PayPal Button */}
      <PayPalButton />
    </div>
  );
};

export default PreBook;
