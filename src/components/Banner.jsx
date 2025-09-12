import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { id: 1, src: './photo/banner1.jpeg', alt: 'Banner 1' },
    { id: 2, src: './photo/banner2.jpeg', alt: 'Banner 2' },
    { id: 3, src: './photo/banner3.jpeg', alt: 'Banner 3' },
    { id: 4, src: './photo/banner4.jpeg', alt: 'Banner 4' },
    { id: 5, src: './photo/banner5.jpeg', alt: 'Banner 5' },
    { id: 6, src: './photo/banner6.jpeg', alt: 'Banner 6' },
    { id: 7, src: './photo/banner7.jpeg', alt: 'Banner 7' },
    { id: 8, src: './photo/banner8.jpeg', alt: 'Banner 8' },
  ];

  // Group banners into sets of 3
  const bannerGroups = [];
  for (let i = 0; i < banners.length; i += 3) {
    bannerGroups.push(banners.slice(i, i + 3));
  }

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerGroups.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerGroups.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerGroups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerGroups.length) % bannerGroups.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-slider">
        <div className="banner-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="banner-slide">
              <div className="flex h-full">
                {group.map((banner) => (
                  <div key={banner.id} className="flex-1 relative">
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
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button className="banner-nav banner-nav-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="banner-nav banner-nav-next" onClick={nextSlide}>
          ›
        </button>
        
        {/* Pagination Dots */}
        <div className="banner-pagination">
          {bannerGroups.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;