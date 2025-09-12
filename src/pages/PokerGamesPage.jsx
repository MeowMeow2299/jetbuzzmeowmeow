import React from 'react';
import './PokerGamesPage.css';

const PokerGamesPage = () => {
  return (
    <div className="poker-games-page">
      <div className="page-header">
        <h1>Poker Games</h1>
        <p>Test your poker skills and win big</p>
      </div>
      
      <div className="games-container">
        {/* Game content will be added here */}
        <div className="coming-soon">
          <h2>Coming Soon</h2>
          <p>Game content will be added here</p>
        </div>
      </div>
    </div>
  );
};

export default PokerGamesPage;

