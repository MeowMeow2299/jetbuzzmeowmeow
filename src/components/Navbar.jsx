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
          
          {user ? (
            // When user is logged in - show Profile and Language
            <>
              <div className="navbar-buttons">
                <div className="profile-container">
                  <button 
                    className="btn-circle profile-btn"
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    <i className="fas fa-user"></i>
                  </button>
                  {showProfile && <Profile />}
                </div>
                <Language />
              </div>
            </>
          ) : (
            // When user is not logged in - show Login, Signup and Language
            <>
              <NavLink className="btn-glass" to="/login">Login</NavLink>
              <button className="btn-glass btn-glass--accent" onClick={() => navigate('/signup')}>Signup</button>
              <Language />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
