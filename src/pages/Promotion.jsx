import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Promotion.css';

const Promotion = () => {
  const [activeCategory, setActiveCategory] = useState('নবাগত ডিসকা');

  const categories = [
    'All Category',
    'All',
    'আমানত',
    'ইলেকট্রনিক',
    'মাছ ধরা',
    'অন্যান্য',
    'APP ডাউনলোড করুন',
    'নবাগত ডিসকা'
  ];

  const promotions = [
    {
      id: 1,
      image: './photo/banner1.jpeg',
      title: 'বিনামূল্যে লাকি স্পিন',
      duration: '১ সেপ্টেম্বর থেকে ৩০ সেপ্টেম্বর পর্যন্ত',
      maxBonus: 'সর্বোচ্চ বোনাস: ৫,০০০,০০০ টাকা।',
      description: 'ফ্রি স্পিন, ৮৫,০০০,০০০ পর্যন্ত পুরস্কার।',
      hotTag: true
    },
    {
      id: 2,
      image: './photo/banner2.jpeg',
      title: 'BETBDT',
      action: 'APP ডাউনলোড করুন',
      maxBonus: 'সর্বোচ্চ বোনাস ৮৫৮৮.৮৮ পর্যন্ত',
      description: 'APP ডাউনলোড করুন সর্বোচ্চ বোনাস ৳৫৮৮.৮৮',
      closeable: true
    },
    {
      id: 3,
      image: './photo/banner3.jpeg',
      title: '২য় ডিপোজিট বোনাস ৬৮%',
      description: 'দ্বিতীয় ডিপোজিট করার সুবিধা',
      percentage: '৬৮%'
    },
    {
      id: 4,
      image: './photo/banner4.jpeg',
      title: '৩য় ডিপোজিট বোনাস ৩৮%',
      description: 'তৃতীয়বার ডিপোজিট করার সুবিধা',
      percentage: '৩৮%'
    },
    {
      id: 5,
      image: './photo/banner5.jpeg',
      title: 'বিশেষ অফার',
      description: 'এক্সক্লুসিভ প্রমোশন',
      special: true
    }
  ];

  return (
    <div className="promotion-page">
      {/* Header */}
      <div className="promotion-header">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
        </Link>
        <h1 className="promotion-title">Promotion</h1>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Promotions Grid */}
      <div className="promotions-grid">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="promotion-card">
            <div className="card-image-container">
              <img 
                src={promotion.image} 
                alt={promotion.title}
                className="card-image"
              />
              {promotion.hotTag && (
                <div className="hot-tag">HOT</div>
              )}
              {promotion.closeable && (
                <button className="close-btn">×</button>
              )}
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{promotion.title}</h3>
              
              {promotion.percentage && (
                <div className="percentage-badge">{promotion.percentage}</div>
              )}
              
              {promotion.duration && (
                <p className="card-duration">{promotion.duration}</p>
              )}
              
              {promotion.action && (
                <p className="card-action">{promotion.action}</p>
              )}
              
              {promotion.maxBonus && (
                <p className="card-bonus">{promotion.maxBonus}</p>
              )}
              
              <p className="card-description">{promotion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
