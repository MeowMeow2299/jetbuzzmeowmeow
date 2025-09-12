import React from 'react';
import './HotGamesPage.css';

const cardData = [
  { image: '/photo/HOTGAMES/777_COINS_HOTGAMES.png', title: '777 Coins' },
  { image: '/photo/HOTGAMES/777_HOTFIRE_HOTGAMES.png', title: '777 Hotfire' },
  { image: '/photo/HOTGAMES/777CLASSICSTYLE_HOTGAMES.png', title: '777 Classic Style' },
  { image: '/photo/HOTGAMES/9WIKCLE_HOTGAMES.png', title: '9 Wikcle' },
  { image: '/photo/HOTGAMES/AVIAOR_HOTGAMES.png', title: 'Aviator' },
  { image: '/photo/HOTGAMES/BACCARAT_HOTGAMES.png', title: 'Baccarat' },
  { image: '/photo/HOTGAMES/BOXING_KING_HOTGAMES.png', title: 'Boxing King' },
  { image: '/photo/HOTGAMES/BUFFALO_HOLD_AND_RUN_HOTGAMES.png', title: 'Buffalo Hold & Run' },
  { image: '/photo/HOTGAMES/CHARGE_BUFFALO_HOTGAMES.png', title: 'Charge Buffalo' },
  { image: '/photo/HOTGAMES/CHINESES_NEW_YEAR_HOTGAMES.png', title: 'Chinese New Year' },
  { image: '/photo/HOTGAMES/COINUP_HOTFIRE_HOTGAMES.png', title: 'Coinup Hotfire' },
  { image: '/photo/HOTGAMES/COINUP_LIGHTING_HOTGAMES.png', title: 'Coinup Lighting' },
  { image: '/photo/HOTGAMES/DREAM_OF_MACAU_HOTGAMES.png', title: 'Dream of Macau' },
  { image: '/photo/HOTGAMES/FORTUNE_GEM_3_HOTGAMES.png', title: 'Fortune Gem 3' },
  { image: '/photo/HOTGAMES/FORTUNE_GEM_HOTGAMES.png', title: 'Fortune Gem' },
  { image: '/photo/HOTGAMES/FORTUNE_TREE_HOTGAMES.png', title: 'Fortune Tree' },
  { image: '/photo/HOTGAMES/FRUITY_BONANZA_HOTGAMES.png', title: 'Fruity Bonanza' },
  { image: '/photo/HOTGAMES/GOLDEN_LAND_HOTGAMES.png', title: 'Golden Land' },
  { image: '/photo/HOTGAMES/HAPPY_FISHING_HOTGAMES.png', title: 'Happy Fishing' },
  { image: '/photo/HOTGAMES/HIGH_FLYER_HOTGAMES.png', title: 'High Flyer' },
  { image: '/photo/HOTGAMES/JACKPOT_FISHING_HOTGAMES.png', title: 'Jackpot Fishing' },
  { image: '/photo/HOTGAMES/LEGACY_OF_EGYPT_HOTGAMES.png', title: 'Legacy of Egypt' },
  { image: '/photo/HOTGAMES/LUCKY7_HOTGAMES.png', title: 'Lucky 7' },
  { image: '/photo/HOTGAMES/MAGIC_ACE_WILDLOCK_HOTGAMES.png', title: 'Magic Ace Wildlock' },
  { image: '/photo/HOTGAMES/MAYAN_EMPIRE_HOTGAMES.png', title: 'Mayan Empire' },
  { image: '/photo/HOTGAMES/MONEY_COMING_HOTGAMES.png', title: 'Money Coming' },
  { image: '/photo/HOTGAMES/NIGHT_CITY_HOTGAMES.png', title: 'Night City' },
  { image: '/photo/HOTGAMES/PHARAOH_TREASURE_HOTGAMES.png', title: 'Pharaoh Treasure' },
  { image: '/photo/HOTGAMES/SUPER_ELEMENTS_HOTGAMES.png', title: 'Super Elements' },
  { image: '/photo/HOTGAMES/SUPERACE_DELUE_HOTGAMES.png', title: 'Superace Deluxe' },
  { image: '/photo/HOTGAMES/SUPERACE_HOTGAMES.png', title: 'Superace' },
  { image: '/photo/HOTGAMES/SWEET_BONANZA_CANDYLAND_HOTGAMES.png', title: 'Sweet Bonanza Candyland' },
  { image: '/photo/HOTGAMES/THE_PIG_HOUSE_HOTGAMES.png', title: 'The Pig House' },
  { image: '/photo/HOTGAMES/TREASURE_OF_AZTEC.png', title: 'Treasure of Aztec' },
  // Additional games from the folder
  { image: '/photo/HOTGAMES/1706.jpg', title: 'Game 1706' },
  { image: '/photo/HOTGAMES/BNG087.png', title: 'BNG087' },
  { image: '/photo/HOTGAMES/EG4147.png', title: 'EG4147' },
  { image: '/photo/HOTGAMES/EG41472.png', title: 'EG41472' },
  { image: '/photo/HOTGAMES/EG4326.png', title: 'EG4326' },
  { image: '/photo/HOTGAMES/EG43262.png', title: 'EG43262' },
  { image: '/photo/HOTGAMES/JL0029.png', title: 'JL0029' },
  { image: '/photo/HOTGAMES/JL0044.png', title: 'JL0044' },
  { image: '/photo/HOTGAMES/JL0050.png', title: 'JL0050' },
  { image: '/photo/HOTGAMES/JL0085.png', title: 'JL0085' },
  { image: '/photo/HOTGAMES/JL0090.png', title: 'JL0090' },
  { image: '/photo/HOTGAMES/JL0094.png', title: 'JL0094' },
  { image: '/photo/HOTGAMES/JL0108.png', title: 'JL0108' },
  { image: '/photo/HOTGAMES/JL0116.png', title: 'JL0116' },
  { image: '/photo/HOTGAMES/JL0126.png', title: 'JL0126' },
  { image: '/photo/HOTGAMES/JL0147.png', title: 'JL0147' },
  { image: '/photo/HOTGAMES/JL0157.png', title: 'JL0157' },
  { image: '/photo/HOTGAMES/JL0163.png', title: 'JL0163' },
  { image: '/photo/HOTGAMES/JL0170.png', title: 'JL0170' },
  { image: '/photo/HOTGAMES/JL0171.png', title: 'JL0171' },
  { image: '/photo/HOTGAMES/MG-COLOR.png', title: 'MG Color' },
  { image: '/photo/HOTGAMES/MG0416.png', title: 'MG0416' },
  { image: '/photo/HOTGAMES/MNP-COLOR.png', title: 'MNP Color' },
  { image: '/photo/HOTGAMES/NE-COLOR.png', title: 'NE Color' },
  { image: '/photo/HOTGAMES/NG-COLOR.png', title: 'NG Color' },
  { image: '/photo/HOTGAMES/NLC-COLOR.png', title: 'NLC Color' },
  { image: '/photo/HOTGAMES/NS-COLOR.png', title: 'NS Color' },
  { image: '/photo/HOTGAMES/OBS-COLOR.png', title: 'OBS Color' },
  { image: '/photo/HOTGAMES/OBSB-COLOR.png', title: 'OBSB Color' },
  { image: '/photo/HOTGAMES/OCT-COLOR.png', title: 'OCT Color' },
  { image: '/photo/HOTGAMES/PAS-COLOR.png', title: 'PAS Color' },
  { image: '/photo/HOTGAMES/PG0031.png', title: 'PG0031' },
  { image: '/photo/HOTGAMES/PG0035.png', title: 'PG0035' },
  { image: '/photo/HOTGAMES/PG0041.png', title: 'PG0041' },
  { image: '/photo/HOTGAMES/PG0046.png', title: 'PG0046' },
  { image: '/photo/HOTGAMES/PG0056.png', title: 'PG0056' },
  { image: '/photo/HOTGAMES/PG0073.png', title: 'PG0073' },
  { image: '/photo/HOTGAMES/PG0078.png', title: 'PG0078' },
  { image: '/photo/HOTGAMES/PG0083.png', title: 'PG0083' },
  { image: '/photo/HOTGAMES/PG0113.png', title: 'PG0113' },
  { image: '/photo/HOTGAMES/PG0120.png', title: 'PG0120' },
  { image: '/photo/HOTGAMES/PG0130.png', title: 'PG0130' },
  { image: '/photo/HOTGAMES/PG0142.png', title: 'PG0142' },
  { image: '/photo/HOTGAMES/PG0144.png', title: 'PG0144' },
  { image: '/photo/HOTGAMES/PG0146.png', title: 'PG0146' },
  { image: '/photo/HOTGAMES/PG0152.png', title: 'PG0152' },
  { image: '/photo/HOTGAMES/PP0139.png', title: 'PP0139' },
  { image: '/photo/HOTGAMES/PP0179.png', title: 'PP0179' },
];

const HotGamesPage = () => {
  console.log('HotGamesPage loaded with', cardData.length, 'cards');

  return (
    <div className="hotgames-container">
      <h1 className="hotgames-header">Hot Games</h1>
      <div className="hotgames-grid">
        {cardData.map((card, index) => (
          <div key={index} className="hotgames-card">
            <img
              src={card.image || '/photo/logo.png'}
              alt={card.title}
              className="hotgames-image"
              onError={(e) => {
                e.target.src = '/photo/logo.png';
              }}
            />
            <div className="hotgames-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotGamesPage;