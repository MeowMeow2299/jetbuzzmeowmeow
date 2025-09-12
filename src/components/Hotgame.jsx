import React from "react";
import "./Hotgame.css";

const Hotgame = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Super Ace", provider: "Jili", img: "/photo/superace.png", isFavorite: false, isHot: true },
    { id: 2, title: "Boxing King", provider: "Jili", img: "/photo/Boxing King.png", isFavorite: true, isHot: true },
    { id: 3, title: "Fortune Gems", provider: "Jili", img: "/photo/Fortune Gems.png", isFavorite: false, isHot: true },
    { id: 4, title: "Money Coming", provider: "Jili", img: "/photo/MoneyComing.png", isFavorite: true, isHot: true },
    { id: 5, title: "Fortune Gems 3", provider: "Jili", img: "/photo/Fortune Gems 3.png", isFavorite: false, isHot: true },
    { id: 6, title: "Super Ace Deluxe", provider: "Jili", img: "/photo/superace.png", isFavorite: true, isHot: true },
    { id: 7, title: "Safari King", provider: "Jili", img: "/photo/Safari_King.png", isFavorite: false, isHot: false },
    { id: 8, title: "Lucky Jaguar", provider: "Jili", img: "/photo/JL0003.png", isFavorite: true, isHot: false },
    { id: 9, title: "Thai Hilo", provider: "Jili", img: "/photo/JL0004.png", isFavorite: false, isHot: false },
    { id: 10, title: "Shōgun", provider: "Jili", img: "/photo/JL0005.png", isFavorite: true, isHot: false },
    { id: 11, title: "Cricket Roulette", provider: "Jili", img: "/photo/JL0006.png", isFavorite: false, isHot: false },
    { id: 12, title: "Golden Bank 2", provider: "Jili", img: "/photo/Golden_Bank.png", isFavorite: true, isHot: false },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>Hot Games</h2>
        <a href="#" className="view-all">
          VIEW ALL ↗
        </a>
      </div>

      <div className="games-grid">
        {items.map((item, index) => (
                <div key={index} className="game-card" onClick={handleGameClick}>
                  <div className="game-image-container">
                    <img src={item.img} className="game-image" alt={item.title} />
                    {item.isHot && <div className="hot-badge">HOT</div>}
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
                    <div className="provider-logo">Jili</div>
                  </div>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Hotgame;
