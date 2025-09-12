import React from 'react';
import './FishPage.css';

const FishPage = () => {
  return (
    <div className="fish-page">
      <div className="page-header">
        <h1>Fish Games</h1>
        <p>Dive into the ocean and catch the biggest fish</p>
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

export default FishPage;

