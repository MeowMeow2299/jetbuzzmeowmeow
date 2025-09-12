import React from 'react';
import './ESportsPage.css';

const cardData = [
  { image: '/photo/E-SPORTS/gcs__SPORTS-IA_1748432817403.png', title: 'Sports IA E-Sports' },
  { image: '/photo/E-SPORTS/gcs__SPORTS-TF_1748432818466.png', title: 'Sports TF E-Sports' },
];

const ESportsPage = () => {
  console.log('ESportsPage loaded with', cardData.length, 'cards');

  return (
    <div className="esports-container">
      <h1 className="esports-header">E-Sports</h1>
      <div className="esports-grid">
        {cardData.map((card, index) => (
          <div key={index} className="esports-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="esports-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="esports-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ESportsPage;