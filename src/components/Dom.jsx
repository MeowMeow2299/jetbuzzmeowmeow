import React, { useState } from 'react';
import './Dom.css';

const menuItems = [
  { iconClass: 'fa fa-home', label: 'Home' },
  { iconClass: 'fa fa-fire', label: 'Hot Games' },
  { iconClass: 'fa fa-heart', label: 'Favorites' },
  { iconClass: 'fa fa-dice', label: 'Slots' },
  { iconClass: 'fa fa-fish', label: 'Fish' },
  { iconClass: 'fa fa-broadcast-tower', label: 'Live' },
  { iconClass: 'fa fa-clone', label: 'Poker Games' },
  { iconClass: 'fa fa-trophy', label: 'Sports' },
  { iconClass: 'fa fa-money-bill', label: 'Lottery' },
  { iconClass: 'fa fa-gamepad', label: 'E-Sports' },
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
        <div key={index} className="dom-item">
          <i className={`dom-icon ${item.iconClass}`} aria-hidden="true"></i>
          <div className="dom-label">{item.label}</div>
        </div>
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

