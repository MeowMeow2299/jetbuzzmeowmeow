import React, { useEffect } from 'react';
import './TableGames.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const TableGames = () => {
  useEffect(() => {
    document.title = 'Table Casino Games | JeetBuzzGames – Complete Online Table Gaming Experience';
    updateOrCreateMeta(
      'description',
      'Play all popular table casino games at JeetBuzzGames, including Blackjack, Roulette, Baccarat, Poker variants, Sic Bo, Craps, Pai Gow, and more. Enjoy HD streaming, real-time interaction, and immersive online gaming.'
    );
    updateOrCreateMeta(
      'keywords',
      'Table Games, Blackjack, Roulette, Baccarat, Poker, Casino Hold’em, Three Card Poker, Sic Bo, Craps, Pai Gow, Let It Ride, JeetBuzzGames, Online Casino, HD Live Games, Real-Time Gaming'
    );
  }, []);

  return (
    <div className="tg-page">
      <header className="tg-hero">
        <h1>Table Games – JeetBuzzGames</h1>
        <p className="tg-subtitle">Blackjack, Roulette, Baccarat, Poker variants, Sic Bo, Craps, Pai Gow & more.</p>
      </header>

      <section className="tg-section">
        <h2>Introduction</h2>
        <p>
          Table games are the heart of every casino, offering excitement, strategy, and social interaction. At
          JeetBuzzGames, we bring a comprehensive selection of table casino games directly to your screen. Whether you
          enjoy strategic card games, classic dice games, or traditional casino staples, our platform provides everything
          you need for an authentic and immersive gaming experience.
        </p>
        <p>
          With HD streaming and real-time dealer interaction, players can enjoy Blackjack, Roulette, Baccarat, Poker,
          and more with professional dealers and global opponents. JeetBuzzGames combines the convenience of online play
          with the thrill of live casino gaming, creating an engaging and secure environment for both beginners and
          seasoned players.
        </p>
      </section>

      <section className="tg-section">
        <h2>Popular Table Casino Games</h2>
        <ol className="tg-list">
          <li>
            <strong>Blackjack</strong> – Beat the dealer without exceeding 21. Variants: Classic, European, Multi-Hand.
          </li>
          <li>
            <strong>Roulette</strong> – Bet on numbers, colors, or combos. European, American, and French tables.
          </li>
          <li>
            <strong>Baccarat</strong> – Bet on Player, Banker, or Tie. Variants: Punto Banco, Mini, Speed.
          </li>
          <li>
            <strong>Casino Hold’em</strong> – Poker versus dealer combining skill and luck.
          </li>
          <li>
            <strong>Three Card Poker</strong> – Fast-paced poker with three-card hands.
          </li>
          <li>
            <strong>Sic Bo</strong> – Dice-based game with diverse bet options.
          </li>
          <li>
            <strong>Craps</strong> – Dynamic dice game with rich betting systems.
          </li>
          <li>
            <strong>Pai Gow Poker</strong> – Split seven cards into two hands to beat the dealer.
          </li>
          <li>
            <strong>Let It Ride</strong> – Simple, fun poker variant focused on three-card hands.
          </li>
          <li>
            <strong>Other Table Games</strong> – Red Dog, War, Dragon Tiger, and more.
          </li>
        </ol>
      </section>

      <section className="tg-section">
        <h2>Advantages of Playing Table Casino Games at JeetBuzzGames</h2>
        <div className="tg-table">
          <div className="tg-row tg-row--head">
            <div>Game Type</div>
            <div>Features & Highlights</div>
          </div>
          <div className="tg-row">
            <div>Blackjack</div>
            <div>Multiple variants, live dealers, strategic gameplay</div>
          </div>
          <div className="tg-row">
            <div>Roulette</div>
            <div>European, American, French, real-time wheel spin</div>
          </div>
          <div className="tg-row">
            <div>Baccarat</div>
            <div>Punto Banco, Mini Baccarat, Speed Baccarat</div>
          </div>
          <div className="tg-row">
            <div>Poker</div>
            <div>Casino Hold’em, Three Card Poker, Pai Gow, Let It Ride</div>
          </div>
          <div className="tg-row">
            <div>Sic Bo</div>
            <div>Dice combinations, multiple betting options</div>
          </div>
          <div className="tg-row">
            <div>Craps</div>
            <div>Dynamic bets, live HD gameplay</div>
          </div>
          <div className="tg-row">
            <div>Other Games</div>
            <div>Red Dog, Dragon Tiger, War, immersive real-time experience</div>
          </div>
        </div>
      </section>

      <section className="tg-section">
        <h2>How to Get Started</h2>
        <ol className="tg-list">
          <li><strong>Register Your Account</strong> – Visit JeetBuzzGames.com and sign up.</li>
          <li><strong>Deposit Funds</strong> – Use secure payment methods to fund your account.</li>
          <li><strong>Select a Table Game</strong> – Browse the live table games lobby and pick your favorite.</li>
          <li><strong>Join a Room</strong> – Enter a room and wait for players or start a solo session.</li>
          <li><strong>Play and Interact</strong> – Engage with live dealers, chat with players, and enjoy HD streaming.</li>
        </ol>
      </section>

      <section className="tg-section">
        <h2>Tips for Table Casino Games</h2>
        <ul className="tg-list">
          <li><strong>Know the Rules</strong> – Learn each game’s rules and strategies.</li>
          <li><strong>Plan Your Bets</strong> – Strategy boosts odds in Roulette and Craps.</li>
          <li><strong>Observe Opponents</strong> – Poker and Blackjack reward observation.</li>
          <li><strong>Manage Your Bankroll</strong> – Responsible money management ensures long-term enjoyment.</li>
        </ul>
      </section>

      <section className="tg-section">
        <h2>Responsible Gaming</h2>
        <p>
          JeetBuzzGames promotes responsible gaming. Tools are available for deposits, time limits, and support access
          to maintain a safe and enjoyable environment.
        </p>
      </section>

      <section className="tg-section">
        <p>
          JeetBuzzGames provides a complete table casino gaming experience—from Blackjack to Baccarat, Roulette, Poker
          variants, Sic Bo, Craps, Pai Gow, Let It Ride, and more. With HD streaming, real-time dealer interaction, and
          a secure platform, our table games cater to both beginners and experienced players. Join JeetBuzzGames today
          to experience the thrill of a live casino anytime, anywhere.
        </p>
      </section>
    </div>
  );
};

export default TableGames;

