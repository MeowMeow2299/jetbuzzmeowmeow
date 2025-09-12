import React from 'react';
import './ESportsPage.css';

const ESportsPage = () => {
  return (
    <div className="esports-page">
      <div className="page-header">
        <h1>E-Sports</h1>
        <p>Compete in the world of electronic sports</p>
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

export default ESportsPage;

