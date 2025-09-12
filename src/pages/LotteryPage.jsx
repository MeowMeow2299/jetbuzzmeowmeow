import React from 'react';
import './LotteryPage.css';

const cardData = [
  { image: '/photo/LOTTERY/gcs__ELOTT-SEALOTT_1748432813813.png', title: 'ELOTT SEA Lottery' },
];

const LotteryPage = () => {
  console.log('LotteryPage loaded with', cardData.length, 'cards');

  return (
    <div className="lottery-container">
      <h1 className="lottery-header">Lottery</h1>
      <div className="lottery-grid">
        {cardData.map((card, index) => (
          <div key={index} className="lottery-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="lottery-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="lottery-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LotteryPage;