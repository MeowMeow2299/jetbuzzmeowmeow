import React from 'react';
import './Banner.css';

const Banner = () => {
  const banners = [
    { id: 1, src: './photo/banner1.jpeg', alt: 'Banner 1' },
    { id: 2, src: './photo/banner2.jpeg', alt: 'Banner 2' },
    { id: 3, src: './photo/banner3.jpeg', alt: 'Banner 3' },
  ];

  // Duplicate banners for infinite loop
  const infiniteBanners = [...banners, ...banners];

  return (
    <div className="banner-container">
      <div className="banner-slider">
        <div className="banner-track">
          {infiniteBanners.map((banner, index) => (
            <div key={`${banner.id}-${index}`} className="banner-slide">
              <img 
                src={banner.src} 
                alt={banner.alt}
                className="banner-image"
              />
              <div className="banner-logo-overlay">
                <img 
                  src="./photo/logo.png" 
                  alt="JetBuzz Logo"
                  className="banner-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;