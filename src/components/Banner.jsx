import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { id: 1, src: './photo/banner1.jpeg', alt: 'Free Lucky Spin Banner' },
    { id: 2, src: './photo/banner2.jpeg', alt: 'Hot Electronic Tournament Banner' },
    { id: 3, src: './photo/banner3.jpeg', alt: 'Saturday Mystery Prize Banner' },
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-slider">
        <div className="banner-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
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
        
        {/* Navigation Arrows */}
        <button className="banner-nav banner-nav-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="banner-nav banner-nav-next" onClick={nextSlide}>
          ›
        </button>
        
        {/* Pagination Dots */}
        <div className="banner-pagination">
          {banners.map((_, index) => (
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