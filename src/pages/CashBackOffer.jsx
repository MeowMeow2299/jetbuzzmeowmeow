import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGift, FaGamepad, FaCoins, FaShieldAlt, FaTrophy, FaMobileAlt, FaUsers, FaQuestionCircle, FaCheckCircle, FaStar, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import './CashBackOffer.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const CashBackOffer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Jeetbuzz Cashback Offer – Get Rewards on Losses at JeetbuzzGames';
    updateOrCreateMeta(
      'description',
      'Claim your Jeetbuzz Cashback Offer at JeetbuzzGames.com. Receive a percentage of your losses back while playing online casino, live games, slots, poker, and sports betting in Bangladesh.'
    );
    updateOrCreateMeta(
      'keywords',
      'Jeetbuzz cashback, Jeetbuzz cashback offer, Jeetbuzz online casino rewards, Jeetbuzz live casino cashback, Jeetbuzz slots cashback, Jeetbuzz sports betting cashback, Jeetbuzz bonus, Jeetbuzz promotions'
    );
  }, []);

  return (
    <div className="cashback-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="cashback-header">Jeetbuzz Cashback Offer</h1>
      </div>
      
      <div className="cashback-content">
        <div className="intro-card">
          <div className="card-header">
            <FaGift className="header-icon" />
            <h2 className="section-title">Boost Your Gaming Experience with Jeetbuzz Cashback Offer</h2>
          </div>
          
          <div className="card-body">
            <p className="intro-text">
              At JeetbuzzGames.com, we value our players and believe that every game should come with a reward, even when luck isn't on your side. That's why we offer the Jeetbuzz Cashback Offer, a unique promotion where players receive a percentage of their losses back, giving you a second chance to win.
            </p>
            <p className="intro-text">
              This cashback system is designed to reduce the risk of losses while encouraging players to explore more games and enjoy a stress-free gaming experience. Whether you're playing live casino, online slots, poker, or sports betting, the cashback offer ensures your experience is always rewarding.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaCoins className="header-icon" />
            <h2 className="section-title">What is the Jeetbuzz Cashback Offer?</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">
              The Jeetbuzz Cashback Offer allows players to get back a fixed percentage of their net losses over a defined period. Unlike standard bonuses, cashback is credited directly to your account, which can be used for further play without additional deposits.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaGamepad />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Applicable Games</h3>
                  <p className="feature-text">Available for slots, live casino, poker, and sports betting.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaCalendarAlt />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Regular Payouts</h3>
                  <p className="feature-text">Cashback is calculated daily, weekly, or monthly depending on the promotion.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaCheckCircle />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Automatic or Manual Claim</h3>
                  <p className="feature-text">Some cashback offers are automatic, while others require you to activate the offer from your account.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Safe & Transparent</h3>
                  <p className="feature-text">All cashback calculations are secure and visible in your dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaTrophy className="header-icon" />
            <h2 className="section-title">How to Claim Your Jeetbuzz Cashback</h2>
          </div>
          
          <div className="card-body">
            <p className="main-text">Claiming cashback at JeetbuzzGames.com is easy:</p>
            
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Sign In or Register</h3>
                  <p className="step-text">Log in to your Jeetbuzz account or create a new one.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Play Eligible Games</h3>
                  <p className="step-text">Enjoy slots, live casino, poker, or sports betting during the cashback period.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Track Your Losses</h3>
                  <p className="step-text">Use the affiliate dashboard or promotions page to track eligible losses.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Activate or Receive Cashback</h3>
                  <p className="step-text">Some offers require activation, while others are credited automatically.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3 className="step-title">Use Cashback Funds</h3>
                  <p className="step-text">Play again or withdraw your cashback according to the terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaStar className="header-icon" />
            <h2 className="section-title">Benefits of Jeetbuzz Cashback Offer</h2>
          </div>
          
          <div className="card-body">
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🎰</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Play with Confidence</h3>
                  <p className="benefit-text">With cashback, you can play longer and explore new games without worrying about losing all your funds.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💸</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Reduce Gaming Risks</h3>
                  <p className="benefit-text">A percentage of your losses is returned, allowing you to minimize the impact of unlucky streaks.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🏆</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Boost Your Winnings Potential</h3>
                  <p className="benefit-text">Reinvesting cashback into games can increase your chances of hitting big wins on slots, poker, or live dealer tables.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✅</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Transparent and Reliable</h3>
                  <p className="benefit-text">JeetbuzzGames.com ensures clear rules, fair calculation, and fast crediting, making the cashback experience trustworthy and user-friendly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaGamepad className="header-icon" />
            <h2 className="section-title">Recommended Games for Cashback</h2>
          </div>
          
          <div className="card-body">
            <div className="games-list">
              <div className="game-item">
                <div className="game-icon">🎰</div>
                <div className="game-content">
                  <h3 className="game-title">Online Slots</h3>
                  <p className="game-text">Use cashback to spin high-paying jackpots, progressive slots, and popular video slots, enhancing the opportunity for big wins.</p>
                </div>
              </div>
              
              <div className="game-item">
                <div className="game-icon">🎲</div>
                <div className="game-content">
                  <h3 className="game-title">Live Casino Games</h3>
                  <p className="game-text">Enjoy real-time blackjack, baccarat, roulette, and poker using your cashback funds to practice strategies and enjoy authentic casino action.</p>
                </div>
              </div>
              
              <div className="game-item">
                <div className="game-icon">⚽</div>
                <div className="game-content">
                  <h3 className="game-title">Sports Betting</h3>
                  <p className="game-text">Sports enthusiasts can place additional bets on cricket, football, or esports using cashback funds, giving you another chance to win.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaTrophy className="header-icon" />
            <h2 className="section-title">Tips to Maximize Your Cashback</h2>
          </div>
          
          <div className="card-body">
            <div className="tips-list">
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Play Eligible Games Only – Make sure your gameplay counts toward the cashback.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Check the Cashback Schedule – Daily, weekly, or monthly cashback may have different rules.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Track Your Performance – Use the dashboard to see losses and cashback amounts.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Combine with Other Promotions – Some bonuses and offers can be combined strategically.</span>
              </div>
              <div className="tip-item">
                <span className="tip-checkmark">✓</span>
                <span className="tip-text">Use Mobile App – Claim cashback easily via the Jeetbuzz App BD for Android and iOS.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaStar className="header-icon" />
            <h2 className="section-title">Extra Perks for Cashback Players</h2>
          </div>
          
          <div className="card-body">
            <div className="perks-list">
              <div className="perk-item">
                <div className="perk-icon">
                  <FaStar />
                </div>
                <div className="perk-content">
                  <h3 className="perk-title">VIP Cashback Boosts</h3>
                  <p className="perk-text">Higher cashback percentages for loyal VIP players.</p>
                </div>
              </div>
              
              <div className="perk-item">
                <div className="perk-icon">
                  <FaCalendarAlt />
                </div>
                <div className="perk-content">
                  <h3 className="perk-title">Seasonal Cashback Promotions</h3>
                  <p className="perk-text">Special cashback during festivals, tournaments, and cricket leagues.</p>
                </div>
              </div>
              
              <div className="perk-item">
                <div className="perk-icon">
                  <FaUserFriends />
                </div>
                <div className="perk-content">
                  <h3 className="perk-title">Referral Cashback Rewards</h3>
                  <p className="perk-text">Earn additional cashback by referring friends who play actively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="conclusion-card">
          <div className="card-body">
            <p className="conclusion-text">
              The Jeetbuzz Cashback Offer is designed to make your online gaming experience in Bangladesh more rewarding, safe, and enjoyable. Whether you enjoy casino games, slots, live tables, poker, or sports betting, cashback gives you the confidence to play more and win more.
            </p>
            
            <div className="final-message">
              <FaGift className="final-icon" />
              <p className="final-text">
                <strong>Don't miss out! Sign up at JeetbuzzGames.com, claim your Cashback Offer, and turn every game into a winning opportunity!</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <FaQuestionCircle className="header-icon" />
            <h2 className="section-title">FAQ Section</h2>
          </div>
          
          <div className="card-body">
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">What is the Jeetbuzz Cashback Offer?</span>
                </div>
                <div className="faq-answer">
                  The Jeetbuzz Cashback Offer allows players to receive a percentage of their net losses back while playing slots, live casino, poker, or sports betting. It helps reduce risk and gives a second chance to win.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">How can I claim the Jeetbuzz cashback?</span>
                </div>
                <div className="faq-answer">
                  Sign in at JeetbuzzGames.com, play eligible games, and your cashback will either be automatically credited or can be activated manually from the promotions page.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">Which games are eligible for cashback?</span>
                </div>
                <div className="faq-answer">
                  Eligible games include online slots, live casino games (blackjack, baccarat, poker, roulette), and sports betting such as cricket, football, and esports.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">How often is cashback credited?</span>
                </div>
                <div className="faq-answer">
                  Jeetbuzz offers daily, weekly, or monthly cashback depending on the promotion. Players can check their dashboard for the exact schedule.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">Can I use cashback to play other games?</span>
                </div>
                <div className="faq-answer">
                  Yes! Cashback funds can be reinvested in other games or withdrawn according to Jeetbuzz's bonus and withdrawal rules.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">❓</span>
                  <span className="faq-text">Is Jeetbuzz cashback safe and reliable?</span>
                </div>
                <div className="faq-answer">
                  Absolutely. JeetbuzzGames.com ensures transparent calculations, secure transactions, and fair play for all cashback offers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashBackOffer;
