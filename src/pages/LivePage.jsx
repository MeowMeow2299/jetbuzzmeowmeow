import React from 'react';
import { Link } from 'react-router-dom';
import './LivePage.css';

const LivePage = () => {
  const liveGames = [
    { id: 1, title: 'Crazy Time', provider: 'Evolution', image: '/photo/crazytime.png' },
    { id: 2, title: 'Dragon Tiger', provider: 'Evolution', image: '/photo/dragon-tiger.png' },
    { id: 3, title: 'Baccarat', provider: 'Evolution', image: '/photo/baccarat.png' },
    { id: 4, title: 'Roulette', provider: 'Evolution', image: '/photo/roulette.png' },
    { id: 5, title: 'Blackjack', provider: 'Evolution', image: '/photo/blackjack.png' },
    { id: 6, title: 'Lightning Roulette', provider: 'Evolution', image: '/photo/lightning-roulette.png' },
    { id: 7, title: 'Dream Catcher', provider: 'Evolution', image: '/photo/dream-catcher.png' },
    { id: 8, title: 'Monopoly Live', provider: 'Evolution', image: '/photo/monopoly-live.png' },
    { id: 9, title: 'Deal or No Deal', provider: 'Evolution', image: '/photo/deal-or-no-deal.png' },
    { id: 10, title: 'Gonzo Treasure Hunt', provider: 'Evolution', image: '/photo/gonzo-treasure.png' },
    { id: 11, title: 'Football Studio', provider: 'Evolution', image: '/photo/football-studio.png' },
    { id: 12, title: 'Side Bet City', provider: 'Evolution', image: '/photo/side-bet-city.png' },
    { id: 13, title: 'Live Baccarat', provider: 'Ezugi', image: '/photo/live-baccarat.png' },
    { id: 14, title: 'Live Blackjack', provider: 'Ezugi', image: '/photo/live-blackjack.png' },
    { id: 15, title: 'Live Roulette', provider: 'Ezugi', image: '/photo/live-roulette.png' },
    { id: 16, title: 'Casino Hold\'em', provider: 'Ezugi', image: '/photo/casino-holdem.png' },
    { id: 17, title: 'Three Card Poker', provider: 'Ezugi', image: '/photo/three-card-poker.png' },
    { id: 18, title: 'Caribbean Stud Poker', provider: 'Ezugi', image: '/photo/caribbean-stud.png' },
  ];

  return (
    <div className="live-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Live Casino</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {liveGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="live-indicator">LIVE</div>
                <button className="favorite-btn">
                  <span className="heart-icon">♥</span>
                </button>
                <div className="provider-badge">{game.provider}</div>
              </div>
              <button className="game-play-btn">{game.title}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivePage;