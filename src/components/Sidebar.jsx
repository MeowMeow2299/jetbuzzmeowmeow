import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaHome, FaThLarge, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

const Sidebar = () => {
  const { user } = useAuth();
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
    { name: 'E-SPORT', link: '/e-sports' },
    { name: 'POPULAR GAMES', link: '/popular' },
  ];

  const subItems = [
    { name: 'BGD33', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'BETBDT', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'JEETBUZZ', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'TK999', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'CK444', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'L444 Online Game', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Login', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Bet', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'CRICKEX APP', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Online', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Account Create', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'CRICKEX BONUS', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex BD Login', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Betting App', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Crickex Bet Bangla', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Jeetbuzz Login', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Jeetbuzz Casino', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Jeetbuzz Game', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Jeetbuzz Online', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Jeetbuzz Partner', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
    { name: 'Chicken Game', link: 'https://www.betbdt.vip/register?affiliateCode=soy001' },
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
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sub-item-link"
                  >
                    {item.name}
                  </a>
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
