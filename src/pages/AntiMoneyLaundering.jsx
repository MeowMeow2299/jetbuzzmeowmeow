import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaEye, FaFileAlt, FaExclamationTriangle, FaCheckCircle, FaUserCheck, FaCreditCard, FaPhone, FaGamepad } from 'react-icons/fa';
import './AntiMoneyLaundering.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const AntiMoneyLaundering = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Anti-Money Laundering (AML) Policy – JeetbuzzGames.com';
    updateOrCreateMeta(
      'description',
      'Learn about JeetbuzzGames.com Anti-Money Laundering (AML) policies. How we prevent illegal transactions and ensure secure, fair, and compliant online gaming.'
    );
    updateOrCreateMeta(
      'keywords',
      'anti-money laundering, AML policy, secure gaming, JeetbuzzGames compliance, online casino security, prevent fraud, responsible gaming'
    );
  }, []);

  return (
    <div className="aml-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="aml-header">Anti-Money Laundering Policy</h1>
      </div>
      
      <div className="aml-content">
        <div className="intro-card">
          <div className="card-header">
            <FaShieldAlt className="header-icon" />
            <h2 className="section-title">🔹 Security Commitment</h2>
          </div>
          
          <div className="card-body">
            <p className="intro-text">
              At JeetbuzzGames.com, we are committed to maintaining the highest standards of security and legality in all our operations. To protect our players and the platform, we strictly enforce Anti-Money Laundering (AML) policies. These policies help detect, prevent, and report any illegal financial activity, ensuring that online gaming remains safe and fair.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaFileAlt className="header-icon" />
            <h2 className="section-title">What is Anti-Money Laundering (AML)?</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Anti-Money Laundering refers to the set of policies and procedures designed to prevent the use of our platform for illegal financial activities, such as money laundering, terrorist financing, or fraud. AML ensures that all transactions are legitimate and transparent.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaExclamationTriangle className="header-icon" />
            <h2 className="section-title">Why AML is Important</h2>
          </div>
          
          <div className="card-body">
            <div className="importance-grid">
              <div className="importance-item">
                <div className="importance-icon">
                  <FaShieldAlt />
                </div>
                <div className="importance-content">
                  <h3 className="importance-title">Protects Players</h3>
                  <p className="importance-text">Ensures that all deposits, withdrawals, and winnings are from legal and verified sources.</p>
                </div>
              </div>
              
              <div className="importance-item">
                <div className="importance-icon">
                  <FaGamepad />
                </div>
                <div className="importance-content">
                  <h3 className="importance-title">Maintains Fair Gaming</h3>
                  <p className="importance-text">Prevents unfair advantages and ensures equal opportunities for all players.</p>
                </div>
              </div>
              
              <div className="importance-item">
                <div className="importance-icon">
                  <FaCheckCircle />
                </div>
                <div className="importance-content">
                  <h3 className="importance-title">Regulatory Compliance</h3>
                  <p className="importance-text">Helps us comply with laws and regulations governing online gaming in Bangladesh and internationally.</p>
                </div>
              </div>
              
              <div className="importance-item">
                <div className="importance-icon">
                  <FaEye />
                </div>
                <div className="importance-content">
                  <h3 className="importance-title">Prevents Fraud</h3>
                  <p className="importance-text">Detects suspicious activity and prevents misuse of the platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaShieldAlt className="header-icon" />
            <h2 className="section-title">AML Policies at JeetbuzzGames.com</h2>
          </div>
          
          <div className="card-body">
            <div className="policies-list">
              <div className="policy-item">
                <div className="policy-icon">
                  <FaUserCheck />
                </div>
                <div className="policy-content">
                  <h3 className="policy-title">Know Your Customer (KYC)</h3>
                  <p className="policy-text">We verify all players' identities to ensure legitimacy.</p>
                </div>
              </div>
              
              <div className="policy-item">
                <div className="policy-icon">
                  <FaEye />
                </div>
                <div className="policy-content">
                  <h3 className="policy-title">Transaction Monitoring</h3>
                  <p className="policy-text">All deposits and withdrawals are monitored for unusual or suspicious activity.</p>
                </div>
              </div>
              
              <div className="policy-item">
                <div className="policy-icon">
                  <FaFileAlt />
                </div>
                <div className="policy-content">
                  <h3 className="policy-title">Reporting Suspicious Activity</h3>
                  <p className="policy-text">Any irregular transactions are reported to regulatory authorities as required.</p>
                </div>
              </div>
              
              <div className="policy-item">
                <div className="policy-icon">
                  <FaExclamationTriangle />
                </div>
                <div className="policy-content">
                  <h3 className="policy-title">Account Restrictions</h3>
                  <p className="policy-text">Accounts involved in unverified or suspicious transactions may be temporarily or permanently suspended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaCheckCircle className="header-icon" />
            <h2 className="section-title">How Players Can Stay Compliant</h2>
          </div>
          
          <div className="card-body">
            <div className="compliance-list">
              <div className="compliance-item">
                <span className="compliance-checkmark">✓</span>
                <span className="compliance-text">Always use verified payment methods linked to your account.</span>
              </div>
              <div className="compliance-item">
                <span className="compliance-checkmark">✓</span>
                <span className="compliance-text">Provide accurate personal and financial information during registration and KYC.</span>
              </div>
              <div className="compliance-item">
                <span className="compliance-checkmark">✓</span>
                <span className="compliance-text">Avoid using someone else's account or financial details.</span>
              </div>
              <div className="compliance-item">
                <span className="compliance-checkmark">✓</span>
                <span className="compliance-text">Contact Customer Support if you notice any suspicious activity on your account.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="conclusion-card">
          <div className="card-body">
            <p className="conclusion-text">
              The Anti-Money Laundering (AML) policies at JeetbuzzGames.com are designed to protect players, maintain fair play, and comply with legal regulations. By adhering to these guidelines, you help us create a safe, transparent, and trustworthy gaming environment.
            </p>
            
            <div className="final-message">
              <FaGamepad className="final-icon" />
              <p className="final-text">
                <strong>Play responsibly, transact safely, and enjoy a secure online gaming experience with JeetbuzzGames.com.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiMoneyLaundering;
