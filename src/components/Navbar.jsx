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
      <header className="navbar bg-gradient-to-r from-pastel-yellow to-pastel-mint shadow-lg">
        <div className="navbar-container flex items-center justify-between px-4 py-3">
          {/* Left - Logo */}
          <div className="navbar-left flex items-center">
            <h1 className="logo">
              <NavLink to="/" aria-label="Home">
                <img src="/photo/logo.png" alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </h1>
          </div>

          {/* Center - spacer */}
          <div className="navbar-center flex-1" />

          {/* Right - Search */}
          <div className="navbar-right flex items-center" style={{ position: 'relative' }}>
            <div className="search-bar" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
              <Search className="w-5 h-5 search-icon" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search games..."
                aria-label="Search games"
              />
            </div>
            {(isFocused || query) && results.length > 0 && (
              <div className="search-results">
                {results.map((item, idx) => (
                  <button
                    key={`${item.path}-${idx}`}
                    className="search-result-item"
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
