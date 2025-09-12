import React from 'react';
import { Link } from 'react-router-dom';
import './SlotsPage.css';

const SlotsPage = () => {
  const slotsGames = [
    { id: 1, title: '777-Classic Style', provider: 'BTGaming', image: '/photo/777.png' },
    { id: 2, title: 'Fortune Gems', provider: 'Jili', image: '/photo/Fortune Gems.png' },
    { id: 3, title: 'Fortune Gems 3', provider: 'Jili', image: '/photo/Fortune Gems 3.png' },
    { id: 4, title: 'Super Ace', provider: 'Jili', image: '/photo/superace.png' },
    { id: 5, title: 'Super Ace Deluxe', provider: 'Jili', image: '/photo/superace.png' },
    { id: 6, title: 'Money Coming', provider: 'Jili', image: '/photo/MoneyComing.png' },
    { id: 7, title: 'Boxing King', provider: 'Jili', image: '/photo/Boxing King.png' },
    { id: 8, title: 'Lucky 7', provider: 'Ezugi', image: '/photo/lucky7.png' },
    { id: 9, title: 'Golden Bank', provider: 'Jili', image: '/photo/Golden_Bank.png' },
    { id: 10, title: 'Golden Empire', provider: 'Jili', image: '/photo/Goden Empire.gif' },
    { id: 11, title: 'Party Star', provider: 'Jili', image: '/photo/party.png' },
    { id: 12, title: 'Leprechaun Riches', provider: 'Pocket Games Soft', image: '/photo/leprechaun.png' },
    { id: 13, title: 'Legacy of Egypt', provider: 'Jili', image: '/photo/egypt.png' },
    { id: 14, title: 'Wild Ace', provider: 'Jili', image: '/photo/wildace.png' },
    { id: 15, title: 'Ascent Charge Buffalo', provider: 'Jili', image: '/photo/buffalo.png' },
    { id: 16, title: 'Dragon Tiger', provider: 'Evolution', image: '/photo/dragon-tiger.png' },
    { id: 17, title: 'Baccarat', provider: 'Evolution', image: '/photo/baccarat.png' },
    { id: 18, title: 'Roulette', provider: 'Evolution', image: '/photo/roulette.png' },
  ];

  return (
    <div className="slots-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Slots Games</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {slotsGames.map((game) => (
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

export default SlotsPage;