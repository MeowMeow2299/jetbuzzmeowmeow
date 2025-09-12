import React from 'react';
import './FishPage.css';

const cardData = [
  { image: '/photo/fishing-war.png', title: 'Fishing War' },
  { image: '/photo/ocean-king.png', title: 'Ocean King' },
  { image: '/photo/fishing-paradise.png', title: 'Fishing Paradise' },
  { image: '/photo/deep-sea-fishing.png', title: 'Deep Sea Fishing' },
  { image: '/photo/golden-fish.png', title: 'Golden Fish' },
  { image: '/photo/fishing-master.png', title: 'Fishing Master' },
  { image: '/photo/coral-fishing.png', title: 'Coral Fishing' },
  { image: '/photo/treasure-hunter.png', title: 'Treasure Hunter' },
  { image: '/photo/shark-attack.png', title: 'Shark Attack' },
  { image: '/photo/dragon-fishing.png', title: 'Dragon Fishing' },
  { image: '/photo/mermaid-pearl.png', title: 'Mermaid\'s Pearl' },
  { image: '/photo/crab-fishing.png', title: 'Crab Fishing' },
];

const FishPage = () => {
  console.log('FishPage loaded with', cardData.length, 'cards');

  return (
    <div className="fish-container">
      <h1 className="fish-header">Fish</h1>
      <div className="fish-grid">
        {cardData.map((card, index) => (
          <div key={index} className="fish-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="fish-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="fish-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishPage;