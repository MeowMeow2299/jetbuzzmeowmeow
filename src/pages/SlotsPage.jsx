import React from 'react';
import './SlotsPage.css';

const SlotsPage = () => {
  return (
    <div className="slots-page">
      <div className="page-header">
        <h1>Slots</h1>
        <p>Spin and win with our amazing slot games</p>
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

export default SlotsPage;

