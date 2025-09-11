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
    { name: 'HOME', link: '/', isInternal: true },
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
    { name: 'Contact', link: '/contact', isInternal: true },
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
      {/* Hamburger button với màu pastel */}
      <button
        className={`btn btn-circle fixed top-4 left-4 z-50 shadow-lg bg-pastel-yellow hover:bg-pastel-yellow-light text-japanese-yellow-dark border-pastel-yellow-dark ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className={`drawer-side ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="min-h-full w-64 bg-gradient-to-b from-pastel-yellow to-pastel-mint shadow-xl border-r-2 border-pastel-yellow-dark">
          <div className="p-4">
            <ul className="menu menu-vertical w-full text-base-content">
              {mainItems.map((item, index) => {
                return (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <details className="group">
                        <summary className="group-open:bg-pastel-yellow-light group-open:text-japanese-yellow-dark text-japanese-yellow-dark font-bold uppercase">
                          <span>{item.name}</span>
                          <FaChevronDown className="ml-auto transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="bg-pastel-yellow-light rounded-box shadow-lg">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              {dropdownItem.isInternal ? (
                                <Link 
                                  to={dropdownItem.link} 
                                  onClick={handleLinkClick}
                                  className="hover:bg-pastel-yellow hover:text-japanese-yellow-dark"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ) : (
                                <a 
                                  href={dropdownItem.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  onClick={handleLinkClick}
                                  className="hover:bg-pastel-yellow hover:text-japanese-yellow-dark"
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <>
                        {item.isInternal ? (
                          <Link 
                            to={item.link} 
                            onClick={handleLinkClick}
                            className="text-japanese-yellow-dark font-bold uppercase no-underline hover:no-underline hover:bg-pastel-yellow hover:text-japanese-yellow-dark rounded-lg"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={handleLinkClick}
                            className="text-japanese-yellow-dark font-bold uppercase no-underline hover:no-underline hover:bg-pastel-yellow hover:text-japanese-yellow-dark rounded-lg"
                          >
                            {item.name}
                          </a>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="divider border-japanese-yellow-dark"></div>
            <ul className="menu menu-vertical w-full">
              <li className="menu-title">
                <span className="text-japanese-yellow-dark font-bold">Partner Sites</span>
              </li>
              {subItems.map((item, index) => (
                <li key={index}>
                  {item.isInternal ? (
                    <Link 
                      to={item.link} 
                      onClick={handleLinkClick}
                      className="hover:bg-pastel-yellow hover:text-japanese-yellow-dark rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="hover:bg-pastel-yellow hover:text-japanese-yellow-dark rounded-lg"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
