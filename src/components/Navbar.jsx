import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ onLoginClick: _onLoginClick, onSignupClick: _onSignupClick }) => {
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FFF8DC] to-[#F0FFF0] shadow-lg" style={{ background: 'linear-gradient(to right, #FFF8DC, #F0FFF0)' }}>
      <div className="navbar-start w-16" />
      <div className="navbar-center">
        <NavLink to="/" aria-label="Home" className="btn btn-ghost">
          <img src="/photo/logo.png" alt="Logo" className="h-12 w-auto" />
        </NavLink>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
