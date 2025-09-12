import React from "react";
import "./Fish.css";

const Fish = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Crash Game", provider: "Spribe", img: "/photo/1.png", isFavorite: false },
    { id: 2, title: "Plinko", provider: "Spribe", img: "/photo/2.png", isFavorite: true },
    { id: 3, title: "Dice", provider: "Spribe", img: "/photo/3.png", isFavorite: false },
    { id: 4, title: "Mines", provider: "Spribe", img: "/photo/4.png", isFavorite: true },
    { id: 5, title: "Hilo", provider: "Spribe", img: "/photo/5.png", isFavorite: false },
    { id: 6, title: "Limbo", provider: "Spribe", img: "/photo/6.png", isFavorite: true },
    { id: 7, title: "Keno", provider: "Spribe", img: "/photo/7.png", isFavorite: false },
    { id: 8, title: "Wheel", provider: "Spribe", img: "/photo/8.png", isFavorite: true },
    { id: 9, title: "Blackjack", provider: "Spribe", img: "/photo/9.png", isFavorite: false },
    { id: 10, title: "Baccarat", provider: "Spribe", img: "/photo/10.png", isFavorite: true },
    { id: 11, title: "Roulette", provider: "Spribe", img: "/photo/11.png", isFavorite: false },
    { id: 12, title: "Poker", provider: "Spribe", img: "/photo/12.png", isFavorite: true },
    { id: 13, title: "Lottery", provider: "Spribe", img: "/photo/banner1.jpeg", isFavorite: false },
    { id: 14, title: "Scratch Cards", provider: "Spribe", img: "/photo/banner2.jpeg", isFavorite: true },
    { id: 15, title: "Virtual Sports", provider: "Spribe", img: "/photo/banner3.jpeg", isFavorite: false },
    { id: 16, title: "Instant Win", provider: "Spribe", img: "/photo/banner4.jpeg", isFavorite: true },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>Fish</h2>
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

export default Fish;
