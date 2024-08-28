import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import ProductPage from './Components/ProductPage';
import PreBook from './Pages/PreBook';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/prebook" element={<PreBook />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
