import React from "react";
import "./Slider.css";

const Slider = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Super Ace", provider: "Jili", img: "/photo/superace.png", isFavorite: false },
    { id: 2, title: "Fortune Gems", provider: "Jili", img: "/photo/JL0111.png", isFavorite: true },
    { id: 3, title: "Aviator", provider: "Spribe", img: "/photo/JL0116.png", isFavorite: false },
    { id: 4, title: "Super Ace Deluxe", provider: "Jili", img: "/photo/JL0125.png", isFavorite: true },
    { id: 5, title: "Money Coming", provider: "Jili", img: "/photo/JL0136.png", isFavorite: false },
    { id: 6, title: "Boxing King", provider: "Jili", img: "/photo/JL0148.png", isFavorite: true },
    { id: 7, title: "Wild Bounty Showdown", provider: "Pocket Games Soft", img: "/photo/JL0156.png", isFavorite: false },
    { id: 8, title: "Golden Empire", provider: "Jili", img: "/photo/JL0162.png", isFavorite: true },
    { id: 9, title: "777-Classic Style", provider: "BTGaming", img: "/photo/JL0166.png", isFavorite: false },
    { id: 10, title: "Happy Fishing", provider: "Jili", img: "/photo/JL0167.png", isFavorite: true },
    { id: 11, title: "Party Star", provider: "Jili", img: "/photo/JL0170.png", isFavorite: false },
    { id: 12, title: "Leprechaun Riches", provider: "Pocket Games Soft", img: "/photo/JL0171.png", isFavorite: true },
    { id: 13, title: "Legacy of Egypt", provider: "Jili", img: "/photo/JL0181.png", isFavorite: false },
    { id: 14, title: "Wild Ace", provider: "Jili", img: "/photo/JL0182.png", isFavorite: true },
    { id: 15, title: "Hot Games", provider: "Jili", img: "/photo/JL0183.png", isFavorite: false },
    { id: 16, title: "Lucky Slots", provider: "Jili", img: "/photo/JL0184.png", isFavorite: true },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>🎲 TOP SLOTS POPULAR IN BANGLADESH</h2>
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
                <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>
                  <span className={`heart-icon ${item.isFavorite ? 'favorited' : ''}`}>♥</span>
                </button>
                <button className="play-btn" onClick={(e) => e.stopPropagation()}>
                  <div className="play-triangle"></div>
                </button>
                <div className="free-trial-label">FREE TRIAL</div>
              </div>
              <div className="game-info">
                <div className="game-title">{item.title}</div>
                <div className="game-provider">{item.provider}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
