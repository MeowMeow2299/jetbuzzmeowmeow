import React, { useState } from 'react';
import Container from './Container';
import Marquee from './Marquee';
import Hotgame from './Hotgame';
import Dom from './Dom';
import Slots from './Slots';
import Live from './Live';
import Fish from './Fish';
import Sports from './Sports';
import ESports from './E-sports';
import Publisher from './Publisher';
import CurrencySupport from './CurrencySupport';
import Info from './Info';
import { useAuth } from '../auth/AuthContext.jsx';

const Home = () => {
  const { user } = useAuth();
  const [showInfo, setShowInfo] = useState(true); // Tự động mở modal khi vào web

  return (
    <>
      <Container />
      
      {/* Hiển thị tất cả games cho mọi người, không cần login */}
      <Marquee />
      <Hotgame />
      <Dom />
      <Slots />
      <Live />
      <Fish />
      <Sports />
      <ESports />
      <Publisher />
      <CurrencySupport />
      
      <Info isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </>
  );
};

export default Home;
