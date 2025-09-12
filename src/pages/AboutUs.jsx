import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutUs.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'About Us – JeetbuzzGames About Us | Trusted Online Casino & Gaming Platform';
    updateOrCreateMeta(
      'description',
      'Learn about JeetbuzzGames.com, a trusted online casino and gaming platform in Bangladesh. Discover our mission, vision, games, promotions, and commitment to secure, fair, and enjoyable gaming.'
    );
    updateOrCreateMeta(
      'keywords',
      'JeetbuzzGames, online casino Bangladesh, about Jeetbuzz, online gaming platform, trusted casino, live casino, sports betting'
    );
  }, []);

  return (
    <div className="about-us-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="about-us-header">About Us</h1>
      </div>
      
      <div className="about-us-content">
        {/* Welcome Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Welcome to JeetbuzzGames.com</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              At JeetbuzzGames.com, we bring exciting online gaming experiences right to your fingertips. Whether you enjoy online casino games, live dealer tables, poker, or sports betting, we offer a platform that is secure, fair, and easy to use.
            </p>
            <p className="main-text">
              Founded with a passion for online entertainment, our mission is to provide players in Bangladesh and around the world with a trustworthy gaming environment. Every player is important to us, and we strive to make your gaming experience fun, rewarding, and safe.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Our Mission</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">Our mission is simple:</p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🎮</div>
                <div className="feature-text">
                  <strong>Deliver a top-quality gaming experience</strong> with smooth gameplay, stunning graphics, and fast loading times.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <strong>Provide fair and secure games</strong>, using advanced technology and regular audits to ensure transparency.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎁</div>
                <div className="feature-text">
                  <strong>Reward our players generously</strong>, with exciting bonuses, promotions, loyalty programs, and VIP perks.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🛠️</div>
                <div className="feature-text">
                  <strong>Support our players 24/7</strong>, ensuring every question, concern, or issue is resolved quickly and efficiently.
                </div>
              </div>
            </div>
            
            <p className="description-text">
              We are committed to responsible gaming and ensuring all players can enjoy our services safely and responsibly.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Our Vision</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              At JeetbuzzGames.com, we envision a future where online gaming is accessible, secure, and fun for everyone. We aim to:
            </p>
            
            <div className="requirements-list">
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span>Become the most trusted online casino and sports betting platform in Bangladesh.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span>Offer innovative games, live events, and interactive experiences to keep players engaged.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span>Foster a community of happy, satisfied, and loyal players who enjoy both entertainment and rewards.</span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">What We Offer</h2>
          </div>
          
          <div className="card-body">
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🎰</div>
                <div className="feature-text">
                  <strong>Online Casino Games</strong><br />
                  Enjoy a wide variety of slots, table games, and jackpots, all designed to deliver excitement and fairness.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🃏</div>
                <div className="feature-text">
                  <strong>Live Casino</strong><br />
                  Experience the thrill of a real casino from your home with live dealers, live roulette, live blackjack, and live baccarat.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚽</div>
                <div className="feature-text">
                  <strong>Sports Betting</strong><br />
                  Bet on cricket, football, and other popular sports, with competitive odds and live updates.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎁</div>
                <div className="feature-text">
                  <strong>Bonuses & Promotions</strong><br />
                  We reward our players with welcome bonuses, deposit matches, cashback offers, and seasonal promotions.
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <div className="feature-text">
                  <strong>VIP & Loyalty Program</strong><br />
                  Our loyal players enjoy exclusive perks, higher cashback, and personalized rewards through our VIP program.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Why Choose JeetbuzzGames.com?</h2>
          </div>
          
          <div className="card-body">
            <div className="requirements-list">
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span><strong>Trusted & Secure:</strong> Licensed and regularly audited for fairness.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span><strong>24/7 Customer Support:</strong> We are always available to help.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span><strong>Fast Payments:</strong> Quick and reliable deposits and withdrawals.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span><strong>User-Friendly Platform:</strong> Easy to navigate, whether on desktop or mobile.</span>
              </div>
              <div className="requirement-item">
                <span className="checkmark">✓</span>
                <span><strong>Exciting Games & Rewards:</strong> A wide range of games and generous bonuses.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Community Section */}
        <div className="content-card">
          <div className="card-header">
            <h2 className="section-title">Join Our Community</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              At JeetbuzzGames.com, every player matters. Whether you are a seasoned gamer or a beginner, we make sure your experience is safe, fun, and rewarding. Join thousands of players today and discover why JeetbuzzGames.com is Bangladesh's trusted online casino and gaming platform.
            </p>
            
            <div className="confirmation-box">
              <p className="confirmation-text">
                <strong>Ready to start your gaming journey?</strong> Sign up today and experience the excitement of JeetbuzzGames.com!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
