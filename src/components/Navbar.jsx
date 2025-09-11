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
        <div className="navbar-container flex items-center justify-between px-4 py-3">
          {/* Left side - empty for balance */}
          <div className="w-16"></div>

          {/* Center - Logo */}
          <div className="navbar-center flex-1 flex justify-center">
            <h1 className="logo">
              <NavLink to="/" aria-label="Home">
                <img src="/photo/logo.png" alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </h1>
          </div>

          {/* Right side - Search button only */}
          <div className="navbar-right flex items-center">
            {/* Search Button */}
            <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300">
              <Search className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
