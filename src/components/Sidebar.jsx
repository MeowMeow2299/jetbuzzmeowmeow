import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { 
  FaHome, 
  FaGamepad, 
  FaCrown, 
  FaVideo, 
  FaDice, 
  FaTicketAlt, 
  FaTrophy, 
  FaEgg, 
  FaChevronUp,
  FaSpade,
  FaHeart,
  FaClub,
  FaDiamond,
  FaSwords,
  FaChevronDown,
  FaCircle
} from 'react-icons/fa';
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

  // Main navigation items (9 items)
  const mainMenuItems = [
    { name: 'HOME', link: '/', icon: FaHome },
    { name: 'CASINO GAMES', link: '/casino', icon: FaCircle },
    { name: 'SLOTS', link: '/slots', icon: FaCrown },
    { name: 'LIVE CASINO', link: '/live-casino', icon: FaVideo },
    { name: 'TABLE GAMES', link: '/table-games', icon: FaDice },
    { name: 'LOTTERY', link: '/lottery', icon: FaTicketAlt },
    { name: 'SPORTS', link: '/sports', icon: FaTrophy },
    { name: 'GAMECHICKEN', link: '/gamechicken', icon: FaEgg },
    { name: 'E-SPORT', link: '/e-sports', icon: FaGamepad }
  ];

  // Collapsible sections
  const collapsibleSections = [
    {
      name: 'POPULAR GAMES',
      icon: FaTrophy,
      subItems: [
        { name: 'BGD33', link: '/bgd33', icon: FaSpade },
        { name: 'BETBOT', link: '/betbot', icon: FaSpade },
        { name: 'JEETBUZZ', link: '/jeetbuzz', icon: FaSpade },
        { name: 'CRICKEX', link: '/crickex', icon: FaSpade },
        { name: 'TK999', link: '/tk999', icon: FaSpade },
        { name: 'CK444', link: '/ck444', icon: FaSpade },
        { name: 'L444 ONLINE GAME', link: '/l444-online-game', icon: FaSpade }
      ]
    },
    {
      name: 'CRICKEX',
      icon: FaSwords,
      subItems: [
        { name: 'CRICKEX LOGIN', link: '/crickex-login', icon: FaSwords },
        { name: 'CRICKEX BET', link: '/crickex-bet', icon: FaSwords },
        { name: 'CRICKEX APP', link: '/crickex-app', icon: FaSwords },
        { name: 'CRICKEX ONLINE', link: '/crickex-online', icon: FaSwords },
        { name: 'CRICKEX ACCOUNT CREATE', link: '/crickex-account-create', icon: FaSwords },
        { name: 'CRICKEX BONUS', link: '/crickex-bonus', icon: FaSwords },
        { name: 'CRICKEX BD LOGIN', link: '/crickex-bd-login', icon: FaSwords },
        { name: 'CRICKEX BETTING APP', link: '/crickex-betting-app', icon: FaSwords },
        { name: 'CRICKEX BET BANGLA', link: '/crickex-bet-bangla', icon: FaSwords }
      ]
    },
    {
      name: 'JEETBUZZ',
      icon: FaClub,
      subItems: [
        { name: 'JEETBUZZ LOGIN', link: '/jeetbuzz-login', icon: FaSpade },
        { name: 'JEETBUZZ CASINO', link: '/jeetbuzz-casino', icon: FaSpade },
        { name: 'JEETBUZZ GAME', link: '/jeetbuzz-game', icon: FaSpade },
        { name: 'JEETBUZZ ONLINE', link: '/jeetbuzz-online', icon: FaSpade },
        { name: 'JEETBUZZ PARTNER', link: '/jeetbuzz-partner', icon: FaSpade }
      ]
    }
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
              {/* Main Navigation Items */}
              <ul className="main-menu">
                {mainMenuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index} className="main-menu-item">
                      <Link 
                        to={item.link} 
                        onClick={handleLinkClick}
                        className="main-menu-link"
                      >
                        <IconComponent className="menu-icon" />
                        <span className="menu-text">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Separator */}
              <div className="menu-separator"></div>

              {/* Collapsible Sections */}
              {collapsibleSections.map((section, sectionIndex) => {
                const SectionIcon = section.icon;
                const isExpanded = activeDropdown === section.name;
                
                return (
                  <div key={sectionIndex} className="collapsible-section">
                    {/* Section Header */}
                    <div 
                      className="section-header"
                      onClick={() => toggleDropdown(section.name)}
                    >
                      <SectionIcon className="section-icon" />
                      <span className="section-title">{section.name}</span>
                      <FaChevronUp className={`chevron ${isExpanded ? 'expanded' : ''}`} />
                    </div>

                    {/* Sub Items */}
                    {isExpanded && (
                      <ul className="sub-menu">
                        {section.subItems.map((subItem, subIndex) => {
                          const SubIcon = subItem.icon;
                          return (
                            <li key={subIndex} className="sub-menu-item">
                              <Link 
                                to={subItem.link} 
                                onClick={handleLinkClick}
                                className="sub-menu-link"
                              >
                                <SubIcon className="sub-icon" />
                                <span className="sub-text">{subItem.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
