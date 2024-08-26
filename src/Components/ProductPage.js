import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Data/ProductData';
import './ProductPage.css';
import ComparisonTable from './ComparisonTable';

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData[productId];
  const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : '');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handlePayment = () => {
    alert(`Payment successful for ${product.name} in ${selectedColor}`);
    // Further logic to handle successful payment can be added here
    setIsCheckoutOpen(false);
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ borderColor: selectedColor }} />
      <div className="color-selector">
        {product.colors.map((color, index) => (
          <button 
            key={index} 
            style={{ backgroundColor: color }} 
            className={selectedColor === color ? 'selected' : ''}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
      <p>{product.details}</p>
      <button className="buy-now" onClick={handleCheckout}>Buy Now</button>

      {/* Display checkout modal if open */}
      {isCheckoutOpen && (
        <div className="checkout-modal">
          <h2>Checkout</h2>
          <p>Product: {product.name}</p>
          <p>Color: {selectedColor}</p>
          <button onClick={handlePayment}>Confirm Payment</button>
          <button onClick={() => setIsCheckoutOpen(false)}>Cancel</button>
        </div>
      )}

      {/* Add the comparison table */}
      <ComparisonTable />
    </div>
  );
};

export default ProductPage;
