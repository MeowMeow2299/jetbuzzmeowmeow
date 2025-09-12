import React from 'react';
import { Link } from 'react-router-dom';
import './HotGamesPage.css';

const HotGamesPage = () => {
  const games = [
    { id: 1, title: 'Super Ace', provider: 'Jili', image: '/photo/superace.png' },
    { id: 2, title: 'Fortune Gems', provider: 'Jili', image: '/photo/Fortune Gems.png' },
    { id: 3, title: 'Aviator', provider: 'Spribe', image: '/photo/aviator.png' },
    { id: 4, title: 'Super Ace Deluxe', provider: 'Jili', image: '/photo/superace.png' },
    { id: 5, title: 'Money Coming', provider: 'Jili', image: '/photo/MoneyComing.png' },
    { id: 6, title: 'Boxing King', provider: 'Jili', image: '/photo/Boxing King.png' },
    { id: 7, title: 'Lucky 7', provider: 'Ezugi', image: '/photo/lucky7.png' },
    { id: 8, title: 'Fortune Gems 3', provider: 'Jili', image: '/photo/Fortune Gems 3.png' },
    { id: 9, title: 'Crazy Time', provider: 'Evolution', image: '/photo/crazytime.png' },
    { id: 10, title: 'Golden Bank', provider: 'Jili', image: '/photo/Golden_Bank.png' },
    { id: 11, title: 'Golden Empire', provider: 'Jili', image: '/photo/Goden Empire.gif' },
    { id: 12, title: '777-Classic Style', provider: 'BTGaming', image: '/photo/777.png' },
    { id: 13, title: 'Party Star', provider: 'Jili', image: '/photo/party.png' },
    { id: 14, title: 'Leprechaun Riches', provider: 'Pocket Games Soft', image: '/photo/leprechaun.png' },
    { id: 15, title: 'Legacy of Egypt', provider: 'Jili', image: '/photo/egypt.png' },
    { id: 16, title: 'Wild Ace', provider: 'Jili', image: '/photo/wildace.png' },
    { id: 17, title: 'Crash Cricket', provider: 'Jili', image: '/photo/cricket.png' },
    { id: 18, title: 'Ascent Charge Buffalo', provider: 'Jili', image: '/photo/buffalo.png' },
  ];

  return (
    <div className="hot-games-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Hot Games</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
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

export default HotGamesPage;
