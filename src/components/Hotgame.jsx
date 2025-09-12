import React from "react";
import "./Hotgame.css";

const Hotgame = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "Super Ace", provider: "Jili", img: "/photo/HOTGAMES/SUPERACE_HOTGAMES.png", isFavorite: false, isHot: true },
    { id: 2, title: "Boxing King", provider: "Jili", img: "/photo/HOTGAMES/BOXING_KING_HOTGAMES.png", isFavorite: true, isHot: true },
    { id: 3, title: "Fortune Gems", provider: "Jili", img: "/photo/HOTGAMES/FORTUNE_GEM_HOTGAMES.png", isFavorite: false, isHot: true },
    { id: 4, title: "Money Coming", provider: "Jili", img: "/photo/HOTGAMES/MONEY_COMING_HOTGAMES.png", isFavorite: true, isHot: true },
    { id: 5, title: "Fortune Gems 3", provider: "Jili", img: "/photo/HOTGAMES/FORTUNE_GEM_3_HOTGAMES.png", isFavorite: false, isHot: true },
    { id: 6, title: "Super Ace Deluxe", provider: "Jili", img: "/photo/HOTGAMES/SUPERACE_DELUE_HOTGAMES.png", isFavorite: true, isHot: true },
    { id: 7, title: "Safari Wilds", provider: "Jili", img: "/photo/HOTGAMES/SAFARI_WILDS.png", isFavorite: false, isHot: false },
    { id: 8, title: "Buffalo Hold and Run", provider: "Jili", img: "/photo/HOTGAMES/BUFFALO_HOLD_AND_RUN_HOTGAMES.png", isFavorite: true, isHot: false },
    { id: 9, title: "Charge Buffalo", provider: "Jili", img: "/photo/HOTGAMES/CHARGE_BUFFALO_HOTGAMES.png", isFavorite: false, isHot: false },
    { id: 10, title: "777 Coins", provider: "Jili", img: "/photo/HOTGAMES/777_COINS_HOTGAMES.png", isFavorite: true, isHot: false },
    { id: 11, title: "Wild Ace", provider: "Jili", img: "/photo/HOTGAMES/WILD_ACE.png", isFavorite: false, isHot: false },
    { id: 12, title: "Gold Bank", provider: "Jili", img: "/photo/HOTGAMES/GOLD_BANK.png", isFavorite: true, isHot: false },
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
