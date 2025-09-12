import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaQuestionCircle, FaUser, FaCreditCard, FaGift, FaGamepad, FaCrown, FaHandshake, FaShieldAlt, FaCog, FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import './HelpCenterFAQ.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const HelpCenterFAQ = () => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = 'Help Center / FAQ – JeetbuzzGames.com';
    updateOrCreateMeta(
      'description',
      'Get answers to frequently asked questions about JeetbuzzGames.com account, deposits, withdrawals, bonuses, games, VIP program, affiliate program, security, and technical support.'
    );
    updateOrCreateMeta(
      'keywords',
      'JeetbuzzGames FAQ, help center, customer support, account registration, deposits withdrawals, bonuses promotions, games platforms, VIP loyalty program, affiliate program, security privacy, technical support'
    );
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories', icon: FaQuestionCircle },
    { id: 'account', name: 'Account & Registration', icon: FaUser },
    { id: 'deposits', name: 'Deposits & Withdrawals', icon: FaCreditCard },
    { id: 'bonuses', name: 'Bonuses & Promotions', icon: FaGift },
    { id: 'games', name: 'Games & Platforms', icon: FaGamepad },
    { id: 'vip', name: 'VIP / Loyalty Program', icon: FaCrown },
    { id: 'affiliate', name: 'Affiliate Program', icon: FaHandshake },
    { id: 'security', name: 'Security & Privacy', icon: FaShieldAlt },
    { id: 'technical', name: 'Technical Support', icon: FaCog }
  ];

  const faqData = [
    // Account & Registration
    { id: 1, category: 'account', question: 'How do I create a JeetbuzzGames.com account?', answer: 'Click the Sign Up button on the homepage, enter your details, and verify your email or phone number to complete registration.' },
    { id: 2, category: 'account', question: 'Can I have multiple accounts?', answer: 'No, each player is allowed only one account. Multiple accounts may result in suspension.' },
    { id: 3, category: 'account', question: 'How do I reset my password?', answer: 'Click Forgot Password on the login page and follow instructions to reset via email or SMS.' },
    { id: 4, category: 'account', question: 'How can I update my personal information?', answer: 'Go to Account Settings and update your profile. Some information may require verification.' },
    { id: 5, category: 'account', question: 'What should I do if my account is blocked?', answer: 'Contact Customer Support via live chat or email to resolve account issues.' },
    { id: 36, category: 'account', question: 'Can I change my registered email?', answer: 'Yes, go to Account Settings → Email, update your email, and verify it through the confirmation link.' },
    { id: 37, category: 'account', question: 'Can I change my registered phone number?', answer: 'Yes, phone number changes require verification via SMS or support confirmation.' },
    { id: 38, category: 'account', question: 'What should I do if I forget my username?', answer: 'Contact Customer Support with your registered email or phone number to recover your username.' },
    { id: 39, category: 'account', question: 'How do I verify my account?', answer: 'Upload government-issued ID and proof of address via the verification section in your account dashboard.' },
    { id: 40, category: 'account', question: 'How long does account verification take?', answer: 'Verification usually takes 24–48 hours, depending on document clarity and volume of requests.' },
    { id: 41, category: 'account', question: 'Can I use a VPN to register?', answer: 'We recommend using your real IP and location; VPNs may cause registration issues.' },
    { id: 42, category: 'account', question: 'Can I register from outside Bangladesh?', answer: 'Yes, but some features and promotions may be region-specific.' },
    { id: 43, category: 'account', question: 'What if my account is hacked?', answer: 'Immediately contact support, change your password, and enable two-factor authentication.' },
    { id: 44, category: 'account', question: 'Can I link multiple devices to my account?', answer: 'Yes, you can log in from mobile, tablet, and desktop, but avoid sharing your password.' },
    { id: 45, category: 'account', question: 'How do I close my account temporarily?', answer: 'Contact Customer Support to request a temporary account suspension.' },
    { id: 46, category: 'account', question: 'How do I update my payment method?', answer: 'Go to Wallet → Payment Methods, add or remove methods, and verify them if required.' },
    { id: 47, category: 'account', question: 'Is there a limit to deposits for new users?', answer: 'Yes, initial deposits may have a daily limit, which increases as your account matures.' },
    { id: 48, category: 'account', question: 'Can I recover my account if I forget login details?', answer: 'Yes, use the Forgot Password or Contact Support options for recovery.' },
    { id: 49, category: 'account', question: 'Can I register with social media accounts?', answer: 'Currently, registration is via email or phone number; social media login is not available.' },
    { id: 50, category: 'account', question: 'Is age verification mandatory?', answer: 'Yes, all players must be 18+ or legal age to comply with gaming regulations.' },

    // Deposits & Withdrawals
    { id: 6, category: 'deposits', question: 'What deposit methods are available?', answer: 'You can deposit via Bkash, Nagad, Rocket, bank transfer, and credit/debit cards.' },
    { id: 7, category: 'deposits', question: 'Is there a minimum deposit?', answer: 'Yes, the minimum deposit is $10 (or equivalent in local currency).' },
    { id: 8, category: 'deposits', question: 'How long does it take for deposits to appear?', answer: 'Most deposits are instant, but some bank transfers may take up to 24 hours.' },
    { id: 9, category: 'deposits', question: 'How can I withdraw my winnings?', answer: 'Go to Wallet → Withdraw, choose your preferred method, and submit a request.' },
    { id: 10, category: 'deposits', question: 'How long do withdrawals take?', answer: 'Withdrawals are processed within 24-48 hours, depending on the payment method.' },
    { id: 51, category: 'deposits', question: 'Can I deposit in my local currency?', answer: 'Yes, deposits in BDT or USD are accepted depending on the payment method.' },
    { id: 52, category: 'deposits', question: 'Can I deposit using multiple payment methods?', answer: 'Yes, but each deposit must comply with the minimum and maximum limits.' },
    { id: 53, category: 'deposits', question: 'Can I schedule recurring deposits?', answer: 'Currently, recurring deposits are not supported.' },
    { id: 54, category: 'deposits', question: 'Are there fees for deposits?', answer: 'Most payment methods are free, but some banks may charge a small processing fee.' },
    { id: 55, category: 'deposits', question: 'How do I cancel a deposit?', answer: 'Deposits are usually instant. Contact support immediately if there\'s an error.' },
    { id: 56, category: 'deposits', question: 'Can I withdraw to a different account than I deposited?', answer: 'No, withdrawals must go to the same account used for deposits for security reasons.' },
    { id: 57, category: 'deposits', question: 'Are there withdrawal limits?', answer: 'Yes, daily, weekly, and monthly limits depend on your account type and verification status.' },
    { id: 58, category: 'deposits', question: 'What if my withdrawal is delayed?', answer: 'Contact Customer Support with your transaction ID; delays are rare and usually resolved quickly.' },
    { id: 59, category: 'deposits', question: 'Can I withdraw bonus money?', answer: 'Bonuses must meet wagering requirements before they can be withdrawn.' },
    { id: 60, category: 'deposits', question: 'How do I check withdrawal history?', answer: 'Go to Wallet → Transaction History to view past deposits and withdrawals.' },
    { id: 61, category: 'deposits', question: 'What payment methods are fastest for withdrawals?', answer: 'Bkash, Nagad, and Rocket usually process withdrawals within 24 hours.' },
    { id: 62, category: 'deposits', question: 'Can I change my withdrawal method after requesting a withdrawal?', answer: 'No, once submitted, withdrawals cannot be redirected.' },
    { id: 63, category: 'deposits', question: 'Is there a minimum withdrawal amount?', answer: 'Yes, the minimum withdrawal is $10 or equivalent in local currency.' },
    { id: 64, category: 'deposits', question: 'Are international withdrawals supported?', answer: 'Bank transfers may support international withdrawals, but local methods are faster.' },
    { id: 65, category: 'deposits', question: 'Can I withdraw multiple times per day?', answer: 'Yes, as long as you remain within daily withdrawal limits.' },

    // Bonuses & Promotions
    { id: 11, category: 'bonuses', question: 'What is the welcome bonus?', answer: 'New players receive a deposit match bonus on their first deposit, up to a certain limit.' },
    { id: 12, category: 'bonuses', question: 'Can I claim multiple bonuses?', answer: 'Yes, but each bonus has its own terms and conditions.' },
    { id: 13, category: 'bonuses', question: 'What is the cashback offer?', answer: 'Cashback returns a percentage of your net losses over a defined period.' },
    { id: 14, category: 'bonuses', question: 'How do I claim a bonus?', answer: 'Log in to your account, go to Promotions, and activate the bonus or it may be credited automatically.' },
    { id: 15, category: 'bonuses', question: 'Can bonuses be withdrawn immediately?', answer: 'Bonuses often have wagering requirements before withdrawal is allowed.' },

    // Games & Platforms
    { id: 16, category: 'games', question: 'What types of games are available?', answer: 'We offer online casino games, live casino, slots, poker, and sports betting.' },
    { id: 17, category: 'games', question: 'Can I play on mobile?', answer: 'Yes, our platform is fully mobile-friendly and available via app for Android and iOS.' },
    { id: 18, category: 'games', question: 'Are the games fair?', answer: 'Yes, all games use RNG technology and are regularly audited for fairness.' },
    { id: 19, category: 'games', question: 'Can I play for free?', answer: 'Some games offer demo mode so you can practice without risking real money.' },
    { id: 20, category: 'games', question: 'Is live casino available 24/7?', answer: 'Yes, our live casino tables operate around the clock for your convenience.' },

    // VIP / Loyalty Program
    { id: 21, category: 'vip', question: 'How do I join the VIP program?', answer: 'Play regularly to earn points; reaching certain tiers automatically enrolls you in the VIP program.' },
    { id: 22, category: 'vip', question: 'What benefits do VIP members get?', answer: 'VIP perks include higher cashback, exclusive bonuses, priority support, and access to VIP tournaments.' },
    { id: 23, category: 'vip', question: 'How are loyalty points earned?', answer: 'Points are earned by playing eligible games, including slots, poker, and live casino.' },
    { id: 24, category: 'vip', question: 'Can loyalty points be redeemed?', answer: 'Yes, points can be redeemed for cash, free spins, or bonus credits.' },
    { id: 25, category: 'vip', question: 'Is VIP membership free?', answer: 'Yes, VIP membership is automatic and free for qualifying players.' },

    // Affiliate Program
    { id: 26, category: 'affiliate', question: 'How do I become a Jeetbuzz affiliate?', answer: 'Register for the Affiliate Program, get your unique referral link, and start promoting.' },
    { id: 27, category: 'affiliate', question: 'How are affiliate commissions calculated?', answer: 'Commissions are based on player deposits or revenue share, depending on the chosen plan.' },
    { id: 28, category: 'affiliate', question: 'How do I track my referrals?', answer: 'Use the affiliate dashboard to view clicks, sign-ups, deposits, and earnings.' },
    { id: 29, category: 'affiliate', question: 'How do I get paid as an affiliate?', answer: 'Withdraw through Bkash, Nagad, Rocket, or bank transfers.' },
    { id: 30, category: 'affiliate', question: 'Is there a minimum payout for affiliates?', answer: 'Yes, minimum payout is $50 or equivalent in local currency.' },

    // Security & Privacy
    { id: 31, category: 'security', question: 'Is my personal information safe?', answer: 'Yes, we use SSL encryption and strict privacy policies to protect your data.' },
    { id: 32, category: 'security', question: 'How secure are financial transactions?', answer: 'All deposits and withdrawals use trusted payment gateways with advanced security measures.' },
    { id: 33, category: 'security', question: 'What should I do if I suspect fraud?', answer: 'Contact Customer Support immediately to report suspicious activity.' },
    { id: 34, category: 'security', question: 'Can I close my account permanently?', answer: 'Yes, submit a request via support, and your account will be deactivated after verification.' },
    { id: 35, category: 'security', question: 'Are underage players allowed?', answer: 'No, players must be 18+ or legal age in their country to play.' },

    // Technical Support
    { id: 66, category: 'technical', question: 'How do I contact technical support?', answer: 'Use the live chat feature on our website or email our technical support team for assistance.' },
    { id: 67, category: 'technical', question: 'What if the website is not loading?', answer: 'Check your internet connection, clear browser cache, or try using a different browser or device.' },
    { id: 68, category: 'technical', question: 'Can I play on multiple devices?', answer: 'Yes, you can access your account from multiple devices, but avoid simultaneous logins.' },
    { id: 69, category: 'technical', question: 'What browsers are supported?', answer: 'We support Chrome, Firefox, Safari, Edge, and other modern browsers.' },
    { id: 70, category: 'technical', question: 'Is there a mobile app?', answer: 'Yes, we have mobile apps available for Android and iOS devices.' }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : FaQuestionCircle;
  };

  return (
    <div className="help-center-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="help-center-header">Help Center / FAQ – JeetbuzzGames.com</h1>
      </div>
      
      <div className="help-center-content">
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-filter">
            <h3 className="filter-title">Categories:</h3>
            <div className="category-buttons">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <IconComponent className="category-icon" />
                    <span className="category-name">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Results */}
        <div className="faq-results">
          <div className="results-header">
            <h2 className="results-title">
              {selectedCategory === 'all' ? 'All FAQs' : categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="results-count">
              {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
            </p>
          </div>

          <div className="faq-list">
            {filteredFAQs.map(faq => {
              const IconComponent = getCategoryIcon(faq.category);
              const isExpanded = expandedItems[faq.id];
              
              return (
                <div key={faq.id} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => toggleExpanded(faq.id)}
                  >
                    <div className="question-content">
                      <IconComponent className="question-icon" />
                      <span className="question-text">{faq.question}</span>
                    </div>
                    <div className="expand-icon">
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="faq-answer">
                      <div className="answer-content">
                        <p className="answer-text">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="contact-support-section">
          <div className="contact-card">
            <div className="contact-header">
              <FaQuestionCircle className="contact-icon" />
              <h2 className="contact-title">Still Need Help?</h2>
            </div>
            <div className="contact-body">
              <p className="contact-text">
                Can't find the answer you're looking for? Our customer support team is here to help you 24/7.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <FaCog className="method-icon" />
                  <div className="method-content">
                    <h3 className="method-title">Live Chat</h3>
                    <p className="method-text">Get instant help from our support team</p>
                  </div>
                </div>
                <div className="contact-method">
                  <FaUser className="method-icon" />
                  <div className="method-content">
                    <h3 className="method-title">Email Support</h3>
                    <p className="method-text">Send us your questions via email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterFAQ;
