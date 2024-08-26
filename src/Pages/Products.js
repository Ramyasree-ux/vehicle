import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
      <li><Link to="/ProductData/se03Lite">SE03 Lite</Link></li>
        <li><Link to="/ProductData/se03">SE03</Link></li>
        <li><Link to="/ProductData/se03Max">SE03 Max</Link></li>
      </ul>
    </div>
  );
};

export default Products;
