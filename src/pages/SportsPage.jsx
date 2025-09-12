import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './SportsPage.css';

const cardData = [
  { image: '/photo/9WICKETS_SPORTS.png', title: '9Wickets' },
  { image: '/photo/BETBDT_LUCKY_SPORTS.png', title: 'Lucky Sports' },
  { image: '/photo/BTI_SPORTS.png', title: 'BTI Sports' },
  { image: '/photo/SABA_SPORTS.png', title: 'Saba Sports' },
  { image: '/photo/FB_SPORTS.png', title: 'FB Sports' },
  { image: '/photo/UNITED_GAMING_SPORTS.png', title: 'United Gaming' },
  { image: '/photo/AP_GAMING_SPORTS.png', title: 'AP Gaming' },
  { image: '/photo/POLY_SPORTS.png', title: 'Poly Sports' },
  { image: '/photo/SV388_SPORTS.png', title: 'SV388' },
  { image: '/photo/RCB988_HOURSEBOOK_SPORTS.png', title: 'RCB988' },
  { image: '/photo/PANDA_SPORTS.png', title: 'Panda Sports' },
];

const SportsPage = () => {
  const navigate = useNavigate();
  console.log('SportsPage loaded with', cardData.length, 'cards');
  
  return (
    <div className="sports-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="sports-header">Sports</h1>
      </div>
      <div className="sports-grid">
        {cardData.map((card, index) => (
          <div key={index} className="sports-card">
            <img 
              src={card.image || '/photo/logo.png'} 
              alt={card.title} 
              className="sports-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="sports-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;