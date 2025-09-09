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

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-slider">
        <div 
          className="banner-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img 
                src={banner.src} 
                alt={banner.alt}
                className="banner-image"
              />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="banner-pagination">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
