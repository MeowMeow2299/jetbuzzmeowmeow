import React, { useState } from 'react';
import './SlotsPage.css';

// Generate slots games from the SLOTS folder
const generateSlotsGames = () => {
  const games = [];
  
  // 5G series (5G0002 to 5G0043)
  for (let i = 2; i <= 43; i++) {
    if (i === 22 || i === 23 || i === 24 || i === 25 || i === 26 || i === 27 || i === 28 || i === 29 || i === 30 || i === 31 || i === 34) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/5G${i.toString().padStart(4, '0')}.png`,
      title: `5G ${i.toString().padStart(4, '0')}`
    });
  }
  
  // 759 series (759002 to 759050)
  for (let i = 2; i <= 50; i++) {
    if (i === 42 || i === 43) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/759${i.toString().padStart(3, '0')}.png`,
      title: `759 ${i.toString().padStart(3, '0')}`
    });
  }
  
  // AE series (AE0001 to AE0053)
  for (let i = 1; i <= 53; i++) {
    if (i === 6 || i === 18 || i === 42) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/AE${i.toString().padStart(4, '0')}.png`,
      title: `AE ${i.toString().padStart(4, '0')}`
    });
  }
  
  // AMBS series
  const ambsNumbers = [2, 3, 5, 6, 7, 8, 11, 16, 17, 18, 19, 20, 22, 24, 27, 30, 31, 33, 36, 37, 38, 39, 40, 93, 94, 95, 96, 98];
  ambsNumbers.forEach(num => {
    games.push({
      image: `/photo/SLOTS/AMBS${num.toString().padStart(2, '0')}.png`,
      title: `AMBS ${num.toString().padStart(2, '0')}`
    });
  });
  
  // AMBS letter series
  const ambsLetters = ['0A', '0Z', '1A', '1C', '1Z', '2A', '2C', '3A', '3C', '4A', '5A', '6A', '7A', '9A', '9E', '9F', '9G', '9H', '9I', '9J', '9K', '9N', '9O', '9P', '9Q', '9R', '9S', '9T', '9U'];
  ambsLetters.forEach(letter => {
    games.push({
      image: `/photo/SLOTS/AMBS${letter}.png`,
      title: `AMBS ${letter}`
    });
  });
  
  // AMG series (AMG002 to AMG110)
  for (let i = 2; i <= 110; i++) {
    if (i === 47 || i === 70 || i === 92 || i === 95) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/AMG${i.toString().padStart(3, '0')}.png`,
      title: `AMG ${i.toString().padStart(3, '0')}`
    });
  }
  
  // AUX series (AUX002 to AUX039)
  for (let i = 2; i <= 39; i++) {
    games.push({
      image: `/photo/SLOTS/AUX${i.toString().padStart(3, '0')}.png`,
      title: `AUX ${i.toString().padStart(3, '0')}`
    });
  }
  
  // BGA series (BGA002 to BGA116)
  for (let i = 2; i <= 116; i++) {
    if (i >= 117 && i <= 121) {
      continue; // Skip missing range
    }
    if (i >= 126 && i <= 133) {
      continue; // Skip missing range
    }
    if (i === 137 || i === 139 || i === 141 || i === 142 || i === 147 || i === 157 || i === 164) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/BGA${i.toString().padStart(3, '0')}.png`,
      title: `BGA ${i.toString().padStart(3, '0')}`
    });
  }
  
  // BNG series (BNG002 to BNG175)
  for (let i = 2; i <= 175; i++) {
    if (i === 3 || i === 5 || i === 12 || i === 14 || i === 17 || i === 20 || i === 22 || i === 24 || i === 30 || i === 31 || i === 34 || i === 37 || i === 43 || i === 44 || i === 46 || i === 48 || i === 50 || i === 52 || i === 53 || i === 58 || i === 65 || i === 69 || i === 81 || i === 91 || i === 97 || i === 99 || i === 100) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/BNG${i.toString().padStart(3, '0')}.png`,
      title: `BNG ${i.toString().padStart(3, '0')}`
    });
  }
  
  // BOM series (BOM002 to BOM049)
  for (let i = 2; i <= 49; i++) {
    if (i === 5 || i === 19 || i === 26) {
      continue; // Skip missing numbers
    }
    games.push({
      image: `/photo/SLOTS/BOM${i.toString().padStart(3, '0')}.png`,
      title: `BOM ${i.toString().padStart(3, '0')}`
    });
  }
  
  return games;
};

const SlotsPage = () => {
  const allGames = generateSlotsGames();
  const [visibleCount, setVisibleCount] = useState(24); // Show 24 games initially
  const itemsPerLoad = 24; // Load 24 more games each time

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + itemsPerLoad, allGames.length));
  };

  const visibleGames = allGames.slice(0, visibleCount);
  const hasMore = visibleCount < allGames.length;

  console.log('SlotsPage loaded with', allGames.length, 'total games, showing', visibleCount);

  return (
    <div className="slots-container">
      <h1 className="slots-header">Slots</h1>
      <div className="slots-grid">
        {visibleGames.map((card, index) => (
          <div key={index} className="slots-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="slots-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="slots-title">{card.title}</div>
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
          <p className="all-loaded-text">All {allGames.length} slot games loaded!</p>
        </div>
      )}
    </div>
  );
};

export default SlotsPage;