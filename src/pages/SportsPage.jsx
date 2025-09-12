import React from 'react';
import './SportsPage.css';

const cardData = [
  { image: '/photo/9WICKETS_SPORTS.png', title: 'BETBDT Swickets' },
  { image: '/photo/BETBDT_LUCKY_SPORTS.png', title: 'BETBDT TFB' },
  { image: '/photo/BTI_SPORTS.png', title: 'BETBDT BTI' },
  { image: '/photo/SABA_SPORTS.png', title: 'BETBDT Saba...' },
  { image: '/photo/FB_SPORTS.png', title: 'BETBDT FBB...' },
  { image: '/photo/UNITED_GAMING_SPORTS.png', title: 'BETBDT United...' },
  { image: '/photo/AP_GAMING_SPORTS.png', title: 'BETBDT AAP Gaming' },
  { image: '/photo/POLY_SPORTS.png', title: 'BETBDT Poly Sports' },
  { image: '/photo/SV388_SPORTS.png', title: 'BETBDT SV388' },
  { image: '/photo/RCB988_HOURSEBOOK_SPORTS.png', title: 'BETBDT RCB888...' },
  { image: '/photo/PANDA_SPORTS.png', title: 'BETBDT PANDA...' },
];

const SportsPage = () => {
  console.log('SportsPage loaded with', cardData.length, 'cards');
  
  return (
    <div className="sports-container">
      <h1 className="sports-header">Sports</h1>
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