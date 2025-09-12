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
    document.body.classList.toggle('sidebar-closed', !isOpen);
    return () => {
      document.body.classList.remove('sidebar-open');
      document.body.classList.remove('sidebar-closed');
    };
  }, [isOpen]);

  // Tất cả menu items hiển thị trực tiếp (không dropdown)
  const allMenuItems = [
    { name: 'HOME', link: '/', isInternal: true },
    { name: 'CASINO GAMES', link: '/casino', isInternal: true },
    { name: 'SLOTS', link: '/slots', isInternal: true },
    { name: 'LIVE CASINO', link: '/live-casino', isInternal: true },
    { name: 'TABLE GAMES', link: '/table-games', isInternal: true },
    { name: 'LOTTERY', link: '/lottery', isInternal: true },
    { name: 'SPORTS', link: '/sports', isInternal: true },
    { name: 'GAMECHICKEN', link: '/gamechicken', isInternal: true },
    { name: 'E-SPORT', link: '/e-sports', isInternal: true },
    { name: 'POPULAR GAMES', link: '/popular', isInternal: true },
    { name: 'BGD33', link: '/bgd33', isInternal: true },
    { name: 'BETBDT', link: '/betbdt', isInternal: true },
    { name: 'JEETBUZZ', link: '/jeetbuzz', isInternal: true },
    { name: 'JEETBUZZ LOGIN', link: '/jeetbuzz-login', isInternal: true },
    { name: 'JEETBUZZ CASINO', link: '/jeetbuzz-casino', isInternal: true },
    { name: 'JEETBUZZ GAME', link: '/jeetbuzz-game', isInternal: true },
    { name: 'JEETBUZZ ONLINE', link: '/jeetbuzz-online', isInternal: true },
    { name: 'JEETBUZZ PARTNER', link: '/jeetbuzz-partner', isInternal: true },
    { name: 'CRICKEX', link: '/crickex', isInternal: true },
    { name: 'CRICKEX LOGIN', link: '/crickex-login', isInternal: true },
    { name: 'CRICKEX BET', link: '/crickex-bet', isInternal: true },
    { name: 'CRICKEX APP', link: '/crickex-app', isInternal: true },
    { name: 'CRICKEX ONLINE', link: '/crickex-online', isInternal: true },
    { name: 'CRICKEX ACCOUNT CREATE', link: '/crickex-account-create', isInternal: true },
    { name: 'CRICKEX BONUS', link: '/crickex-bonus', isInternal: true },
    { name: 'CRICKEX BD LOGIN', link: '/crickex-bd-login', isInternal: true },
    { name: 'CRICKEX BETTING APP', link: '/crickex-betting-app', isInternal: true },
    { name: 'CRICKEX BET BANGLA', link: '/crickex-bet-bangla', isInternal: true },
    { name: 'TK999', link: '/tk999', isInternal: true },
    { name: 'CK444', link: '/ck444', isInternal: true },
    { name: 'L444 ONLINE GAME', link: '/l444-online-game', isInternal: true }
  ];

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </button>

      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <div className="min-h-full w-64">
          <div className="p-4">
            <div className="sidebar-content">
              {/* Tất cả menu items hiển thị trực tiếp */}
              <ul className="menu menu-vertical w-full text-base-content">
                {allMenuItems.map((item, index) => (
                  <li key={index}>
                    {item.isInternal ? (
                      <Link 
                        to={item.link} 
                        onClick={handleLinkClick}
                        className="text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-3 transition-all duration-300 no-underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={handleLinkClick}
                        className="text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-3 transition-all duration-300 no-underline"
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
      </div>
    </>
  );
};

export default Sidebar;
