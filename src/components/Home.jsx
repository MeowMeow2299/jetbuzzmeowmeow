import React, { useState } from 'react';
import Container from './Container';
import Marquee from './Marquee';
import Slider from './Slider';
import Dom from './Dom';
import Sliderx from './Sliderx';
import Sliderxx from './Sliderxx';
import Sliderxxx from './Sliderxxx';
import Info from './Info';
import { useAuth } from '../auth/AuthContext.jsx';

const Home = () => {
  const { user } = useAuth();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Container />
      {user && (
        <>
          <Marquee />
          <Slider />
          <Dom />
          <Sliderx />
          <Sliderxx />
          <Sliderxxx />
        </>
      )}
      
      {/* Nút mở modal thông báo */}
      <button 
        onClick={() => setShowInfo(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#FFD700',
          color: '#000',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
      >
        📢 Announcement
      </button>
      
      <Info isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </>
  );
};

export default Home;
