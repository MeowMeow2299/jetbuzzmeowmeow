import React from "react";
import "./Live.css";

const Live = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Lightning Blackjack", provider: "Evolution", img: "/photo/JL0186.png", isFavorite: false },
    { id: 2, title: "Immersive Roulette", provider: "Evolution", img: "/photo/JL0187.png", isFavorite: true },
    { id: 3, title: "Speed Baccarat", provider: "Evolution", img: "/photo/JL0188.png", isFavorite: false },
    { id: 4, title: "Infinite Blackjack", provider: "Evolution", img: "/photo/JL0189.png", isFavorite: true },
    { id: 5, title: "Auto Roulette", provider: "Evolution", img: "/photo/JL0190.png", isFavorite: false },
    { id: 6, title: "VIP Blackjack", provider: "Evolution", img: "/photo/JL0191.png", isFavorite: true },
    { id: 7, title: "Dragon Tiger Live", provider: "Evolution", img: "/photo/JL0192.png", isFavorite: false },
    { id: 8, title: "Baccarat Squeeze", provider: "Evolution", img: "/photo/JL0216.png", isFavorite: true },
    { id: 9, title: "Roulette Royale", provider: "Evolution", img: "/photo/JL0223.png", isFavorite: false },
    { id: 10, title: "Blackjack Party", provider: "Evolution", img: "/photo/JL0231.png", isFavorite: true },
    { id: 11, title: "Mega Ball Live", provider: "Evolution", img: "/photo/KA0775.png", isFavorite: false },
    { id: 12, title: "Crazy Time Live", provider: "Evolution", img: "/photo/KA0811.png", isFavorite: true },
    { id: 13, title: "Monopoly Live Show", provider: "Evolution", img: "/photo/KA0817.png", isFavorite: false },
    { id: 14, title: "Dream Catcher Live", provider: "Evolution", img: "/photo/JL-COLOR.png", isFavorite: true },
    { id: 15, title: "Gonzo's Treasure Hunt Live", provider: "Evolution", img: "/photo/JP.svg", isFavorite: false },
    { id: 16, title: "Wheel of Fortune Live", provider: "Evolution", img: "/photo/superace.png", isFavorite: true },
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
