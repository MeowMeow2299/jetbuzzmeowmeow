import React from 'react';
import './HotGamesPage.css';

const cardData = [
  { image: '/photo/superace.png', title: 'Super Ace' },
  { image: '/photo/Fortune Gems.png', title: 'Fortune Gems' },
  { image: '/photo/aviator.png', title: 'Aviator' },
  { image: '/photo/MoneyComing.png', title: 'Money Coming' },
  { image: '/photo/Boxing King.png', title: 'Boxing King' },
  { image: '/photo/lucky7.png', title: 'Lucky 7' },
  { image: '/photo/Fortune Gems 3.png', title: 'Fortune Gems 3' },
  { image: '/photo/crazytime.png', title: 'Crazy Time' },
  { image: '/photo/Golden_Bank.png', title: 'Golden Bank' },
  { image: '/photo/Goden Empire.gif', title: 'Golden Empire' },
  { image: '/photo/777.png', title: '777-Classic Style' },
  { image: '/photo/party.png', title: 'Party Star' },
  { image: '/photo/leprechaun.png', title: 'Leprechaun Riches' },
  { image: '/photo/egypt.png', title: 'Legacy of Egypt' },
  { image: '/photo/wildace.png', title: 'Wild Ace' },
  { image: '/photo/cricket.png', title: 'Crash Cricket' },
  { image: '/photo/buffalo.png', title: 'Ascent Charge Buffalo' },
];

const HotGamesPage = () => {
  console.log('HotGamesPage loaded with', cardData.length, 'cards');

  return (
    <div className="hotgames-container">
      <h1 className="hotgames-header">Hot Games</h1>
      <div className="hotgames-grid">
        {cardData.map((card, index) => (
          <div key={index} className="hotgames-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="hotgames-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="hotgames-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotGamesPage;