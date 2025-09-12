import React from 'react';
import './CurrencySupport.css';

const CurrencySupport = () => {
  const currencies = [
    { id: 1, name: "Current Currency", image: "/photo/current.png" }
  ];

  return (
    <div className="currency-section">
      <div className="currency-container">
        <h2 className="currency-title">Currency Support</h2>
        <div className="currency-grid">
          {currencies.map((currency) => (
            <div key={currency.id} className="currency-item">
              <div className="currency-image-container">
                <img 
                  src={currency.image} 
                  alt={currency.name}
                  className="currency-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="currency-name">{currency.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencySupport;