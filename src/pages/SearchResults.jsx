import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaGamepad, FaTrophy, FaDice, FaVideo, FaFish, FaFutbol } from 'react-icons/fa';
import { SEARCH_ITEMS } from '../components/searchData';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (location.state?.query) {
      setSearchQuery(location.state.query);
      setSearchInput(location.state.query);
    }
  }, [location.state]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const normalized = searchQuery.trim().toLowerCase();
    return SEARCH_ITEMS.filter(item => 
      item.name.toLowerCase().includes(normalized) ||
      item.category?.toLowerCase().includes(normalized)
    );
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleGameClick = (path) => {
    navigate(path);
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'hot games':
        return <FaTrophy className="category-icon" />;
      case 'slots':
        return <FaDice className="category-icon" />;
      case 'live':
        return <FaVideo className="category-icon" />;
      case 'fish':
        return <FaFish className="category-icon" />;
      case 'sports':
        return <FaFutbol className="category-icon" />;
      default:
        return <FaGamepad className="category-icon" />;
    }
  };

  return (
    <div className="search-results-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="search-results-header">Search Results</h1>
      </div>

      <div className="search-results-content">
        {/* Search Bar */}
        <div className="search-bar-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search games, categories..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <div className="results-section">
          {searchQuery && (
            <div className="results-header">
              <h2>
                {searchResults.length > 0 
                  ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                  : `No results found for "${searchQuery}"`
                }
              </h2>
            </div>
          )}

          {searchResults.length > 0 ? (
            <div className="results-grid">
              {searchResults.map((item, index) => (
                <div key={`${item.path}-${index}`} className="result-card" onClick={() => handleGameClick(item.path)}>
                  <div className="result-icon">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="result-content">
                    <h3 className="result-title">{item.name}</h3>
                    {item.category && (
                      <p className="result-category">{item.category}</p>
                    )}
                    <p className="result-description">
                      Click to play {item.name} - {item.category || 'Game'}
                    </p>
                  </div>
                  <div className="result-action">
                    <FaGamepad className="play-icon" />
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="no-results">
              <FaSearch className="no-results-icon" />
              <h3>No games found</h3>
              <p>Try searching for different keywords or browse our game categories</p>
              <div className="suggested-categories">
                <span>Popular categories:</span>
                <div className="category-tags">
                  <span className="tag">Hot Games</span>
                  <span className="tag">Slots</span>
                  <span className="tag">Live Casino</span>
                  <span className="tag">Sports</span>
                  <span className="tag">Fish Games</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="welcome-section">
              <FaSearch className="welcome-icon" />
              <h3>Search for Games</h3>
              <p>Enter a game name or category to find what you're looking for</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
