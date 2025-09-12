import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserPlus, FaWallet, FaGamepad, FaBullseye, FaDollarSign, FaCheckCircle, FaChartLine, FaLightbulb, FaBookOpen, FaGift, FaShieldAlt, FaPlay, FaCreditCard, FaTrophy, FaDice, FaFootballBall, FaChess, FaStar } from 'react-icons/fa';
import './HowToPlaceBet.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const HowToPlaceBet = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'How to Place a Bet – JeetbuzzGames.com | Easy Online Betting Guide';
    updateOrCreateMeta(
      'description',
      'Learn how to place a bet on JeetbuzzGames.com. Step-by-step guide for online casino, live games, and sports betting in Bangladesh. Quick, simple, and secure betting experience.'
    );
    updateOrCreateMeta(
      'keywords',
      'how to place a bet, Jeetbuzz online betting, JeetbuzzGames betting guide, online casino Bangladesh, live casino betting, sports betting Bangladesh, Jeetbuzz betting tutorial'
    );
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Create or Log In to Your Account',
      description: 'Before placing a bet, make sure you have an active JeetbuzzGames account. If you don\'t have one, click Sign Up, enter your details, and verify your account via email or phone. If you already have an account, just log in using your credentials.',
      icon: FaUserPlus,
      details: [
        'Click Sign Up button on homepage',
        'Enter your personal details',
        'Verify your email or phone number',
        'Log in with your credentials'
      ]
    },
    {
      id: 2,
      title: 'Add Funds to Your Wallet',
      description: 'To place a bet, you need money in your account. Go to the Wallet section and deposit using secure methods such as Bkash, Nagad, Rocket, bank transfer, or card payment. Deposits are usually instant, so you can start betting immediately.',
      icon: FaWallet,
      details: [
        'Go to Wallet section',
        'Choose deposit method (Bkash, Nagad, Rocket)',
        'Enter deposit amount',
        'Complete secure payment'
      ]
    },
    {
      id: 3,
      title: 'Choose Your Game or Sport',
      description: 'Browse our platform and select the game or sporting event you want to bet on. Options include live casino, roulette, blackjack, slots, poker, cricket, football, and esports.',
      icon: FaGamepad,
      details: [
        'Browse available games',
        'Select live casino, slots, or sports',
        'Choose specific game or match',
        'Review game rules and odds'
      ]
    },
    {
      id: 4,
      title: 'Select Your Bet Type',
      description: 'Each game or match may offer multiple types of bets. For example, in cricket, you can bet on match winner, total runs, or player performance, while in live casino, you can bet on red/black in roulette or banker/player in baccarat.',
      icon: FaBullseye,
      details: [
        'Choose bet type (match winner, total runs)',
        'Select specific outcomes',
        'Review available betting options',
        'Understand bet odds and payouts'
      ]
    },
    {
      id: 5,
      title: 'Enter Your Stake',
      description: 'Decide how much money you want to bet and enter the amount. Always bet responsibly and only use money you can afford to play with.',
      icon: FaDollarSign,
      details: [
        'Enter your bet amount',
        'Check minimum/maximum limits',
        'Review potential winnings',
        'Bet responsibly within your budget'
      ]
    },
    {
      id: 6,
      title: 'Confirm Your Bet',
      description: 'After reviewing your selections, click Confirm Bet. Your bet will be added to your active bets list, which you can monitor in your account dashboard.',
      icon: FaCheckCircle,
      details: [
        'Review all bet details',
        'Click Confirm Bet button',
        'Check bet confirmation',
        'Monitor in active bets list'
      ]
    },
    {
      id: 7,
      title: 'Track Your Bets and Winnings',
      description: 'Once the game or match is live, you can track results in real-time. If your bet wins, your winnings will be automatically credited to your account. You can then withdraw or use them for further bets.',
      icon: FaChartLine,
      details: [
        'Track live results',
        'Monitor bet status',
        'Receive automatic winnings',
        'Withdraw or reinvest winnings'
      ]
    }
  ];

  const tips = [
    {
      icon: FaLightbulb,
      title: 'Start Small',
      description: 'Place smaller bets while learning the games.'
    },
    {
      icon: FaBookOpen,
      title: 'Understand the Rules',
      description: 'Each game or sport has specific rules—read them carefully.'
    },
    {
      icon: FaGift,
      title: 'Use Promotions',
      description: 'Check the bonus and cashback offers to maximize your betting experience.'
    },
    {
      icon: FaShieldAlt,
      title: 'Play Responsibly',
      description: 'Set limits to enjoy gaming safely and avoid overspending.'
    }
  ];

  const gameTypes = [
    { icon: FaDice, name: 'Live Casino', description: 'Roulette, Blackjack, Baccarat' },
    { icon: FaGamepad, name: 'Online Slots', description: 'Progressive Jackpots, Video Slots' },
    { icon: FaChess, name: 'Poker Games', description: 'Texas Hold\'em, Omaha, Stud' },
    { icon: FaFootballBall, name: 'Sports Betting', description: 'Cricket, Football, Basketball' },
    { icon: FaTrophy, name: 'E-Sports', description: 'CS:GO, Dota 2, League of Legends' }
  ];

  const paymentMethods = [
    { icon: FaCreditCard, name: 'Bkash', description: 'Instant deposits' },
    { icon: FaWallet, name: 'Nagad', description: 'Secure payments' },
    { icon: FaCreditCard, name: 'Rocket', description: 'Quick transfers' },
    { icon: FaCreditCard, name: 'Bank Transfer', description: 'Traditional banking' },
    { icon: FaCreditCard, name: 'Card Payment', description: 'Credit/Debit cards' }
  ];

  return (
    <div className="how-to-bet-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="how-to-bet-header">How to Place a Bet – JeetbuzzGames.com</h1>
      </div>
      
      <div className="how-to-bet-content">
        {/* Introduction */}
        <div className="intro-section">
          <div className="intro-card">
            <div className="intro-header">
              <FaPlay className="intro-icon" />
              <h2 className="intro-title">Easy Online Betting Guide</h2>
            </div>
            <div className="intro-body">
              <p className="intro-text">
                Placing a bet on JeetbuzzGames.com is simple, fun, and secure. Whether you are interested in online casino games, live casino, poker, or sports betting, this guide will help you get started in just a few steps.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="steps-section">
          <div className="section-header">
            <h2 className="section-title">Step-by-Step Betting Guide</h2>
            <p className="section-subtitle">Follow these 7 simple steps to place your first bet</p>
          </div>

          <div className="steps-container">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="step-card">
                  <div className="step-header">
                    <div className="step-number">{step.id}</div>
                    <div className="step-icon">
                      <IconComponent />
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  
                  <div className="step-body">
                    <p className="step-description">{step.description}</p>
                    
                    <div className="step-details">
                      <h4 className="details-title">Quick Steps:</h4>
                      <ul className="details-list">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="detail-item">
                            <FaStar className="detail-icon" />
                            <span className="detail-text">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Types */}
        <div className="game-types-section">
          <div className="section-header">
            <h2 className="section-title">Available Games & Sports</h2>
            <p className="section-subtitle">Choose from our wide variety of betting options</p>
          </div>

          <div className="game-types-grid">
            {gameTypes.map((game, index) => {
              const IconComponent = game.icon;
              return (
                <div key={index} className="game-type-card">
                  <div className="game-type-icon">
                    <IconComponent />
                  </div>
                  <h3 className="game-type-name">{game.name}</h3>
                  <p className="game-type-description">{game.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods-section">
          <div className="section-header">
            <h2 className="section-title">Secure Payment Methods</h2>
            <p className="section-subtitle">Deposit funds safely and instantly</p>
          </div>

          <div className="payment-methods-grid">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="payment-method-card">
                  <div className="payment-method-icon">
                    <IconComponent />
                  </div>
                  <h3 className="payment-method-name">{method.name}</h3>
                  <p className="payment-method-description">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <div className="section-header">
            <h2 className="section-title">Tips for Successful Betting</h2>
            <p className="section-subtitle">Maximize your betting experience with these helpful tips</p>
          </div>

          <div className="tips-grid">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="tip-card">
                  <div className="tip-icon">
                    <IconComponent />
                  </div>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-description">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusion */}
        <div className="conclusion-section">
          <div className="conclusion-card">
            <div className="conclusion-header">
              <FaTrophy className="conclusion-icon" />
              <h2 className="conclusion-title">Ready to Start Betting?</h2>
            </div>
            <div className="conclusion-body">
              <p className="conclusion-text">
                Placing a bet at JeetbuzzGames.com is fast, secure, and exciting. Follow these simple steps and enjoy the thrill of online casino, live games, and sports betting in Bangladesh.
              </p>
              
              <div className="conclusion-cta">
                <button className="cta-button" onClick={() => navigate('/')}>
                  <FaPlay className="cta-icon" />
                  <span className="cta-text">Start Betting Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlaceBet;
