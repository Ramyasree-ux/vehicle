// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import ProductPage from './Components/ProductPage';
import PreBook from './Pages/PreBook'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/prebook" element={<PreBook />} />
      </Routes>
    </Router>
  );
}

export default App;
