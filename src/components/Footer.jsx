import React from 'react';
import './Footer.css';

const footerItems = [
  'Company & Info',
  'About Us',
  'Contact',
  'Blog / News',
  'Mobile App (iOS / Android)',
  'Affiliate Program',
  'Help & Support',
  'Help Center (FAQ, Support, Live Chat)',
  'How to Place a Bet',
  'Responsible Gambling',
  'Self-Exclusion',
  'Dispute Resolution',
  'KYC Policies',
  'Anti-Money Laundering',
  'Legal & Policies',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Fairness & RNG Testing',
  'Payment Methods'
];

// Chia đều thành 4 cột nội dung + 1 cột icon
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Footer = () => {
  const contentColumns = chunkArray(footerItems, Math.ceil(footerItems.length / 4));

  return (
    <footer className="footer">
      <div className="footer-container">
        {contentColumns.map((items, index) => (
          <div className="footer-column" key={index}>
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Cột mạng xã hội + tải app */}
        <div className="footer-column">
          <h4>Connect & Download</h4>
          <div className="footer-icons">
            <div className="contact-info">
              <div className="email-contact">
                <i className="fas fa-envelope"></i>
                <span>hongha.hatu@gmail.com</span>
              </div>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="download-buttons">
              <a href="#" className="download-btn google-play">Google Play</a>
              <a href="#" className="download-btn app-store">App Store</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© JEET BUZZ GAMING. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;