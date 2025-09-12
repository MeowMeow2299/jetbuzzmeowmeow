import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dom.css';

const menuItems = [
  { iconClass: 'fa fa-home', label: 'Home', link: '/' },
  { iconClass: 'fa fa-fire', label: 'Hot Games', link: '/hot-games' },
  { iconClass: 'fa fa-heart', label: 'Favorites', link: '/favorites' },
  { iconClass: 'fa fa-dice', label: 'Slots', link: '/slots-games' },
  { iconClass: 'fa fa-fish', label: 'Fish', link: '/fish-games' },
  { iconClass: 'fa fa-broadcast-tower', label: 'Live', link: '/live-games' },
  { iconClass: 'fa fa-clone', label: 'Poker Games', link: '/poker-games' },
  { iconClass: 'fa fa-trophy', label: 'Sports', link: '/sports-games' },
  { iconClass: 'fa fa-money-bill', label: 'Lottery', link: '/lottery' },
  { iconClass: 'fa fa-gamepad', label: 'E-Sports', link: '/esports' },
];

const Dom = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Thực hiện tìm kiếm game
      console.log('Searching for:', searchValue);
      // Có thể thêm logic tìm kiếm game ở đây
    }
  };

  return (
    <div className="dom-menu">
      {menuItems.map((item, index) => (
        <Link key={index} to={item.link} className="dom-item-link">
          <div className="dom-item">
            <i className={`dom-icon ${item.iconClass}`} aria-hidden="true"></i>
            <div className="dom-label">{item.label}</div>
          </div>
        </Link>
      ))}
      
      {/* Thanh tìm kiếm */}
      <div className="search-container">
        <div className="search-icon" onClick={handleSearchClick}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        
        {showSearchInput && (
          <div className="search-input-overlay">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Tìm kiếm game..."
                value={searchValue}
                onChange={handleSearchChange}
                className="search-input"
                autoFocus
              />
              <button type="submit" className="search-submit-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dom;

