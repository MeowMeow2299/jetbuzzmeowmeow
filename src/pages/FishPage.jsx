import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './FishPage.css';

// Generate fish games from the FISH folder
const generateFishGames = () => {
  const games = [];
  
  // AMBS series
  const ambsFish = ['AMBS0B', 'AMBS97', 'AMBS99'];
  ambsFish.forEach(name => {
    games.push({
      image: `/photo/FISH/${name}.png`,
      title: name.replace('AMBS', 'AMBS')
    });
  });
  
  // BSP series (BSP011 to BSP018)
  for (let i = 11; i <= 18; i++) {
    games.push({
      image: `/photo/FISH/BSP${i.toString().padStart(3, '0')}.png`,
      title: `BSP${i.toString().padStart(3, '0')}`
    });
  }
  
  // BT series
  const btFish = [64, 65, 66, 67, 68, 69, 70, 90, 99];
  btFish.forEach(num => {
    games.push({
      image: `/photo/FISH/BT${num.toString().padStart(4, '0')}.png`,
      title: `BT${num.toString().padStart(4, '0')}`
    });
  });
  
  // FC series
  const fcFish = [18, 19, 20, 21, 27, 53];
  fcFish.forEach(num => {
    games.push({
      image: `/photo/FISH/FC${num.toString().padStart(4, '0')}.png`,
      title: `FC${num.toString().padStart(4, '0')}`
    });
  });
  
  // FS, FTG, JDB series
  games.push(
    { image: '/photo/FISH/FS0045.png', title: 'FS0045' },
    { image: '/photo/FISH/FTG002.png', title: 'FTG002' },
    { image: '/photo/FISH/FTG088.png', title: 'FTG088' }
  );
  
  const jdbFish = [80, 81, 82, 83, 141, 152, 154, 206, 213, 234];
  jdbFish.forEach(num => {
    games.push({
      image: `/photo/FISH/JDB${num.toString().padStart(3, '0')}.png`,
      title: `JDB${num.toString().padStart(3, '0')}`
    });
  });
  
  // JK series (JK0019 to JK0109)
  const jkFish = [19, 43, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 79, 81, 82, 109];
  jkFish.forEach(num => {
    games.push({
      image: `/photo/FISH/JK${num.toString().padStart(4, '0')}.png`,
      title: `JK${num.toString().padStart(4, '0')}`
    });
  });
  
  // JL series
  const jlFish = [2, 3, 4, 5, 6, 7, 8, 9, 50, 111, 136, 183, 231];
  jlFish.forEach(num => {
    games.push({
      image: `/photo/FISH/JL${num.toString().padStart(4, '0')}.png`,
      title: `JL${num.toString().padStart(4, '0')}`
    });
  });
  
  // KA series (KA0002 to KA0817)
  const kaFish = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 380, 390, 391, 396, 397, 398, 399, 400, 401, 402, 403, 427, 428, 434, 435, 440, 446, 452, 458, 469, 470, 482, 488, 500, 512, 518, 524, 530, 536, 548, 554, 566, 572, 578, 584, 596, 602, 608, 614, 620, 632, 638, 650, 656, 662, 668, 674, 680, 686, 692, 698, 704, 705, 710, 716, 722, 727, 733, 739, 745, 751, 757, 763, 769, 775, 781, 787, 793, 799, 811, 817];
  kaFish.forEach(num => {
    games.push({
      image: `/photo/FISH/KA${num.toString().padStart(4, '0')}.png`,
      title: `KA${num.toString().padStart(4, '0')}`
    });
  });
  
  // MG series
  const mgFish = [24, 25, 458, 475, 488, 497];
  mgFish.forEach(num => {
    games.push({
      image: `/photo/FISH/MG${num.toString().padStart(4, '0')}.png`,
      title: `MG${num.toString().padStart(4, '0')}`
    });
  });
  
  // PT series
  const ptFish = [185, 400];
  ptFish.forEach(num => {
    games.push({
      image: `/photo/FISH/PT${num.toString().padStart(4, '0')}.png`,
      title: `PT${num.toString().padStart(4, '0')}`
    });
  });
  
  // SG series
  const sgFish = [128, 129, 130, 131, 179];
  sgFish.forEach(num => {
    games.push({
      image: `/photo/FISH/SG${num.toString().padStart(4, '0')}.png`,
      title: `SG${num.toString().padStart(4, '0')}`
    });
  });
  
  // VA, YL series
  games.push(
    { image: '/photo/FISH/VA0045.png', title: 'VA0045' },
    { image: '/photo/FISH/YL0010.png', title: 'YL0010' },
    { image: '/photo/FISH/YL0016.png', title: 'YL0016' },
    { image: '/photo/FISH/YL0017.png', title: 'YL0017' },
    { image: '/photo/FISH/YL0018.png', title: 'YL0018' },
    { image: '/photo/FISH/YL0019.png', title: 'YL0019' }
  );
  
  // Special fish games
  games.push(
    { image: '/photo/FISH/default.png', title: 'Default Fish' },
    { image: '/photo/FISH/JK-COLOR.png', title: 'JK Color' }
  );
  
  return games;
};

const FishPage = () => {
  const navigate = useNavigate();
  const allGames = generateFishGames();
  const [visibleCount, setVisibleCount] = useState(24); // Show 24 games initially
  const itemsPerLoad = 24; // Load 24 more games each time

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerLoad, allGames.length));
  };

  const visibleGames = allGames.slice(0, visibleCount);
  const hasMore = visibleCount < allGames.length;

  console.log('FishPage loaded with', allGames.length, 'total games, showing', visibleCount);

  return (
    <div className="fish-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="fish-header">Fish Games</h1>
      </div>
      <div className="fish-grid">
        {visibleGames.map((card, index) => (
          <div key={index} className="fish-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="fish-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="fish-title">{card.title}</div>
            <button className="free-trial-btn">FREE TRIAL</button>
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
          <p className="all-loaded-text">All {allGames.length} fish games loaded!</p>
        </div>
      )}
    </div>
  );
};

export default FishPage;