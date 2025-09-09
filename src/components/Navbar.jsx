import { Search } from 'lucide-react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
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
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search..." />
          </div>
          <NavLink className="btn-glass" to="/login">Login</NavLink>
          <button className="btn-glass btn-glass--accent" onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
