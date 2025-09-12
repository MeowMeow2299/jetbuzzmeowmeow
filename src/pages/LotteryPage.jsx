import React from 'react';
import './LotteryPage.css';

const LotteryPage = () => {
  return (
    <div className="lottery-page">
      <div className="page-header">
        <h1>Lottery</h1>
        <p>Try your luck with our lottery games</p>
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

export default LotteryPage;

