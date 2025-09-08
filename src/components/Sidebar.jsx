import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaHome, FaThLarge, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('sidebar-open', isOpen);
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  // mainItems giờ là object có name + link
  const mainItems = [
    { name: 'HOME', link: '/' },
    { name: 'CASINO GAMES', link: '/casino' },
    { name: 'SLOTS', link: '/slots' },
    { name: 'LIVE CASINO', link: '/live-casino' },
    { name: 'TABLE GAMES', link: '/table-games' },
    { name: 'LOTTERY', link: '/lottery' },
    { name: 'SPORTS', link: '/sports' },
    { name: 'GAMECHICKEN', link: '/gamechicken' },
    { name: 'E-SPORT', link: '/esport' },
    { name: 'POPULAR GAMES', link: '/popular' },
  ];

  const subItems = [
    'BGD33', 'BETBDT', 'JEETBUZZ', 'Crickex', 'TK999', 'CK444', 'L444 Online Game',
    'Crickex', 'Crickex Login', 'Crickex Bet', 'CRICKEX APP', 'Crickex Online',
    'Crickex Account Create', 'CRICKEX BONUS', 'Crickex BD Login', 'Crickex Betting App',
    'Crickex Bet Bangla', 'JEETBUZZ', 'Jeetbuzz Login', 'Jeetbuzz Casino',
    'Jeetbuzz Game', 'Jeetbuzz Online', 'Jeetbuzz Partner', 'Chicken Game',
  ];

  return (
    <>
      {/* Hamburger luôn hiển thị ngoài cùng bên trái */}
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <>
            <ul className="main-items">
              {mainItems.map((item, index) => {
                const openInNewTab = item.name === 'CASINO GAMES' || item.name === 'SLOTS' || item.name === 'LIVE CASINO' || item.name === 'LOTTERY' || item.name === 'E-SPORT';
                return (
                  <li key={index} className="main-item">
                    {openInNewTab ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    ) : (
                      <Link to={item.link}>{item.name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <ul className="sub-items">
              {subItems.map((item, index) => (
                <li key={index} className="sub-item">
                  {item === 'Chicken Game' ? (
                    <a href="/gamechicken" target="_blank" rel="noopener noreferrer">Chicken Game</a>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
