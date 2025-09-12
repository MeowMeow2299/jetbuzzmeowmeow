import React from 'react';
import './LivePage.css';

const cardData = [
  { image: '/photo/crazytime.png', title: 'Crazy Time' },
  { image: '/photo/dragon-tiger.png', title: 'Dragon Tiger' },
  { image: '/photo/baccarat.png', title: 'Baccarat' },
  { image: '/photo/roulette.png', title: 'Roulette' },
  { image: '/photo/blackjack.png', title: 'Blackjack' },
  { image: '/photo/lightning-roulette.png', title: 'Lightning Roulette' },
  { image: '/photo/dream-catcher.png', title: 'Dream Catcher' },
  { image: '/photo/monopoly-live.png', title: 'Monopoly Live' },
  { image: '/photo/deal-or-no-deal.png', title: 'Deal or No Deal' },
  { image: '/photo/gonzo-treasure.png', title: 'Gonzo Treasure Hunt' },
  { image: '/photo/football-studio.png', title: 'Football Studio' },
  { image: '/photo/side-bet-city.png', title: 'Side Bet City' },
];

const LivePage = () => {
  console.log('LivePage loaded with', cardData.length, 'cards');

  return (
    <div className="live-container">
      <h1 className="live-header">Live</h1>
      <div className="live-grid">
        {cardData.map((card, index) => (
          <div key={index} className="live-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="live-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="live-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePage;