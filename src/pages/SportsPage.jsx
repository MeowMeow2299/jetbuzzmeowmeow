import React from 'react';
import { Link } from 'react-router-dom';
import './SportsPage.css';

const SportsPage = () => {
  const sportsGames = [
    { id: 1, title: '9WICKETS SPORTS', provider: '9Wickets', image: '/photo/9WICKETS_SPORTS.png' },
    { id: 2, title: 'AP GAMING SPORTS', provider: 'AP Gaming', image: '/photo/AP_GAMING_SPORTS.png' },
    { id: 3, title: 'BETBDT LUCKY SPORTS', provider: 'BetBDT', image: '/photo/BETBDT_LUCKY_SPORTS.png' },
    { id: 4, title: 'BTI SPORTS', provider: 'BTI', image: '/photo/BTI_SPORTS.png' },
    { id: 5, title: 'FB SPORTS', provider: 'FB Gaming', image: '/photo/FB_SPORTS.png' },
    { id: 6, title: 'PANDA SPORTS', provider: 'Panda Gaming', image: '/photo/PANDA_SPORTS.png' },
    { id: 7, title: 'POLY SPORTS', provider: 'Poly Gaming', image: '/photo/POLY_SPORTS.png' },
    { id: 8, title: 'RCB988 HOURSEBOOK SPORTS', provider: 'RCB988', image: '/photo/RCB988_HOURSEBOOK_SPORTS.png' },
    { id: 9, title: 'SABA SPORTS', provider: 'SABA Gaming', image: '/photo/SABA_SPORTS.png' },
    { id: 10, title: 'SV388 SPORTS', provider: 'SV388', image: '/photo/SV388_SPORTS.png' },
    { id: 11, title: 'UNITED GAMING SPORTS', provider: 'United Gaming', image: '/photo/UNITED_GAMING_SPORTS.png' },
    // Fallback games with existing images
    { id: 12, title: 'Super Ace Sports', provider: 'Jili', image: '/photo/superace.png' },
    { id: 13, title: 'Money Coming Sports', provider: 'Jili', image: '/photo/Money_Coming.png' },
    { id: 14, title: 'Golden Bank Sports', provider: 'Jili', image: '/photo/GOLDEN_BANK.png' },
  ];

  console.log('SportsPage loaded with', sportsGames.length, 'games');

  return (
    <div className="sports-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Sports Betting</span>
        </Link>
      </div>
      
      <div className="games-container">
        <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
          SPORTS GAMES ({sportsGames.length})
        </h2>
        <div className="games-grid">
          {sportsGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="game-image"
                  onError={(e) => {
                    e.target.src = '/photo/logo.png'; // Fallback image
                  }}
                />
                <div className="sports-indicator">SPORTS</div>
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

export default SportsPage;