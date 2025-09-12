import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PokerGamesPage.css';

// Generate poker games from the POCKER folder
const generatePokerGames = () => {
  const games = [];
  
  // BSP series (BSP019 to BSP054)
  for (let i = 19; i <= 54; i++) {
    games.push({
      image: `/photo/POCKER/BSP${i.toString().padStart(3, '0')}.png`,
      title: `BSP${i.toString().padStart(3, '0')}`
    });
  }
  
  // JL series (JL0075 to JL0216)
  const jlPoker = [75, 76, 77, 78, 79, 80, 81, 82, 91, 92, 120, 121, 129, 133, 135, 141, 188, 216];
  jlPoker.forEach(num => {
    games.push({
      image: `/photo/POCKER/JL${num.toString().padStart(4, '0')}.png`,
      title: `JL${num.toString().padStart(4, '0')}`
    });
  });
  
  // KM series (KM0001 to KM0091)
  const kmPoker = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 57, 68, 70, 71, 72, 79, 91];
  kmPoker.forEach(num => {
    games.push({
      image: `/photo/POCKER/KM${num.toString().padStart(4, '0')}.png`,
      title: `KM${num.toString().padStart(4, '0')}`
    });
  });
  
  // KP series (KP0001 to KP0011)
  for (let i = 1; i <= 11; i++) {
    games.push({
      image: `/photo/POCKER/KP${i.toString().padStart(4, '0')}.png`,
      title: `KP${i.toString().padStart(4, '0')}`
    });
  }
  
  // Image series (image.png to image15.png)
  for (let i = 1; i <= 15; i++) {
    const imageName = i === 1 ? 'image.png' : `image${i}.png`;
    games.push({
      image: `/photo/POCKER/${imageName}`,
      title: `Poker ${i}`
    });
  }
  
  // Special images
  games.push(
    { image: '/photo/POCKER/info-img.e89e245e.png', title: 'Info Poker' },
    { image: '/photo/POCKER/1706.jpg', title: 'Poker 1706' },
    { image: '/photo/POCKER/2105.jpg', title: 'Poker 2105' }
  );
  
  // Color logos (provider logos)
  const colorLogos = [
    '5G-COLOR', '759-COLOR', 'AE-COLOR', 'AMBS-COLOR', 'AMG-COLOR', 'AUX-COLOR',
    'BGA-COLOR', 'BNG-COLOR', 'BOM-COLOR', 'BSP-COLOR', 'BT-COLOR', 'BTG-COLOR',
    'BTI-COLOR', 'CG-COLOR', 'EG4-COLOR', 'EP-COLOR', 'EZ-COLOR', 'EZG-COLOR',
    'FB-COLOR', 'FC-COLOR', 'FP-COLOR', 'FS-COLOR', 'FTG-COLOR', 'GM-COLOR',
    'GPI-COLOR', 'HS-COLOR', 'IA-COLOR', 'JDB-COLOR', 'JK-COLOR', 'JL-COLOR',
    'KA-COLOR', 'KM-COLOR', 'KP-COLOR', 'L22-COLOR', 'LUC-COLOR', 'MA-COLOR',
    'MAHA-COLOR', 'MAS-COLOR', 'MG-COLOR', 'MNP-COLOR', 'NE-COLOR', 'NG-COLOR',
    'NLC-COLOR', 'NS-COLOR', 'OBS-COLOR', 'OBSB-COLOR', 'OCT-COLOR', 'PAS-COLOR',
    'PG-COLOR', 'PIN-COLOR', 'POLY-COLOR', 'PP-COLOR', 'PS-COLOR', 'PT-COLOR',
    'RCB-COLOR', 'RLX-COLOR', 'RT-COLOR', 'SA-COLOR', 'SB-COLOR', 'SEX-COLOR',
    'SG-COLOR', 'SPB-COLOR', 'SS-COLOR', 'SV3-COLOR', 'TCG_SEA-COLOR', 'TF-COLOR',
    'TPG-COLOR', 'U9W-COLOR', 'UG2-COLOR', 'VA-COLOR', 'VIA-COLOR', 'WD-COLOR',
    'YB-COLOR', 'YGD-COLOR', 'YL-COLOR'
  ];
  
  colorLogos.forEach(logo => {
    games.push({
      image: `/photo/POCKER/${logo}.png`,
      title: `${logo.replace('-COLOR', '')}`
    });
  });
  
  // SVG icons
  const svgIcons = [
    'BD', 'US', 'vector', 'vector2', 'vector3', 'vector4', 'vector5',
    'vector6', 'vector7', 'vector8', 'vector9', 'vector10', 'vector11',
    'vector12', 'vector13', 'vector14', 'vector15', 'vector16'
  ];
  
  svgIcons.forEach(icon => {
    games.push({
      image: `/photo/POCKER/${icon}.svg`,
      title: `${icon.toUpperCase()}`
    });
  });
  
  return games;
};

const PokerGamesPage = () => {
  const navigate = useNavigate();
  const allGames = generatePokerGames();
  const [visibleCount, setVisibleCount] = useState(24); // Show 24 games initially
  const itemsPerLoad = 24; // Load 24 more games each time

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerLoad, allGames.length));
  };

  const visibleGames = allGames.slice(0, visibleCount);
  const hasMore = visibleCount < allGames.length;

  console.log('PokerGamesPage loaded with', allGames.length, 'total games, showing', visibleCount);

  return (
    <div className="poker-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="poker-header">Poker Games</h1>
      </div>
      <div className="poker-grid">
        {visibleGames.map((card, index) => (
          <div key={index} className="poker-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="poker-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="poker-title">{card.title}</div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More ({allGames.length - visibleCount} remaining)
          </button>
        </div>
      )}
      
      {!hasMore && (
        <div className="all-loaded-container">
          <p className="all-loaded-text">All {allGames.length} poker games loaded!</p>
        </div>
      )}
    </div>
  );
};

export default PokerGamesPage;