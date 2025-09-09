import React, { useState } from 'react';
import './Language.css';

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'BD', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'TH', name: 'ไทย', flag: '🇹🇭' },
    { code: 'VI', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
  ];

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    console.log('Language changed to:', langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="language-dropdown">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="language-flag">{currentLanguage?.flag}</span>
        <span className="language-code">{currentLang}</span>
        <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="language-menu">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-item ${currentLang === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
              {currentLang === language.code && (
                <i className="fas fa-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
