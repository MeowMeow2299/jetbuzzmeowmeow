import React from "react";
import "./Slots.css";

const Slots = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Blackjack Classic", provider: "Evolution", img: "/photo/JL0111.png", isFavorite: false },
    { id: 2, title: "Roulette European", provider: "Evolution", img: "/photo/JL0116.png", isFavorite: true },
    { id: 3, title: "Baccarat Live", provider: "Evolution", img: "/photo/JL0125.png", isFavorite: false },
    { id: 4, title: "Poker Texas Hold'em", provider: "Pragmatic Play", img: "/photo/JL0136.png", isFavorite: true },
    { id: 5, title: "Dragon Tiger", provider: "Evolution", img: "/photo/JL0148.png", isFavorite: false },
    { id: 6, title: "Sic Bo Live", provider: "Evolution", img: "/photo/JL0156.png", isFavorite: true },
    { id: 7, title: "Crazy Time", provider: "Evolution", img: "/photo/JL0162.png", isFavorite: false },
    { id: 8, title: "Monopoly Live", provider: "Evolution", img: "/photo/JL0166.png", isFavorite: true },
    { id: 9, title: "Lightning Roulette", provider: "Evolution", img: "/photo/JL0167.png", isFavorite: false },
    { id: 10, title: "Dream Catcher", provider: "Evolution", img: "/photo/JL0170.png", isFavorite: true },
    { id: 11, title: "Gonzo's Treasure Hunt", provider: "Evolution", img: "/photo/JL0171.png", isFavorite: false },
    { id: 12, title: "Mega Ball", provider: "Evolution", img: "/photo/JL0181.png", isFavorite: true },
    { id: 13, title: "Wheel of Fortune", provider: "Evolution", img: "/photo/JL0182.png", isFavorite: false },
    { id: 14, title: "Deal or No Deal", provider: "Evolution", img: "/photo/JL0183.png", isFavorite: true },
    { id: 15, title: "Crazy Coin Flip", provider: "Evolution", img: "/photo/JL0184.png", isFavorite: false },
    { id: 16, title: "Cash or Crash", provider: "Evolution", img: "/photo/JL0185.png", isFavorite: true },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>Slots</h2>
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
                <div className="hover-overlay">
                  <button className="play-btn" onClick={(e) => e.stopPropagation()}>
                  </button>
                  <button className="free-trial-btn" onClick={(e) => e.stopPropagation()}>
                    FREE TRIAL
                  </button>
                </div>
                <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>
                  <span className={`heart-icon ${item.isFavorite ? 'favorited' : ''}`}>♥</span>
                </button>
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

export default Slots;
