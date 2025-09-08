import React, { useEffect } from 'react';
import './LiveCasino.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const LiveCasino = () => {
  useEffect(() => {
    document.title = 'Live Casino | JeetBuzzGames – Real-Time Casino Gaming Experience';
    updateOrCreateMeta(
      'description',
      'Enjoy live casino games at JeetBuzzGames. Play Blackjack, Roulette, Baccarat, and other exciting games with real dealers in HD streaming. Start your live gaming experience today!'
    );
    updateOrCreateMeta(
      'keywords',
      'Live Casino, Real-Time Casino, Online Casino, Blackjack, Roulette, Baccarat, HD Live Casino, JeetBuzzGames, Online Gaming Cambodia'
    );
  }, []);

  return (
    <div className="lc-page">
      <header className="lc-hero">
        <h1>Live Casino | JeetBuzzGames – Real-Time Casino Gaming Experience</h1>
        <p className="lc-subtitle">Play with real dealers in HD streaming — anytime, anywhere.</p>
      </header>

      <section className="lc-section">
        <h2>Introduction</h2>
        <p>
          Live casino gaming has revolutionized online gambling, combining the thrill of traditional casinos with the
          convenience of digital platforms. At JeetBuzzGames, players experience real-time interaction with professional
          dealers and other players worldwide. Our live casino offers a diverse range of games, including Blackjack,
          Roulette, Baccarat, and many more, streamed in HD quality for an immersive experience.
        </p>
      </section>

      <section className="lc-section">
        <h2>Why Choose JeetBuzzGames Live Casino?</h2>
        <ul className="lc-list">
          <li>
            <strong>Real-Time Interaction</strong>
            <div>Engage with live dealers and fellow players via instant chat features for an authentic social experience.</div>
          </li>
          <li>
            <strong>High-Definition Streaming</strong>
            <div>Multiple camera angles and HD quality to place you right at the table.</div>
          </li>
          <li>
            <strong>Wide Variety of Games</strong>
            <div>Blackjack, Roulette, Baccarat, and modern live shows to match every preference.</div>
          </li>
          <li>
            <strong>Secure and Fair Gameplay</strong>
            <div>Advanced encryption and auditing provide fairness and data protection.</div>
          </li>
          <li>
            <strong>Multi-Language Support</strong>
            <div>Enjoy tables and interfaces in multiple languages for a global audience.</div>
          </li>
        </ul>
      </section>

      <section className="lc-section">
        <h2>Detailed Game Categories</h2>
        <ul className="lc-list">
          <li>
            <strong>Blackjack</strong> – Test your strategy and aim to beat the dealer without exceeding 21. Multiple variants are available.
          </li>
          <li>
            <strong>Roulette</strong> – Bet on numbers, colors, or combinations and watch the wheel spin live.
          </li>
          <li>
            <strong>Baccarat</strong> – Bet on player, banker, or tie and enjoy real-time action and suspense.
          </li>
          <li>
            <strong>Live Game Shows</strong> – Interactive titles like Dream Catcher and Monopoly Live blend entertainment and rewards.
          </li>
        </ul>
      </section>

      <section className="lc-section">
        <h2>Advantages of Playing Live Casino</h2>
        <div className="lc-table">
          <div className="lc-row lc-row--head">
            <div>Feature</div>
            <div>Benefit</div>
          </div>
          <div className="lc-row">
            <div>Live Dealers</div>
            <div>Interact with professional dealers for a real casino experience</div>
          </div>
          <div className="lc-row">
            <div>Real-Time Streaming</div>
            <div>HD quality video with multiple camera angles</div>
          </div>
          <div className="lc-row">
            <div>Wide Game Selection</div>
            <div>Blackjack, Roulette, Baccarat, and live game shows</div>
          </div>
          <div className="lc-row">
            <div>Secure Platform</div>
            <div>Advanced encryption ensures data safety and fair gameplay</div>
          </div>
          <div className="lc-row">
            <div>Multi-Language Support</div>
            <div>Play in your preferred language</div>
          </div>
          <div className="lc-row">
            <div>Accessible on Mobile & Desktop</div>
            <div>Seamless experience across devices</div>
          </div>
        </div>
      </section>

      <section className="lc-section">
        <h2>How to Get Started</h2>
        <ol className="lc-list">
          <li><strong>Register an Account</strong> – Sign up on JeetBuzzGames with your basic details.</li>
          <li><strong>Deposit Funds</strong> – Use secure payment methods to add money to your account.</li>
          <li><strong>Select a Game</strong> – Choose your favorite live casino game.</li>
          <li><strong>Start Playing</strong> – Interact with live dealers and players while enjoying HD streaming.</li>
        </ol>
      </section>

      <section className="lc-section">
        <h2>Responsible Gaming</h2>
        <p>
          At JeetBuzzGames, responsible gaming is a priority. We provide tools to help you manage deposits, playtime,
          and access support for responsible gambling.
        </p>
      </section>

      <section className="lc-section">
        <p>
          Live casino gaming at JeetBuzzGames offers the perfect blend of excitement, convenience, and security. Whether
          you are a seasoned player or a beginner, our platform provides an authentic real-time casino experience, HD
          streaming, and a wide range of games. Join JeetBuzzGames today to elevate your online gaming experience to the
          next level.
        </p>
      </section>
    </div>
  );
};

export default LiveCasino;

