import React from 'react';
import { Link } from 'react-router-dom';
import './ESportsPage.css';

const ESportsPage = () => {
  const esportsGames = [
    { id: 1, title: 'League of Legends', provider: 'Riot Games', image: '/photo/lol.png' },
    { id: 2, title: 'Dota 2', provider: 'Valve', image: '/photo/dota2.png' },
    { id: 3, title: 'Counter-Strike 2', provider: 'Valve', image: '/photo/cs2.png' },
    { id: 4, title: 'Valorant', provider: 'Riot Games', image: '/photo/valorant.png' },
    { id: 5, title: 'Overwatch 2', provider: 'Blizzard', image: '/photo/overwatch2.png' },
    { id: 6, title: 'Apex Legends', provider: 'EA', image: '/photo/apex-legends.png' },
    { id: 7, title: 'Fortnite', provider: 'Epic Games', image: '/photo/fortnite.png' },
    { id: 8, title: 'PUBG Mobile', provider: 'Krafton', image: '/photo/pubg-mobile.png' },
    { id: 9, title: 'Call of Duty', provider: 'Activision', image: '/photo/cod.png' },
    { id: 10, title: 'Rocket League', provider: 'Psyonix', image: '/photo/rocket-league.png' },
    { id: 11, title: 'FIFA eWorld Cup', provider: 'EA Sports', image: '/photo/fifa-esports.png' },
    { id: 12, title: 'NBA 2K', provider: '2K Sports', image: '/photo/nba2k.png' },
    { id: 13, title: 'Street Fighter 6', provider: 'Capcom', image: '/photo/sf6.png' },
    { id: 14, title: 'Tekken 8', provider: 'Bandai Namco', image: '/photo/tekken8.png' },
    { id: 15, title: 'Mortal Kombat', provider: 'NetherRealm', image: '/photo/mk.png' },
    { id: 16, title: 'Hearthstone', provider: 'Blizzard', image: '/photo/hearthstone.png' },
    { id: 17, title: 'Magic: The Gathering', provider: 'Wizards', image: '/photo/mtg.png' },
    { id: 18, title: 'Clash Royale', provider: 'Supercell', image: '/photo/clash-royale.png' },
  ];

  return (
    <div className="esports-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">E-Sports</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {esportsGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="esports-indicator">E-SPORTS</div>
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

export default ESportsPage;