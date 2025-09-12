import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ESportsPage.css';

const cardData = [
  { image: '/photo/E-SPORTS/gcs__SPORTS-IA_1748432817403.png', title: 'Sports IA E-Sports' },
  { image: '/photo/E-SPORTS/gcs__SPORTS-TF_1748432818466.png', title: 'Sports TF E-Sports' },
];

const ESportsPage = () => {
  const navigate = useNavigate();
  console.log('ESportsPage loaded with', cardData.length, 'cards');

  return (
    <div className="esports-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="esports-header">E-Sports</h1>
      </div>
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