import React from "react";
import "./Live.css";

const Live = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "EG4 Live Game", provider: "EG4", img: "/photo/LIVE/EG4001.png", isFavorite: false },
    { id: 2, title: "EG4 Roulette", provider: "EG4", img: "/photo/LIVE/EG4126.png", isFavorite: true },
    { id: 3, title: "EG4 Baccarat", provider: "EG4", img: "/photo/LIVE/EG4127.png", isFavorite: false },
    { id: 4, title: "EG4 Blackjack", provider: "EG4", img: "/photo/LIVE/EG4128.png", isFavorite: true },
    { id: 5, title: "EG4 Dragon Tiger", provider: "EG4", img: "/photo/LIVE/EG4129.png", isFavorite: false },
    { id: 6, title: "EG4 Sic Bo", provider: "EG4", img: "/photo/LIVE/EG4130.png", isFavorite: true },
    { id: 7, title: "EG4 Auto Roulette", provider: "EG4", img: "/photo/LIVE/EG4131.png", isFavorite: false },
    { id: 8, title: "EG4 Speed Baccarat", provider: "EG4", img: "/photo/LIVE/EG4132.png", isFavorite: true },
    { id: 9, title: "EG4 Lightning Roulette", provider: "EG4", img: "/photo/LIVE/EG4133.png", isFavorite: false },
    { id: 10, title: "EG4 Immersive Roulette", provider: "EG4", img: "/photo/LIVE/EG4134.png", isFavorite: true },
    { id: 11, title: "EG4 Infinite Blackjack", provider: "EG4", img: "/photo/LIVE/EG4135.png", isFavorite: false },
    { id: 12, title: "EG4 VIP Blackjack", provider: "EG4", img: "/photo/LIVE/EG4136.png", isFavorite: true },
    { id: 13, title: "EG4 Mega Ball", provider: "EG4", img: "/photo/LIVE/EG4137.png", isFavorite: false },
    { id: 14, title: "EG4 Crazy Time", provider: "EG4", img: "/photo/LIVE/EG4138.png", isFavorite: true },
    { id: 15, title: "EG4 Monopoly Live", provider: "EG4", img: "/photo/LIVE/EG4139.png", isFavorite: false },
    { id: 16, title: "EG4 Dream Catcher", provider: "EG4", img: "/photo/LIVE/EG4140.png", isFavorite: true },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>Live</h2>
        <a href="#" className="view-all">
          VIEW ALL ↗
        </a>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {items.concat(items).map((item, index) => (
            <div key={index} className="game-card" onClick={handleGameClick}>
              <div className="game-image-container">
                <img src={item.img} alt={item.title} className="game-image" />
                <div className="game-title-overlay">{item.title}</div>
                <button className="play-btn" onClick={(e) => e.stopPropagation()}>
                  <div className="play-triangle"></div>
                </button>
                <button className="free-trial-btn" onClick={(e) => e.stopPropagation()}>
                  FREE TRIAL
                </button>
                <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>
                  <span className={`heart-icon ${item.isFavorite ? 'favorited' : ''}`}>♥</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
