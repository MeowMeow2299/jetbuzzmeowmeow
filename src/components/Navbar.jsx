import { Search } from 'lucide-react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { SEARCH_ITEMS } from './searchData';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const normalized = query.trim().toLowerCase();
    return SEARCH_ITEMS.filter(item => item.name.toLowerCase().includes(normalized)).slice(0, 8);
  }, [query]);

  const handleSelect = (path) => {
    setQuery('');
    navigate(path);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (results.length > 0) {
        handleSelect(results[0].path);
      }
    }
  };

  return (
    <>
      <header className="navbar bg-gradient-to-r from-gray-900 to-black shadow-lg">
        <div className="navbar-container flex items-center justify-between px-4 py-3">
          {/* Left - Logo */}
          <div className="navbar-left flex items-center">
            <h1 className="logo">
              <NavLink to="/" aria-label="Home">
                <img src="/photo/logo.png" alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </h1>
          </div>

          {/* Center - Slogan */}
          <div className="navbar-center flex-1 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 text-center tracking-wide">Play Win, Bet Win</h2>
          </div>

          {/* Right - Search */}
          <div className="navbar-right flex items-center" style={{ position: 'relative' }}>
            <div className="flex items-center bg-white border-2 border-yellow-400 rounded-lg px-3 py-2 shadow-md" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
              <Search className="w-5 h-5 text-gray-600 mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search games..."
                aria-label="Search games"
                className="bg-transparent border-none text-black font-medium outline-none w-40"
              />
            </div>
            {(isFocused || query) && results.length > 0 && (
              <div className="absolute top-12 right-0 w-72 bg-white border-2 border-yellow-400 rounded-lg shadow-xl z-50">
                {results.map((item, idx) => (
                  <button
                    key={`${item.path}-${idx}`}
                    className="w-full text-left px-4 py-3 text-black font-medium hover:bg-yellow-100 hover:text-yellow-800 transition-all duration-300"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(item.path)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
