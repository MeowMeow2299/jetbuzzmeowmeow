import React from "react";
import "./Fish.css";

const Fish = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "BSP Fish Game", provider: "BSP", img: "/photo/FISH/BSP011.png", isFavorite: false },
    { id: 2, title: "BT Fish Game", provider: "BT", img: "/photo/FISH/BT0064.png", isFavorite: true },
    { id: 3, title: "FC Fish Game", provider: "FC", img: "/photo/FISH/FC0018.png", isFavorite: false },
    { id: 4, title: "FTG Fish Game", provider: "FTG", img: "/photo/FISH/FTG002.png", isFavorite: true },
    { id: 5, title: "JDB Fish Game", provider: "JDB", img: "/photo/FISH/JDB080.png", isFavorite: false },
    { id: 6, title: "JK Fish Game", provider: "JK", img: "/photo/FISH/JK0019.png", isFavorite: true },
    { id: 7, title: "JL Fish Game", provider: "JL", img: "/photo/FISH/JL0002.png", isFavorite: false },
    { id: 8, title: "KA Fish Game", provider: "KA", img: "/photo/FISH/KA0002.png", isFavorite: true },
    { id: 9, title: "MG Fish Game", provider: "MG", img: "/photo/FISH/MG0024.png", isFavorite: false },
    { id: 10, title: "PT Fish Game", provider: "PT", img: "/photo/FISH/PT0185.png", isFavorite: true },
    { id: 11, title: "SG Fish Game", provider: "SG", img: "/photo/FISH/SG0128.png", isFavorite: false },
    { id: 12, title: "VA Fish Game", provider: "VA", img: "/photo/FISH/VA0045.png", isFavorite: true },
    { id: 13, title: "YL Fish Game", provider: "YL", img: "/photo/FISH/YL0010.png", isFavorite: false },
    { id: 14, title: "More BSP Games", provider: "BSP", img: "/photo/FISH/BSP012.png", isFavorite: true },
    { id: 15, title: "More BT Games", provider: "BT", img: "/photo/FISH/BT0065.png", isFavorite: false },
    { id: 16, title: "More FC Games", provider: "FC", img: "/photo/FISH/FC0019.png", isFavorite: true },
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
