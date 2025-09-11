import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaHome, FaThLarge, FaHeart, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

const Sidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  useEffect(() => {
    document.body.classList.toggle('sidebar-open', isOpen);
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  // mainItems với đầy đủ các mục theo yêu cầu
  const mainItems = [
    { name: 'Home', link: '/', isInternal: true },
    { name: 'Casino Games', link: '/casino', isInternal: true },
    { name: 'Slots', link: '/slots', isInternal: true },
    { name: 'Popular', link: '/popular', isInternal: true },
    { name: 'New', link: '/new', isInternal: true },
    { name: 'High RTP', link: '/high-rtp', isInternal: true },
    { name: 'Jackpot', link: '/jackpot', isInternal: true },
    { name: 'Live Casino', link: '/live-casino', isInternal: true },
    { 
      name: 'Live Card Games', 
      link: '/live-card-games', 
      isInternal: true, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blackjack', link: '/live-blackjack', isInternal: true },
        { name: 'Baccarat', link: '/live-baccarat', isInternal: true },
        { name: 'Poker', link: '/live-poker', isInternal: true },
        { name: 'Dragon Tiger', link: '/live-dragon-tiger', isInternal: true },
        { name: 'Teen Patti', link: '/live-teen-patti', isInternal: true }
      ]
    },
    { name: 'Live Roulette', link: '/live-roulette', isInternal: true },
    { 
      name: 'Live Game Shows', 
      link: '/live-game-shows', 
      isInternal: true, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Crazy Time', link: '/crazy-time', isInternal: true },
        { name: 'Monopoly Live', link: '/monopoly-live', isInternal: true },
        { name: 'Dream Catcher', link: '/dream-catcher', isInternal: true }
      ]
    },
    { 
      name: 'Live Dice Games', 
      link: '/live-dice-games', 
      isInternal: true, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Sic Bo', link: '/live-sic-bo', isInternal: true },
        { name: 'Craps', link: '/live-craps', isInternal: true },
        { name: 'Fan Tan', link: '/live-fan-tan', isInternal: true },
        { name: 'Bingo', link: '/live-bingo', isInternal: true }
      ]
    },
    { name: 'Table Games', link: '/table-games', isInternal: true },
    { name: 'RNG Blackjack', link: '/rng-blackjack', isInternal: true },
    { name: 'Andar Bahar', link: '/andar-bahar', isInternal: true },
    { name: 'Teen Patti', link: '/teen-patti', isInternal: true },
    { name: 'Poker Variants', link: '/poker-variants', isInternal: true },
    { 
      name: 'Dice Games', 
      link: '/dice-games', 
      isInternal: true, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Craps', link: '/craps', isInternal: true },
        { name: 'Sic Bo', link: '/sic-bo', isInternal: true },
        { name: 'Jhandi Munda', link: '/jhandi-munda', isInternal: true }
      ]
    },
    { name: 'Lottery', link: '/lottery', isInternal: true },
    { name: 'Keno', link: '/keno', isInternal: true },
    { name: 'Bingo', link: '/bingo', isInternal: true },
    { name: 'Lotto', link: '/lotto', isInternal: true },
    { name: 'Lucky Numbers', link: '/lucky-numbers', isInternal: true },
    { name: 'Scratch Cards', link: '/scratch-cards', isInternal: true },
    { name: 'Spin the Wheel', link: '/spin-the-wheel', isInternal: true },
    { name: 'Sports', link: '/sports', isInternal: true },
    { name: 'Live Sports Betting', link: '/live-sports-betting', isInternal: true },
    { 
      name: 'Virtual Sports', 
      link: '/virtual-sports', 
      isInternal: true, 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Football', link: '/virtual-football', isInternal: true },
        { name: 'Cricket', link: '/virtual-cricket', isInternal: true },
        { name: 'Racing', link: '/virtual-racing', isInternal: true },
        { name: 'Tennis', link: '/virtual-tennis', isInternal: true }
      ]
    },
    { name: 'Gamechicken', link: '/gamechicken', isInternal: true },
  ];

  const subItems = [
    { name: 'BGD33', link: '/bgd33', isInternal: true },
    { name: 'BETBDT', link: '/betbdt', isInternal: true },
    { name: 'JEETBUZZ', link: '/jeetbuzz', isInternal: true },
    { name: 'Crickex', link: '/crickex', isInternal: true },
    { name: 'TK999', link: '/tk999', isInternal: true },
    { name: 'CK444', link: '/ck444', isInternal: true },
    { name: 'L444 Online Game', link: '/l444', isInternal: true },
    { name: 'Crickex Login', link: '/crickex-login', isInternal: true },
    { name: 'Crickex Bet', link: '/crickex-bet', isInternal: true },
    { name: 'CRICKEX APP', link: '/crickex-app', isInternal: true },
    { name: 'Crickex Online', link: '/crickex-online', isInternal: true },
    { name: 'Crickex Account Create', link: '/crickex-account-create', isInternal: true },
    { name: 'CRICKEX BONUS', link: '/crickex-bonus', isInternal: true },
    { name: 'Crickex BD Login', link: '/crickex-bd-login', isInternal: true },
    { name: 'Crickex Betting App', link: '/crickex-betting-app', isInternal: true },
    { name: 'Crickex Bet Bangla', link: '/crickex-bet-bangla', isInternal: true },
    { name: 'Jeetbuzz Login', link: '/jeetbuzz-login', isInternal: true },
    { name: 'Jeetbuzz Casino', link: '/jeetbuzz-casino', isInternal: true },
    { name: 'Jeetbuzz Game', link: '/jeetbuzz-game', isInternal: true },
    { name: 'Jeetbuzz Online', link: '/jeetbuzz-online', isInternal: true },
    { name: 'Jeetbuzz Partner', link: '/jeetbuzz-partner', isInternal: true },
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
                return (
                  <li key={index} className={`main-item ${item.hasDropdown ? 'has-dropdown' : ''}`}>
                    {item.hasDropdown ? (
                      <div className="dropdown-container">
                        <div 
                          className="dropdown-trigger"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown className={`dropdown-icon ${activeDropdown === item.name ? 'rotated' : ''}`} />
                        </div>
                        {activeDropdown === item.name && (
                          <ul className="dropdown-menu">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex} className="dropdown-item">
                                {dropdownItem.isInternal ? (
                                  <Link 
                                    to={dropdownItem.link} 
                                    onClick={handleLinkClick}
                                    className="dropdown-link"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ) : (
                                  <a 
                                    href={dropdownItem.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="dropdown-link"
                                  >
                                    {dropdownItem.name}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <>
                        {item.isInternal ? (
                          <Link to={item.link} onClick={handleLinkClick}>{item.name}</Link>
                        ) : (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>{item.name}</a>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>

            <ul className="sub-items">
              {subItems.map((item, index) => (
                <li key={index} className="sub-item">
                  {item.isInternal ? (
                    <Link to={item.link} className="sub-item-link" onClick={handleLinkClick}>
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="sub-item-link"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </a>
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
