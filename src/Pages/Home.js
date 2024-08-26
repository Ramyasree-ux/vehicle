// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [changingWord, setChangingWord] = useState('Style');
  const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChangingWord((prev) => {
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 1500); // Faster rotation for the words

    return () => clearInterval(intervalId);
  }, );

  const uspItems = [
    {
      title: 'LFP Battery',
      description: 'Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate...',
    },
    {
      title: 'Wider Tyres',
      description: 'Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast...',
    },
    {
      title: 'Range Prediction',
      description: 'Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind...',
    },
    {
      title: 'Extraordinary Experience',
      description: 'Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!',
    },
    {
      title: 'Rugged and Simple Design',
      description: 'We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents...',
    }
  ];

  const [currentUspIndex, setCurrentUspIndex] = useState(0);

  useEffect(() => {
    const uspInterval = setInterval(() => {
      setCurrentUspIndex((prevIndex) => (prevIndex + 1) % uspItems.length);
    }, 2500); // Faster rotation for USP items

    return () => clearInterval(uspInterval);
  }, [uspItems.length]);

  return (
    <div className="home">
      {/* Front Line */}
      <section className="hero-section">
        <h1>
          Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span id="changing-word">{changingWord}</span>.
        </h1>
      </section>

      {/* Vehicle Showcase */}
      <section className="vehicle-showcase">
        <h2>Our Vehicles</h2>
        <div className="vehicle-cards">
          <div className="vehicle-card">
            <img src={require('./rhyno.png')} alt="SE03 Lite" />
            <h3>
              <Link to="/products/se03Lite">SE03 Lite</Link>
            </h3>
          </div>
          <div className="vehicle-card">
            <img src={require('./rhyno.png')} alt="SE03" />
            <h3>
              <Link to="/products/se03">SE03</Link>
            </h3>
          </div>
          <div className="vehicle-card">
            <img src={require('./rhyno.png')} alt="SE03 Max" />
            <h3>
              <Link to="/products/se03Max">SE03 Max</Link>
            </h3>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp-carousel">
        <h2>Why Choose Rhyno EV?</h2>
        <div className="carousel">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentUspIndex ? 'active' : ''}`}
              style={{ display: index === currentUspIndex ? 'block' : 'none' }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Pre-Book Button */}
      <Link to="/PreBook" className="pre-book-button">Pre-Book Now</Link>
    </div>
  );
};

export default Home;
