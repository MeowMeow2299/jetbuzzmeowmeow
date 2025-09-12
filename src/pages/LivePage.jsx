import React from 'react';
import './LivePage.css';

const LivePage = () => {
  return (
    <div className="live-page">
      <div className="page-header">
        <h1>Live Games</h1>
        <p>Experience real-time gaming with live dealers</p>
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

export default LivePage;

