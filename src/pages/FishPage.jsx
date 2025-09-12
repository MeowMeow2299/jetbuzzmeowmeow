import React from 'react';
import { Link } from 'react-router-dom';
import './FishPage.css';

const FishPage = () => {
  const fishGames = [
    { id: 1, title: 'Fishing War', provider: 'Jili', image: '/photo/fishing-war.png' },
    { id: 2, title: 'Ocean King', provider: 'Jili', image: '/photo/ocean-king.png' },
    { id: 3, title: 'Fishing Paradise', provider: 'Jili', image: '/photo/fishing-paradise.png' },
    { id: 4, title: 'Deep Sea Fishing', provider: 'Jili', image: '/photo/deep-sea-fishing.png' },
    { id: 5, title: 'Golden Fish', provider: 'Jili', image: '/photo/golden-fish.png' },
    { id: 6, title: 'Fishing Master', provider: 'Jili', image: '/photo/fishing-master.png' },
    { id: 7, title: 'Coral Fishing', provider: 'Jili', image: '/photo/coral-fishing.png' },
    { id: 8, title: 'Treasure Hunter', provider: 'Jili', image: '/photo/treasure-hunter.png' },
    { id: 9, title: 'Shark Attack', provider: 'Jili', image: '/photo/shark-attack.png' },
    { id: 10, title: 'Dragon Fishing', provider: 'Jili', image: '/photo/dragon-fishing.png' },
    { id: 11, title: 'Mermaid\'s Pearl', provider: 'Jili', image: '/photo/mermaid-pearl.png' },
    { id: 12, title: 'Crab Fishing', provider: 'Jili', image: '/photo/crab-fishing.png' },
    { id: 13, title: 'Whale Hunter', provider: 'Jili', image: '/photo/whale-hunter.png' },
    { id: 14, title: 'Sea Monster', provider: 'Jili', image: '/photo/sea-monster.png' },
    { id: 15, title: 'Pirate Fishing', provider: 'Jili', image: '/photo/pirate-fishing.png' },
    { id: 16, title: 'Aquarium Adventure', provider: 'Jili', image: '/photo/aquarium-adventure.png' },
    { id: 17, title: 'Fishing Frenzy', provider: 'Jili', image: '/photo/fishing-frenzy.png' },
    { id: 18, title: 'Underwater Treasure', provider: 'Jili', image: '/photo/underwater-treasure.png' },
  ];

  return (
    <div className="fish-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Fish Games</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {fishGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="fish-indicator">FISH</div>
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

export default FishPage;