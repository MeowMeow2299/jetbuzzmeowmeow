import React from 'react';
import './SportsPage.css';

const cardData = [
  { image: '', title: 'BETBDT Swickets' },
  { image: '', title: 'BETBDT TFB' },
  { image: '', title: 'BETBDT BTI' },
  { image: '', title: 'BETBDT Saba...' },
  { image: '', title: 'BETBDT FBB...' },
  { image: '', title: 'BETBDT United...' },
  { image: '', title: 'BETBDT AAP Gaming' },
  { image: '', title: 'BETBDT Poly Sports' },
  { image: '', title: 'BETBDT SV388' },
  { image: '', title: 'BETBDT RCB888...' },
  { image: '', title: 'BETBDT PANDA...' },
];

const SportsPage = () => {
  return (
    <div className="sports-container">
      <h1 className="sports-header">Sports</h1>
      <div className="sports-grid">
        {cardData.map((card, index) => (
          <div key={index} className="sports-card">
            <img src={card.image} alt={card.title} className="sports-image" />
            <div className="sports-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;