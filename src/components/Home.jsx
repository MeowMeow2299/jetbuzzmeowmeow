import React from 'react';
import Container from './Container';
import Marquee from './Marquee';
import Slider from './Slider';
import Dom from './Dom';
import Sliderx from './Sliderx';
import Sliderxx from './Sliderxx';
import Sliderxxx from './Sliderxxx';
import { useAuth } from '../auth/AuthContext.jsx';

const Home = () => {
  const { user } = useAuth();
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
    </>
  );
};

export default Home;
