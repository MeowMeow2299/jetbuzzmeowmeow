import React from "react";
import "./Slots.css";

const Slots = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "5G Slots", provider: "5G", img: "/photo/SLOTS/5G0002.png", isFavorite: false },
    { id: 2, title: "759 Slots", provider: "759", img: "/photo/SLOTS/759002.png", isFavorite: true },
    { id: 3, title: "AE Slots", provider: "AE", img: "/photo/SLOTS/AE0001.png", isFavorite: false },
    { id: 4, title: "AMBS Slots", provider: "AMBS", img: "/photo/SLOTS/AMBS02.png", isFavorite: true },
    { id: 5, title: "AMG Slots", provider: "AMG", img: "/photo/SLOTS/AMG002.png", isFavorite: false },
    { id: 6, title: "AUX Slots", provider: "AUX", img: "/photo/SLOTS/AUX002.png", isFavorite: true },
    { id: 7, title: "BGA Slots", provider: "BGA", img: "/photo/SLOTS/BGA002.png", isFavorite: false },
    { id: 8, title: "BNG Slots", provider: "BNG", img: "/photo/SLOTS/BNG002.png", isFavorite: true },
    { id: 9, title: "BOM Slots", provider: "BOM", img: "/photo/SLOTS/BOM002.png", isFavorite: false },
    { id: 10, title: "More 5G Games", provider: "5G", img: "/photo/SLOTS/5G0003.png", isFavorite: true },
    { id: 11, title: "More 759 Games", provider: "759", img: "/photo/SLOTS/759003.png", isFavorite: false },
    { id: 12, title: "More AE Games", provider: "AE", img: "/photo/SLOTS/AE0002.png", isFavorite: true },
    { id: 13, title: "More AMBS Games", provider: "AMBS", img: "/photo/SLOTS/AMBS03.png", isFavorite: false },
    { id: 14, title: "More AMG Games", provider: "AMG", img: "/photo/SLOTS/AMG003.png", isFavorite: true },
    { id: 15, title: "More AUX Games", provider: "AUX", img: "/photo/SLOTS/AUX003.png", isFavorite: false },
    { id: 16, title: "More BGA Games", provider: "BGA", img: "/photo/SLOTS/BGA003.png", isFavorite: true },
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

export default Slots;
