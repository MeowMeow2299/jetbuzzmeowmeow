import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGavel, FaQuestionCircle, FaExclamationTriangle, FaComments, FaClipboardList, FaSearch, FaCheckCircle, FaShieldAlt, FaClock, FaHandshake, FaLightbulb, FaGamepad, FaEnvelope, FaGift, FaUserLock, FaCog } from 'react-icons/fa';
import './DisputeResolution.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const DisputeResolution = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dispute Resolution – Fair Play at JeetbuzzGames.com';
    updateOrCreateMeta(
      'description',
      'Learn about dispute resolution at JeetbuzzGames.com. How we handle complaints, resolve issues, and ensure fair and transparent gaming for all players.'
    );
    updateOrCreateMeta(
      'keywords',
      'dispute resolution, JeetbuzzGames complaints, fair play, online casino support, online betting issues, customer support Bangladesh'
    );
  }, []);

  return (
    <div className="dispute-resolution-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="dispute-resolution-header">Dispute Resolution</h1>
      </div>
      
      <div className="dispute-resolution-content">
        <div className="intro-card">
          <div className="card-header">
            <FaGavel className="header-icon" />
            <h2 className="section-title">Fair Play Commitment</h2>
          </div>
          
          <div className="card-body">
            <p className="intro-text">
              At JeetbuzzGames.com, we are committed to providing a fair, transparent, and enjoyable gaming experience for all our players. If you ever face any issues while using our platform—such as game disputes, transaction problems, or account concerns—we have a clear and structured dispute resolution process to ensure your concerns are handled quickly and fairly.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaQuestionCircle className="header-icon" />
            <h2 className="section-title">What is Dispute Resolution?</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Dispute resolution is the process of resolving conflicts or complaints between the player and the platform. It ensures that all players receive fair treatment, and any issues are investigated and settled professionally.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaExclamationTriangle className="header-icon" />
            <h2 className="section-title">Common Reasons for Disputes</h2>
          </div>
          
          <div className="card-body">
            <div className="dispute-reasons-grid">
              <div className="reason-item">
                <div className="reason-icon">
                  <FaGamepad />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">Incorrect game outcomes or technical errors</h3>
                </div>
              </div>
              
              <div className="reason-item">
                <div className="reason-icon">
                  <FaEnvelope />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">Deposit or withdrawal issues</h3>
                </div>
              </div>
              
              <div className="reason-item">
                <div className="reason-icon">
                  <FaGift />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">Bonus or promotion disagreements</h3>
                </div>
              </div>
              
              <div className="reason-item">
                <div className="reason-icon">
                  <FaUserLock />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">Account access problems</h3>
                </div>
              </div>
              
              <div className="reason-item">
                <div className="reason-icon">
                  <FaCog />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">Other service-related concerns</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaComments className="header-icon" />
            <h2 className="section-title">How to Submit a Dispute</h2>
          </div>
          
          <div className="card-body">
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Contact Customer Support</h3>
                  <p className="step-text">Reach out via live chat, email, or support ticket.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Provide Details</h3>
                  <p className="step-text">Clearly explain the issue, include transaction IDs, screenshots, or any relevant evidence.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Investigation</h3>
                  <p className="step-text">Our support team will review your case carefully, verify records, and check game logs if necessary.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Resolution</h3>
                  <p className="step-text">You will receive a fair and transparent response with a solution or guidance on the next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaClock className="header-icon" />
            <h2 className="section-title">Resolution Timeline</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              Most disputes are resolved within 24–72 hours, depending on complexity. Complex cases may take longer, but our team will keep you informed throughout the process.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaShieldAlt className="header-icon" />
            <h2 className="section-title">Commitment to Fair Play</h2>
          </div>
          
          <div className="card-body">
            <div className="commitment-list">
              <div className="commitment-item">
                <span className="commitment-checkmark">✓</span>
                <span className="commitment-text">All games on JeetbuzzGames.com are audited and regulated to ensure fairness.</span>
              </div>
              <div className="commitment-item">
                <span className="commitment-checkmark">✓</span>
                <span className="commitment-text">Dispute outcomes are based on verified facts and platform records.</span>
              </div>
              <div className="commitment-item">
                <span className="commitment-checkmark">✓</span>
                <span className="commitment-text">Players are treated professionally, respectfully, and confidentially.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaLightbulb className="header-icon" />
            <h2 className="section-title">Tips for Avoiding Disputes</h2>
          </div>
          
          <div className="card-body">
            <div className="tips-list">
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Always double-check your bets and transactions before confirming.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Read the terms and conditions for bonuses and promotions carefully.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Keep a record of transaction IDs and receipts for reference.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Contact support immediately if something seems incorrect.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="conclusion-card">
          <div className="card-body">
            <p className="conclusion-text">
              Our goal at JeetbuzzGames.com is to provide a seamless, enjoyable, and fair gaming experience. Through our dispute resolution process, we ensure that any issue is handled efficiently and transparently, giving you peace of mind while playing online casino games, live casino, and sports betting.
            </p>
            
            <div className="final-message">
              <FaHandshake className="final-icon" />
              <p className="final-text">
                <strong>We're here to help! Contact our support team anytime for assistance with any gaming concerns.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolution;
