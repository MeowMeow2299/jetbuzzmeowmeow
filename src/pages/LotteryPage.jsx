import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './LotteryPage.css';

const cardData = [
  { image: '/photo/LOTTERY/gcs__ELOTT-SEALOTT_1748432813813.png', title: 'ELOTT SEA Lottery' },
];

const LotteryPage = () => {
  const navigate = useNavigate();
  console.log('LotteryPage loaded with', cardData.length, 'cards');

  return (
    <div className="lottery-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="lottery-header">Lottery</h1>
      </div>
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