import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaFileContract, FaCheckCircle, FaUserCheck, FaUserPlus, FaShieldAlt, FaCopyright, FaUpload, FaLock, FaExclamationTriangle, FaGavel, FaEdit, FaBalanceScale, FaEnvelope, FaGlobe, FaHandshake, FaBookOpen, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import './TermsOfService.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'JeetBuzz Games – Terms of Service | User Agreement & Policies';
    updateOrCreateMeta(
      'description',
      'Read the JeetBuzz Games Terms of Service to understand the rules, user responsibilities, and policies for using our online gaming platform safely and securely.'
    );
    updateOrCreateMeta(
      'keywords',
      'JeetBuzz Terms of Service, JeetBuzz user agreement, online gaming policies, casino rules, gaming website terms, JeetBuzz.com policies'
    );
  }, []);

  const terms = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      icon: FaCheckCircle,
      content: 'By using JeetBuzzGames.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you should not use the Site.',
      details: [
        'Read and understand all terms before using the site',
        'Agreement to be bound by all terms and conditions',
        'Right to discontinue use if terms are not acceptable',
        'Terms apply to all users of the platform'
      ]
    },
    {
      id: 2,
      title: 'Eligibility',
      icon: FaUserCheck,
      content: 'You must be at least 18 years old, or the minimum legal age to use online services in your jurisdiction, whichever is higher. By using our services, you confirm that you meet these eligibility requirements.',
      details: [
        'Minimum age requirement: 18 years or legal age',
        'Confirmation of eligibility requirements',
        'Compliance with local jurisdiction laws',
        'Verification of age and legal capacity'
      ]
    },
    {
      id: 3,
      title: 'Account Registration',
      icon: FaUserPlus,
      content: 'Some features of the Site may require account registration. You agree to provide accurate, complete, and current information during registration. You are responsible for keeping your account credentials secure and confidential. You are solely responsible for all activities that occur under your account.',
      details: [
        'Provide accurate and complete information',
        'Keep account credentials secure and confidential',
        'Sole responsibility for all account activities',
        'Regular update of account information'
      ]
    },
    {
      id: 4,
      title: 'Acceptable Use',
      icon: FaShieldAlt,
      content: 'You agree to use the Site only for lawful purposes. You must not: Violate any applicable laws or regulations. Attempt to gain unauthorized access to any part of the Site. Interfere with or disrupt the Site or its servers. Post content that is illegal, harmful, or infringes on intellectual property rights.',
      details: [
        'Use site only for lawful purposes',
        'No unauthorized access attempts',
        'No interference with site operations',
        'No illegal or harmful content posting'
      ]
    },
    {
      id: 5,
      title: 'Intellectual Property',
      icon: FaCopyright,
      content: 'All content on the Site, including logos, graphics, text, and software, is the property of JeetBuzzGames.com or its licensors. You may not copy, reproduce, modify, distribute, or create derivative works without our written permission.',
      details: [
        'All site content is proprietary property',
        'No copying or reproduction without permission',
        'No modification or distribution of content',
        'No creation of derivative works'
      ]
    },
    {
      id: 6,
      title: 'User Content',
      icon: FaUpload,
      content: 'Any content you submit to the Site grants us a worldwide, non-exclusive, royalty-free license to use, display, and distribute that content. You are responsible for ensuring that your content does not violate any laws or third-party rights.',
      details: [
        'Grant of worldwide license for user content',
        'Non-exclusive and royalty-free usage rights',
        'Responsibility for content legality',
        'Protection of third-party rights'
      ]
    },
    {
      id: 7,
      title: 'Privacy Policy',
      icon: FaLock,
      content: 'Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.',
      details: [
        'Privacy Policy governs data collection',
        'Explanation of data usage practices',
        'Protection of personal information',
        'Compliance with privacy regulations'
      ]
    },
    {
      id: 8,
      title: 'Limitation of Liability',
      icon: FaExclamationTriangle,
      content: 'JeetBuzzGames.com is not responsible for any direct, indirect, incidental, or consequential damages arising from your use of the Site. We do not guarantee that the Site will be uninterrupted, error-free, or free of viruses.',
      details: [
        'No responsibility for direct damages',
        'No responsibility for indirect damages',
        'No guarantee of uninterrupted service',
        'No guarantee of error-free operation'
      ]
    },
    {
      id: 9,
      title: 'Indemnification',
      icon: FaHandshake,
      content: 'You agree to indemnify, defend, and hold harmless JeetBuzzGames.com, its affiliates, and employees from any claims, damages, losses, or expenses arising from your violation of these Terms or misuse of the Site.',
      details: [
        'Agreement to indemnify the company',
        'Defense against claims and damages',
        'Protection of affiliates and employees',
        'Coverage of terms violations'
      ]
    },
    {
      id: 10,
      title: 'Modifications to Terms',
      icon: FaEdit,
      content: 'We may update or modify these Terms at any time. The latest version will always be available on the Site. Your continued use of the Site after changes indicates your acceptance of the revised Terms.',
      details: [
        'Right to update terms at any time',
        'Latest version always available on site',
        'Continued use indicates acceptance',
        'Notification of significant changes'
      ]
    },
    {
      id: 11,
      title: 'Governing Law',
      icon: FaBalanceScale,
      content: 'These Terms are governed by the laws of the jurisdiction where JeetBuzzGames.com operates. Any disputes arising from these Terms will be resolved in the courts of that jurisdiction.',
      details: [
        'Terms governed by local jurisdiction laws',
        'Disputes resolved in local courts',
        'Compliance with applicable regulations',
        'Legal framework for enforcement'
      ]
    },
    {
      id: 12,
      title: 'Contact Us',
      icon: FaEnvelope,
      content: 'If you have any questions about these Terms, you can contact us at: Website: www.jeetbuzzgames.com, Email: johnokwin@jeetbuzzgames.com',
      details: [
        'Contact for questions about terms',
        'Website: www.jeetbuzzgames.com',
        'Email: johnokwin@jeetbuzzgames.com',
        'Customer support availability',
        'Response time for inquiries'
      ]
    }
  ];

  return (
    <div className="terms-of-service-container">
      <div className="page-header-with-back">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="terms-of-service-header">Terms of Service</h1>
      </div>
      
      <div className="terms-of-service-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-card">
            <div className="welcome-header">
              <FaFileContract className="welcome-icon" />
              <h2 className="welcome-title">Welcome to JeetBuzzGames.com</h2>
            </div>
            <div className="welcome-body">
              <p className="welcome-text">
                By accessing or using our website or services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="terms-sections">
          <div className="section-header">
            <h2 className="section-title">Terms and Conditions</h2>
            <p className="section-subtitle">Please review all terms carefully before using our services</p>
          </div>

          <div className="terms-list">
            {terms.map((term) => {
              const IconComponent = term.icon;
              return (
                <div key={term.id} className="term-card">
                  <div className="term-header">
                    <div className="term-number">{term.id}</div>
                    <div className="term-icon">
                      <IconComponent />
                    </div>
                    <h3 className="term-title">{term.title}</h3>
                  </div>
                  
                  <div className="term-body">
                    <p className="term-content">{term.content}</p>
                    
                    <div className="term-details">
                      <h4 className="details-title">Key Points:</h4>
                      <ul className="details-list">
                        {term.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="detail-item">
                            <FaInfoCircle className="detail-icon" />
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

        {/* Important Notice */}
        <div className="important-notice-section">
          <div className="notice-card">
            <div className="notice-header">
              <FaQuestionCircle className="notice-icon" />
              <h2 className="notice-title">Important Notice</h2>
            </div>
            <div className="notice-body">
              <p className="notice-text">
                These Terms of Service constitute a legally binding agreement between you and JeetBuzzGames.com. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                If you have any questions or concerns, please contact our support team before proceeding.
              </p>
              
              <div className="notice-features">
                <div className="notice-feature">
                  <FaBookOpen className="feature-icon" />
                  <div className="feature-content">
                    <h3 className="feature-title">Read Carefully</h3>
                    <p className="feature-text">Take time to understand all terms and conditions</p>
                  </div>
                </div>
                
                <div className="notice-feature">
                  <FaGavel className="feature-icon" />
                  <div className="feature-content">
                    <h3 className="feature-title">Legal Agreement</h3>
                    <p className="feature-text">These terms form a legally binding contract</p>
                  </div>
                </div>
                
                <div className="notice-feature">
                  <FaGlobe className="feature-icon" />
                  <div className="feature-content">
                    <h3 className="feature-title">Contact Support</h3>
                    <p className="feature-text">Reach out if you have any questions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <div className="contact-card">
            <div className="contact-header">
              <FaEnvelope className="contact-icon" />
              <h2 className="contact-title">Need Help?</h2>
            </div>
            <div className="contact-body">
              <p className="contact-text">
                If you have any questions about these Terms of Service or need clarification on any points, 
                please don't hesitate to contact our support team.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <FaGlobe className="contact-item-icon" />
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Website</h3>
                    <p className="contact-item-text">www.jeetbuzzgames.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-item-icon" />
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Email</h3>
                    <p className="contact-item-text">johnokwin@jeetbuzzgames.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-item-icon" />
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Support</h3>
                    <p className="contact-item-text">Available 24/7 for your assistance</p>
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

export default TermsOfService;
