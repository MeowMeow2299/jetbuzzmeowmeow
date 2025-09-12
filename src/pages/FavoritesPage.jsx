import React from 'react';
import './FavoritesPage.css';

const FavoritesPage = () => {
  return (
    <div className="favorites-page">
      <div className="page-header">
        <h1>Favorites</h1>
        <p>Your favorite games collection</p>
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

export default FavoritesPage;

