import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaBlogger, FaShoppingBag, FaLinkedin } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Branding and Social Media */}
        <div className="footer-section branding-section">
          <div className="footer-logo">
            <div className="logo-text">
              <div className="jeetbuzz-text">JEETBUZZ</div>
              <div className="games-text">GAMES</div>
            </div>
          </div>
          
          <div className="footer-description">
            A GAME STUDIO CRAFTING EXCITING, HIGH-QUALITY VIDEO GAMES, PRIORITIZING IMMERSIVE GAMEPLAY AND MECHANICS. HAC HABITASSE PLATEA.
          </div>
          
          <div className="social-media-icons">
            <div className="social-icon">
              <FaInstagram />
            </div>
            <div className="social-icon">
              <FaAt />
            </div>
            <div className="social-icon">
              <FaTiktok />
            </div>
            <div className="social-icon">
              <FaBlogger />
            </div>
            <div className="social-icon">
              <FaShoppingBag />
            </div>
            <div className="social-icon">
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Middle-Left Section - ABOUT Links */}
        <div className="footer-section about-section">
          <h3 className="section-title">ABOUT</h3>
          <ul className="footer-links">
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/anti-money-laundering">ANTI MONEY LAUNDERING</a></li>
            <li><a href="/cash-back-offer">CASH BACK OFFER</a></li>
            <li><a href="/cookie-policy">COOKIE POLICY</a></li>
            <li><a href="/dispute-resolution">DISPUTE RESOLUTION</a></li>
            <li><a href="/fairness-rng-testing">FAIRNESS & RNG TESTING</a></li>
            <li><a href="/help-center-faq">HELP CENTER FAQ</a></li>
            <li><a href="/how-to-place-bet">HOW TO PLACE A BET</a></li>
            <li><a href="/terms-of-service">TERMS OF SERVICE</a></li>
          </ul>
        </div>

        {/* Middle-Right Section - BLOGS Links */}
        <div className="footer-section utility-section">
          <h3 className="section-title">BLOGS</h3>
          <ul className="footer-links">
            <li><a href="/blog/jeetbuzz-bangladesh">JeetBuzz Bangladesh</a></li>
            <li><a href="/blog/jeetbuzz-premier-casino-platform">JeetBuzz – A Deep Dive into Bangladesh's Premier Casino Platform</a></li>
            <li><a href="/blog/blog-outline">Blog Outline</a></li>
            <li><a href="/blog/jeetbuzz-login-casino-journey">JeetBuzz Login: Start Your Thrilling Casino Journey</a></li>
            <li><a href="/blog/ck444-mobile-gaming">CK444 App for iPhone and Android Users: Mobile Gaming Made Easy</a></li>
            <li><a href="/blog/ck444-login-guide">CK444 Login App: A Complete Guide to Live Casino, Table Games, and Mobile Play</a></li>
            <li><a href="/blog/jeetbuzz-games-hub">JeetBuzz Games The Ultimate Casino Gaming Hub in Bangla</a></li>
            <li><a href="/blog/jeetbuzz-games-bangladesh">JeetBuzz Games in Bangladesh & How to Find Information on Google, Yahoo, and Bing</a></li>
          </ul>
        </div>

        {/* Right Section - Download Our Games */}
        <div className="footer-section download-section">
          <h3 className="section-title">DOWNLOAD OUR GAMES</h3>
          <div className="download-buttons">
            <a href="#" className="download-btn google-play">
              <div className="btn-content">
                <div className="btn-logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="btn-text">
                  <span className="btn-subtitle">Get it on</span>
                  <span className="btn-title">Google Play</span>
                </div>
              </div>
            </a>
            
            <a href="#" className="download-btn app-store">
              <div className="btn-content">
                <div className="btn-logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                </div>
                <div className="btn-text">
                  <span className="btn-subtitle">Get it on</span>
                  <span className="btn-title">App Store</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;