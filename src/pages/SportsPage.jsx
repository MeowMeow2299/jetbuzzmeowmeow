import React from 'react';
import './SportsPage.css';

const SportsPage = () => {
  return (
    <div className="sports-page">
      <div className="page-header">
        <h1>Sports</h1>
        <p>Bet on your favorite sports and teams</p>
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

export default SportsPage;

