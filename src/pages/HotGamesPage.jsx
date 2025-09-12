import React from 'react';
import './HotGamesPage.css';

const cardData = [
  { image: '/photo/HOTGAMES/777_COINS_HOTGAMES.png', title: '777 Coins' },
  { image: '/photo/HOTGAMES/777_HOTFIRE_HOTGAMES.png', title: '777 Hotfire' },
  { image: '/photo/HOTGAMES/777CLASSICSTYLE_HOTGAMES.png', title: '777 Classic Style' },
  { image: '/photo/HOTGAMES/9WIKCLE_HOTGAMES.png', title: '9 Wikcle' },
  { image: '/photo/HOTGAMES/ALI_BALI.png', title: 'Ali Bali' },
  { image: '/photo/HOTGAMES/ALL_STAR_FISHING.png', title: 'All Star Fishing' },
  { image: '/photo/HOTGAMES/ANUBIT_WRANTH.png', title: 'Anubit Wranth' },
  { image: '/photo/HOTGAMES/AVIAOR_HOTGAMES.png', title: 'Aviator' },
  { image: '/photo/HOTGAMES/BACCARAT_HOTGAMES.png', title: 'Baccarat' },
  { image: '/photo/HOTGAMES/BNG087.png', title: 'BNG087' },
  { image: '/photo/HOTGAMES/BOXING_KING_HOTGAMES.png', title: 'Boxing King' },
  { image: '/photo/HOTGAMES/BUFFALO_HOLD_AND_RUN_HOTGAMES.png', title: 'Buffalo Hold & Run' },
  { image: '/photo/HOTGAMES/CASH_MARIA.png', title: 'Cash Maria' },
  { image: '/photo/HOTGAMES/CHARGE_BUFFALO_HOTGAMES.png', title: 'Charge Buffalo' },
  { image: '/photo/HOTGAMES/CHINESES_NEW_YEAR_HOTGAMES.png', title: 'Chinese New Year' },
  { image: '/photo/HOTGAMES/COINUP_HOTFIRE_HOTGAMES.png', title: 'Coinup Hotfire' },
  { image: '/photo/HOTGAMES/COINUP_LIGHTING_HOTGAMES.png', title: 'Coinup Lighting' },
  { image: '/photo/HOTGAMES/CRASH_CRICKET.png', title: 'Crash Cricket' },
  { image: '/photo/HOTGAMES/CREASH_GOAL.png', title: 'Crash Goal' },
  { image: '/photo/HOTGAMES/CRICKET_KING10.png', title: 'Cricket King 10' },
  { image: '/photo/HOTGAMES/DOUBLE_FORTUNE.png', title: 'Double Fortune' },
  { image: '/photo/HOTGAMES/DREAM_OF_MACAU_HOTGAMES.png', title: 'Dream of Macau' },
  { image: '/photo/HOTGAMES/EGYPT_BOOK_MYSTERY.png', title: 'Egypt Book Mystery' },
  { image: '/photo/HOTGAMES/FORTUNE_GEM_3_HOTGAMES.png', title: 'Fortune Gem 3' },
  { image: '/photo/HOTGAMES/FORTUNE_GEM_HOTGAMES.png', title: 'Fortune Gem' },
  { image: '/photo/HOTGAMES/FORTUNE_OX.png', title: 'Fortune Ox' },
  { image: '/photo/HOTGAMES/FORTUNE_RABBIT.png', title: 'Fortune Rabbit' },
  { image: '/photo/HOTGAMES/FORTUNE_TREE_HOTGAMES.png', title: 'Fortune Tree' },
  { image: '/photo/HOTGAMES/FRUIT_PARTY.png', title: 'Fruit Party' },
  { image: '/photo/HOTGAMES/FRUITY_BONANZA_HOTGAMES.png', title: 'Fruity Bonanza' },
  { image: '/photo/HOTGAMES/GANESHA_GOLD.png', title: 'Ganesha Gold' },
  { image: '/photo/HOTGAMES/GO_RUSH_HOTGAMES.png', title: 'Go Rush' },
  { image: '/photo/HOTGAMES/GOLD_BANK.png', title: 'Gold Bank' },
  { image: '/photo/HOTGAMES/GOLDEN_EMPIRE.png', title: 'Golden Empire' },
  { image: '/photo/HOTGAMES/GOLDEN_LAND_HOTGAMES.png', title: 'Golden Land' },
  { image: '/photo/HOTGAMES/HAPPY_FISHING_HOTGAMES.png', title: 'Happy Fishing' },
  { image: '/photo/HOTGAMES/HIGH_FLYER_HOTGAMES.png', title: 'High Flyer' },
  { image: '/photo/HOTGAMES/JACKPOT_FISHING_HOTGAMES.png', title: 'Jackpot Fishing' },
  { image: '/photo/HOTGAMES/JL0085.png', title: 'JL0085' },
  { image: '/photo/HOTGAMES/JL0090.png', title: 'JL0090' },
  { image: '/photo/HOTGAMES/JL0157.png', title: 'JL0157' },
  { image: '/photo/HOTGAMES/JL0171.png', title: 'JL0171' },
  { image: '/photo/HOTGAMES/LEGACY_OF_EGYPT_HOTGAMES.png', title: 'Legacy of Egypt' },
  { image: '/photo/HOTGAMES/LEPRACHAUN_RICHES.png', title: 'Leprechaun Riches' },
  { image: '/photo/HOTGAMES/LUCKY_NEK.png', title: 'Lucky Nek' },
  { image: '/photo/HOTGAMES/LUCKY7_HOTGAMES.png', title: 'Lucky 7' },
  { image: '/photo/HOTGAMES/MAGIC_ACE_WILDLOCK_HOTGAMES.png', title: 'Magic Ace Wildlock' },
  { image: '/photo/HOTGAMES/MANTHONG_WAYS.png', title: 'Manthong Ways' },
  { image: '/photo/HOTGAMES/MAYAN_EMPIRE_HOTGAMES.png', title: 'Mayan Empire' },
  { image: '/photo/HOTGAMES/MONEY_COMING_HOTGAMES.png', title: 'Money Coming' },
  { image: '/photo/HOTGAMES/NIGHT_CITY_HOTGAMES.png', title: 'Night City' },
  { image: '/photo/HOTGAMES/PHARAOH_TREASURE_HOTGAMES.png', title: 'Pharaoh Treasure' },
  { image: '/photo/HOTGAMES/PINANTA_WINS.png', title: 'Pinanta Wins' },
  { image: '/photo/HOTGAMES/SAFARI_WILDS.png', title: 'Safari Wilds' },
  { image: '/photo/HOTGAMES/SUPER_ELEMENTS_HOTGAMES.png', title: 'Super Elements' },
  { image: '/photo/HOTGAMES/SUPERACE_DELUE_HOTGAMES.png', title: 'Superace Deluxe' },
  { image: '/photo/HOTGAMES/SUPERACE_HOTGAMES.png', title: 'Superace' },
  { image: '/photo/HOTGAMES/SWEET_BONANZA_CANDYLAND_HOTGAMES.png', title: 'Sweet Bonanza Candyland' },
  { image: '/photo/HOTGAMES/THE_PIG_HOUSE_HOTGAMES.png', title: 'The Pig House' },
  { image: '/photo/HOTGAMES/TREASURE_OF_AZTEC.png', title: 'Treasure of Aztec' },
  { image: '/photo/HOTGAMES/WILD_ACE.png', title: 'Wild Ace' },
  { image: '/photo/HOTGAMES/WILD_BANDITO.png', title: 'Wild Bandito' },
  { image: '/photo/HOTGAMES/WILD_BOUNTY_SHOWDOWN.png', title: 'Wild Bounty Showdown' },
  { image: '/photo/HOTGAMES/WILDFIRE.png', title: 'Wildfire' },
  { image: '/photo/HOTGAMES/WINGS_IGUAZUA;.png', title: 'Wings Iguazua' },
  { image: '/photo/HOTGAMES/WITCHES_NIGHT.png', title: 'Witches Night' },
  { image: '/photo/HOTGAMES/1706.jpg', title: 'Game 1706' },
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
            <button className="free-trial-btn">FREE TRIAL</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotGamesPage;