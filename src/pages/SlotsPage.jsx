import React from 'react';
import './SlotsPage.css';

const cardData = [
  { image: '/photo/777.png', title: '777-Classic Style' },
  { image: '/photo/Fortune Gems.png', title: 'Fortune Gems' },
  { image: '/photo/Fortune Gems 3.png', title: 'Fortune Gems 3' },
  { image: '/photo/superace.png', title: 'Super Ace' },
  { image: '/photo/MoneyComing.png', title: 'Money Coming' },
  { image: '/photo/Boxing King.png', title: 'Boxing King' },
  { image: '/photo/lucky7.png', title: 'Lucky 7' },
  { image: '/photo/Golden_Bank.png', title: 'Golden Bank' },
  { image: '/photo/Goden Empire.gif', title: 'Golden Empire' },
  { image: '/photo/party.png', title: 'Party Star' },
  { image: '/photo/leprechaun.png', title: 'Leprechaun Riches' },
  { image: '/photo/egypt.png', title: 'Legacy of Egypt' },
  { image: '/photo/wildace.png', title: 'Wild Ace' },
  { image: '/photo/buffalo.png', title: 'Ascent Charge Buffalo' },
];

const SlotsPage = () => {
  console.log('SlotsPage loaded with', cardData.length, 'cards');

  return (
    <div className="slots-container">
      <h1 className="slots-header">Slots</h1>
      <div className="slots-grid">
        {cardData.map((card, index) => (
          <div key={index} className="slots-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="slots-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="slots-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotsPage;