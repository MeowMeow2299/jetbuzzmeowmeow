import React from 'react';
import './Dom.css';

const menuItems = [
  { iconClass: 'fa fa-home', label: 'Home' },
  { iconClass: 'fa fa-fire', label: 'Hot Games' },
  { iconClass: 'fa fa-heart', label: 'Favourite' },
  { iconClass: 'fa fa-dice', label: 'Slot' },
  { iconClass: 'fa fa-broadcast-tower', label: 'Live' },
  { iconClass: 'fa fa-clone', label: 'Poker' },
  { iconClass: 'fa fa-trophy', label: 'Sports' },
  { iconClass: 'fa fa-money-bill', label: 'Lottery' },
  { iconClass: 'fa fa-gamepad', label: 'E-sports' },
];

const Dom = () => {
  return (
    <div className="dom-menu">
      {menuItems.map((item, index) => (
        <div key={index} className="dom-item">
          <i className={`dom-icon ${item.iconClass}`} aria-hidden="true"></i>
          <div className="dom-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Dom;

