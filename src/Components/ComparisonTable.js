import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = () => {
  return (
    <section className="comparison-table">
      <h2>Compare Our Models</h2>
      <div className="table-wrapper">
        <div className="spec-card">
          <h3>Rhyno SE03 Lite</h3>
          <ul>
            <li><strong>Battery:</strong> 1.8Kwh</li>
            <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
            <li><strong>Battery Warranty:</strong> 3 years</li>
            <li><strong>Charging Time:</strong> 3 hours (12A)</li>
            <li><strong>Motor:</strong> 1500W</li>
            <li><strong>Max Speed:</strong> 55 km/h</li>
            <li><strong>Max Range (@30km/h):</strong> 100 km</li>
            <li><strong>Max Range (@45km/h):</strong> 90 km</li>
            <li><strong>Max Range (@Full Speed):</strong> 60 km</li>
            <li><strong>Other Benefits:</strong> Fire-safe Battery, Range prediction, Comfortable ride</li>
          </ul>
        </div>
        <div className="spec-card">
          <h3>Rhyno SE03</h3>
          <ul>
            <li><strong>Battery:</strong> 2.7Kwh</li>
            <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
            <li><strong>Battery Warranty:</strong> 3 years</li>
            <li><strong>Charging Time:</strong> 4 hours (12A)</li>
            <li><strong>Motor:</strong> 1500W</li>
            <li><strong>Max Speed:</strong> 55 km/h</li>
            <li><strong>Max Range (@30km/h):</strong> 150 km</li>
            <li><strong>Max Range (@45km/h):</strong> 110 km</li>
            <li><strong>Max Range (@Full Speed):</strong> 90 km</li>
            <li><strong>Other Benefits:</strong> Fire-safe Battery, Range prediction, Comfortable ride</li>
          </ul>
        </div>
        <div className="spec-card">
          <h3>Rhyno SE03 Max</h3>
          <ul>
            <li><strong>Battery:</strong> 2.7Kwh</li>
            <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
            <li><strong>Battery Warranty:</strong> 3 years</li>
            <li><strong>Charging Time:</strong> 4 hours (12A)</li>
            <li><strong>Motor:</strong> 2000W</li>
            <li><strong>Max Speed:</strong> 65 km/h</li>
            <li><strong>Max Range (@30km/h):</strong> 120 km</li>
            <li><strong>Max Range (@45km/h):</strong> 100 km</li>
            <li><strong>Max Range (@Full Speed):</strong> 80 km</li>
            <li><strong>Other Benefits:</strong> Fire-safe Battery, Range prediction, Comfortable ride</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
