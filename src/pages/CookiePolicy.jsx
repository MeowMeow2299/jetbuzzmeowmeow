import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCookieBite, FaShieldAlt, FaCog, FaChartBar, FaEye, FaGlobe, FaUserCheck, FaExclamationTriangle, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import './CookiePolicy.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const CookiePolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'JeetBuzz Games – Cookie Policy | Online Gaming Data & Tracking';
    updateOrCreateMeta(
      'description',
      'Learn how JeetBuzzGames.com uses cookies and tracking technologies to enhance your online gaming experience, protect data, and deliver personalized content safely.'
    );
    updateOrCreateMeta(
      'keywords',
      'JeetBuzzGames cookie policy, online gaming cookies, website tracking, user data protection, online gaming privacy, personalized gaming experience, secure online gaming, tracking technologies'
    );
  }, []);

  return (
    <div className="cookie-policy-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="cookie-policy-header">Cookie Policy JeetBuzzGames.com</h1>
      </div>
      
      <div className="cookie-policy-content">
        <div className="intro-card">
          <div className="card-header">
            <FaCookieBite className="header-icon" />
            <h2 className="section-title">Introduction</h2>
          </div>
          
          <div className="card-body">
            <p className="intro-text">
              At JeetBuzzGames.com, we use cookies and similar tracking technologies to improve your experience, enhance website functionality, and provide personalized content while ensuring your online gaming experience is safe and secure. This Cookie Policy explains what cookies are, how we use them, and your options for managing them.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaQuestionCircle className="header-icon" />
            <h2 className="section-title">1. What Are Cookies?</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the site remember your preferences, recognize your device, and provide a smoother browsing experience. Cookies do not contain sensitive information such as passwords or credit card details.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaCog className="header-icon" />
            <h2 className="section-title">2. How We Use Cookies</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">At JeetBuzzGames.com, we use cookies for various purposes:</p>
            
            <div className="cookie-types-grid">
              <div className="cookie-type-item">
                <div className="cookie-type-icon">
                  <FaShieldAlt />
                </div>
                <div className="cookie-type-content">
                  <h3 className="cookie-type-title">Essential Cookies</h3>
                  <p className="cookie-type-text">Required for basic website functions, account login, and secure transactions.</p>
                </div>
              </div>
              
              <div className="cookie-type-item">
                <div className="cookie-type-icon">
                  <FaChartBar />
                </div>
                <div className="cookie-type-content">
                  <h3 className="cookie-type-title">Performance Cookies</h3>
                  <p className="cookie-type-text">Help us analyze website traffic, monitor performance, and improve user experience.</p>
                </div>
              </div>
              
              <div className="cookie-type-item">
                <div className="cookie-type-icon">
                  <FaUserCheck />
                </div>
                <div className="cookie-type-content">
                  <h3 className="cookie-type-title">Functionality Cookies</h3>
                  <p className="cookie-type-text">Remember your preferences, language settings, and personalized gaming features.</p>
                </div>
              </div>
              
              <div className="cookie-type-item">
                <div className="cookie-type-icon">
                  <FaEye />
                </div>
                <div className="cookie-type-content">
                  <h3 className="cookie-type-title">Advertising and Analytics Cookies</h3>
                  <p className="cookie-type-text">Allow us to deliver relevant promotions, track the effectiveness of campaigns, and understand user engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaGlobe className="header-icon" />
            <h2 className="section-title">3. Third-Party Cookies</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Some cookies are placed by third-party services, such as analytics providers or advertising partners. These third-party cookies may track your browsing activity across multiple websites to provide personalized content and ads. We do not control these third-party cookies, and their use is governed by their own privacy policies.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaCog className="header-icon" />
            <h2 className="section-title">4. Managing Cookies</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              You can control or disable cookies through your browser settings. Most browsers allow you to block, delete, or manage cookies individually. Please note that disabling certain cookies may affect the functionality of JeetBuzzGames.com, including account access, gaming features, and personalized content.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaUserCheck className="header-icon" />
            <h2 className="section-title">5. Your Consent</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              By using JeetBuzzGames.com, you consent to the use of cookies as described in this Cookie Policy. You can withdraw your consent at any time by changing your browser settings or using opt-out tools provided by third parties.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaExclamationTriangle className="header-icon" />
            <h2 className="section-title">6. Updates to This Cookie Policy</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              We may update this Cookie Policy from time to time to reflect changes in website technology, regulations, or business practices. The latest version will always be available on this page. Continued use of the website after updates constitutes acceptance of the revised Cookie Policy.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaEnvelope className="header-icon" />
            <h2 className="section-title">7. Contact Us</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              If you have any questions about our use of cookies or how your data is processed, please contact us at:
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaGlobe />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">Website</h3>
                  <p className="contact-text">www.jeetbuzzgames.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
