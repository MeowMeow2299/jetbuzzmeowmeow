import React from 'react';
import { Link } from 'react-router-dom';
import './SportsPage.css';

const SportsPage = () => {
  const sportsGames = [
    { id: 1, title: 'Football Betting', provider: 'Bet365', image: '/photo/football-betting.png' },
    { id: 2, title: 'Basketball Live', provider: 'Bet365', image: '/photo/basketball-live.png' },
    { id: 3, title: 'Tennis Championship', provider: 'Bet365', image: '/photo/tennis-championship.png' },
    { id: 4, title: 'Cricket World Cup', provider: 'Bet365', image: '/photo/cricket-world-cup.png' },
    { id: 5, title: 'Baseball League', provider: 'Bet365', image: '/photo/baseball-league.png' },
    { id: 6, title: 'Hockey Match', provider: 'Bet365', image: '/photo/hockey-match.png' },
    { id: 7, title: 'Golf Tournament', provider: 'Bet365', image: '/photo/golf-tournament.png' },
    { id: 8, title: 'Boxing Fight', provider: 'Bet365', image: '/photo/boxing-fight.png' },
    { id: 9, title: 'Formula 1', provider: 'Bet365', image: '/photo/formula-1.png' },
    { id: 10, title: 'Olympic Games', provider: 'Bet365', image: '/photo/olympic-games.png' },
    { id: 11, title: 'Volleyball', provider: 'Bet365', image: '/photo/volleyball.png' },
    { id: 12, title: 'Badminton', provider: 'Bet365', image: '/photo/badminton.png' },
    { id: 13, title: 'Table Tennis', provider: 'Bet365', image: '/photo/table-tennis.png' },
    { id: 14, title: 'Swimming', provider: 'Bet365', image: '/photo/swimming.png' },
    { id: 15, title: 'Cycling', provider: 'Bet365', image: '/photo/cycling.png' },
    { id: 16, title: 'Athletics', provider: 'Bet365', image: '/photo/athletics.png' },
    { id: 17, title: 'Rugby', provider: 'Bet365', image: '/photo/rugby.png' },
    { id: 18, title: 'American Football', provider: 'Bet365', image: '/photo/american-football.png' },
  ];

  return (
    <div className="sports-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Sports Betting</span>
        </Link>
      </div>
      
      <div className="games-container">
        <div className="games-grid">
          {sportsGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="sports-indicator">SPORTS</div>
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

export default SportsPage;