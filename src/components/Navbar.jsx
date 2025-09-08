import { Search } from 'lucide-react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo chính + logo phụ */}
        <div className="navbar-left">
          <h1 className="logo">
            <NavLink to="/" aria-label="Home">
              <img src="./photo/1.png" alt="Logo chính" />
            </NavLink>
          </h1>
          {/* Logo phụ - bà đổi link ảnh ở src */}
          <div className="logo-extra">
            <img src="./photo/logo.png" alt="Logo phụ" />
          </div>
        </div>

        {/* Slogan */}
        <div className="navbar-center">
          <p className="slogan">Bet Smart Win More</p>
        </div>

        {/* Search + Buttons */}
        <div className="navbar-right">
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search..." />
          </div>
          <button className="btn-glass" onClick={onLoginClick}>Login</button>
          <button className="btn-glass btn-glass--accent" onClick={onSignupClick}>Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
