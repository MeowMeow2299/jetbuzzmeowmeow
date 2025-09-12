import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaQuestionCircle, FaCog, FaEye, FaCheckCircle, FaGamepad, FaDice, FaLock, FaChartLine, FaHandshake, FaExclamationTriangle } from 'react-icons/fa';
import './FairnessRNGTesting.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const FairnessRNGTesting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'JeetBuzz Games – Fairness & RNG Testing | Secure & Random Gaming';
    updateOrCreateMeta(
      'description',
      'Learn how JeetBuzzGames.com ensures fair and secure online gaming with certified RNG testing. Enjoy unbiased, random results for slots, casino games, and live gaming.'
    );
    updateOrCreateMeta(
      'keywords',
      'JeetBuzzGames RNG, online gaming fairness, Random Number Generator, fair online casino, unbiased gaming results, secure online gaming, online slots fairness, casino RNG testing'
    );
  }, []);

  return (
    <div className="fairness-rng-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="fairness-rng-header">Fairness & RNG Testing JeetBuzzGames.com</h1>
      </div>
      
      <div className="fairness-rng-content">
        <div className="intro-card">
          <div className="card-header">
            <FaShieldAlt className="header-icon" />
            <h2 className="section-title">Commitment to Fair Gaming</h2>
          </div>
          
          <div className="card-body">
            <p className="intro-text">
              At JeetBuzzGames.com, we are committed to providing a fair, transparent, and secure online gaming experience. All games on our platform, including casino games, slots, and live games, operate using advanced Random Number Generator (RNG) technology to ensure every outcome is completely random and unbiased.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaQuestionCircle className="header-icon" />
            <h2 className="section-title">What is RNG?</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              A Random Number Generator (RNG) is a computerized system that produces random results for each game outcome. Whether it's a slot spin, card shuffle, or dice roll, RNG guarantees that no pattern exists and that each result is independent of previous outcomes. RNG is the standard technology in the online gaming industry for ensuring fairness.
            </p>
            
            <div className="rng-features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaDice />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Random Results</h3>
                  <p className="feature-text">Every outcome is completely random and unpredictable</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaLock />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">No Patterns</h3>
                  <p className="feature-text">Guarantees that no pattern exists in game results</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Independent Outcomes</h3>
                  <p className="feature-text">Each result is independent of previous outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaCheckCircle className="header-icon" />
            <h2 className="section-title">Ensuring Fairness</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              To maintain fairness, all games on JeetBuzzGames.com undergo rigorous RNG testing. Our system is regularly audited by certified third-party testing agencies to verify that results are unbiased and unpredictable. This ensures that neither players, staff, nor external parties can manipulate game outcomes.
            </p>
            
            <div className="fairness-process">
              <div className="process-item">
                <div className="process-icon">
                  <FaCog />
                </div>
                <div className="process-content">
                  <h3 className="process-title">Rigorous Testing</h3>
                  <p className="process-text">All games undergo comprehensive RNG testing procedures</p>
                </div>
              </div>
              
              <div className="process-item">
                <div className="process-icon">
                  <FaEye />
                </div>
                <div className="process-content">
                  <h3 className="process-title">Third-Party Audits</h3>
                  <p className="process-text">Regular audits by certified testing agencies</p>
                </div>
              </div>
              
              <div className="process-item">
                <div className="process-icon">
                  <FaLock />
                </div>
                <div className="process-content">
                  <h3 className="process-title">Anti-Manipulation</h3>
                  <p className="process-text">Prevents manipulation by players, staff, or external parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaEye className="header-icon" />
            <h2 className="section-title">Transparency and Trust</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">We prioritize transparency to build trust with our users. JeetBuzzGames.com provides:</p>
            
            <div className="transparency-list">
              <div className="transparency-item">
                <span className="transparency-checkmark">✓</span>
                <span className="transparency-text">Regular third-party audits of RNG systems</span>
              </div>
              <div className="transparency-item">
                <span className="transparency-checkmark">✓</span>
                <span className="transparency-text">Clear information about game mechanics and odds</span>
              </div>
              <div className="transparency-item">
                <span className="transparency-checkmark">✓</span>
                <span className="transparency-text">Assurance that all games are fair and secure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaHandshake className="header-icon" />
            <h2 className="section-title">Responsible Gaming</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Fairness goes hand-in-hand with responsible gaming. We encourage all users to play within their limits and provide tools for setting deposit limits, monitoring gameplay, and self-exclusion if needed. Our goal is to provide a safe, fair, and enjoyable gaming environment.
            </p>
            
            <div className="responsible-gaming-features">
              <div className="responsible-item">
                <div className="responsible-icon">
                  <FaExclamationTriangle />
                </div>
                <div className="responsible-content">
                  <h3 className="responsible-title">Deposit Limits</h3>
                  <p className="responsible-text">Set limits on your deposits to control spending</p>
                </div>
              </div>
              
              <div className="responsible-item">
                <div className="responsible-icon">
                  <FaChartLine />
                </div>
                <div className="responsible-content">
                  <h3 className="responsible-title">Gameplay Monitoring</h3>
                  <p className="responsible-text">Monitor your gaming activity and patterns</p>
                </div>
              </div>
              
              <div className="responsible-item">
                <div className="responsible-icon">
                  <FaLock />
                </div>
                <div className="responsible-content">
                  <h3 className="responsible-title">Self-Exclusion</h3>
                  <p className="responsible-text">Temporarily or permanently exclude yourself from gaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="conclusion-card">
          <div className="card-body">
            <p className="conclusion-text">
              At JeetBuzzGames.com, fairness and security are our top priorities. Through advanced RNG technology, regular third-party audits, and transparent practices, we ensure that every game outcome is random, unbiased, and fair. Combined with responsible gaming tools, we provide a safe and enjoyable gaming environment for all our players.
            </p>
            
            <div className="final-message">
              <FaGamepad className="final-icon" />
              <p className="final-text">
                <strong>Play with confidence knowing that every game is fair, secure, and truly random!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessRNGTesting;
