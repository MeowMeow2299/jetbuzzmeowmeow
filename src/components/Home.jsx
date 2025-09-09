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
  const [showInfo, setShowInfo] = useState(true); // Tự động mở modal khi vào web

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
      
      <Info isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </>
  );
};

export default Home;
