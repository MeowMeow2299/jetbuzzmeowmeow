import React from "react";
import "./Sports.css";

const Sports = () => {
  const handleGameClick = () => {
    window.open('https://www.betbdt.vip/register?affiliateCode=soy001', '_blank');
  };

  const items = [
    { id: 1, title: "9Wickets Sports", provider: "9Wickets", img: "/photo/9WICKETS_SPORTS.png", isFavorite: false },
    { id: 2, title: "AP Gaming Sports", provider: "AP Gaming", img: "/photo/AP_GAMING_SPORTS.png", isFavorite: true },
    { id: 3, title: "BetBDT Lucky Sports", provider: "BetBDT", img: "/photo/BETBDT_LUCKY_SPORTS.png", isFavorite: false },
    { id: 4, title: "BTI Sports", provider: "BTI", img: "/photo/BTI_SPORTS.png", isFavorite: true },
    { id: 5, title: "FB Sports", provider: "FB", img: "/photo/FB_SPORTS.png", isFavorite: false },
    { id: 6, title: "Panda Sports", provider: "Panda", img: "/photo/PANDA_SPORTS.png", isFavorite: true },
    { id: 7, title: "Poly Sports", provider: "Poly", img: "/photo/POLY_SPORTS.png", isFavorite: false },
    { id: 8, title: "RCB Horsebook Sports", provider: "RCB", img: "/photo/RCB988_HOURSEBOOK_SPORTS.png", isFavorite: true },
    { id: 9, title: "Saba Sports", provider: "Saba", img: "/photo/SABA_SPORTS.png", isFavorite: false },
    { id: 10, title: "SV388 Sports", provider: "SV388", img: "/photo/SV388_SPORTS.png", isFavorite: true },
    { id: 11, title: "United Gaming Sports", provider: "United Gaming", img: "/photo/UNITED_GAMING_SPORTS.png", isFavorite: false },
    { id: 12, title: "Sports Game 1", provider: "Sports", img: "/photo/1.png", isFavorite: true },
    { id: 13, title: "Sports Game 2", provider: "Sports", img: "/photo/2.png", isFavorite: false },
    { id: 14, title: "Sports Game 3", provider: "Sports", img: "/photo/3.png", isFavorite: true },
    { id: 15, title: "Sports Game 4", provider: "Sports", img: "/photo/4.png", isFavorite: false },
    { id: 16, title: "Sports Game 5", provider: "Sports", img: "/photo/5.png", isFavorite: true },
  ];

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h2>Sports</h2>
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

export default Sports;
