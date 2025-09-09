import { Search } from 'lucide-react';
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

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo chính + logo phụ */}
        <div className="navbar-left">
          <h1 className="logo">
            <NavLink to="/" aria-label="Home">
              <img src="/photo/logo.png" alt="Logo" />
            </NavLink>
          </h1>
        </div>

        {/* Slogan */}
        <div className="navbar-center">
          <p className="slogan">Bet Smart Win More</p>
        </div>

        {/* Search + Buttons */}
        <div className="navbar-right">
          <NavLink className="btn-glass promotion-link" to="/promotion">
            Promotion
          </NavLink>
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search..." />
          </div>
          
          {/* Always show Language, no login/signup buttons */}
          <div className="navbar-buttons">
            <Language />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
