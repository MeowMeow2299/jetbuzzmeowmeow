import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Profile from './Profile';
import Language from './Language';
import { useState } from 'react';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="navbar bg-gradient-to-r from-pastel-yellow to-pastel-mint shadow-lg">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-left">
            <h1 className="logo">
              <NavLink to="/" aria-label="Home">
                <img src="/photo/logo.png" alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden md:flex">
            <nav className="flex space-x-8">
              <NavLink 
                to="/casino" 
                className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium transition-colors duration-300"
              >
                Casino Games
              </NavLink>
              <NavLink 
                to="/slots" 
                className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium transition-colors duration-300"
              >
                Slots
              </NavLink>
              <NavLink 
                to="/promotion" 
                className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium transition-colors duration-300"
              >
                Promotion
              </NavLink>
              <NavLink 
                to="/contact" 
                className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium transition-colors duration-300"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Desktop Right Side */}
          <div className="navbar-right hidden md:flex items-center space-x-4">
            <div className="search-bar">
              <Search className="search-icon text-gray-600" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/80 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-japanese-yellow-light"
              />
            </div>
            <Language />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                <NavLink 
                  to="/casino" 
                  className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium py-2 px-3 rounded-lg hover:bg-pastel-yellow-light transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Casino Games
                </NavLink>
                <NavLink 
                  to="/slots" 
                  className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium py-2 px-3 rounded-lg hover:bg-pastel-yellow-light transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Slots
                </NavLink>
                <NavLink 
                  to="/promotion" 
                  className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium py-2 px-3 rounded-lg hover:bg-pastel-yellow-light transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Promotion
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="nav-link text-gray-700 hover:text-japanese-yellow-dark font-medium py-2 px-3 rounded-lg hover:bg-pastel-yellow-light transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="search-bar mb-4">
                  <Search className="search-icon text-gray-600" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-japanese-yellow-light w-full"
                  />
                </div>
                <Language />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
