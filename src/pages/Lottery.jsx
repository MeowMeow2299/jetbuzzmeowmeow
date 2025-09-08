import React, { useEffect } from 'react';
import './Lottery.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const Lottery = () => {
  useEffect(() => {
    document.title = 'Online Lottery | JeetBuzzGames – Play Lottery Games with Big Jackpots';
    updateOrCreateMeta(
      'description',
      'Join JeetBuzzGames for online lottery games with huge prizes, instant draws, and secure gameplay. Play daily, weekly, and jackpot lotteries anytime, anywhere.'
    );
    updateOrCreateMeta(
      'keywords',
      'Online Lottery, Lottery Games, Daily Lottery, Jackpot Lottery, Instant Lottery, Secure Online Lottery, JeetBuzzGames, Play Lottery Online, Lucky Draw, Number Games'
    );
  }, []);

  return (
    <div className="lt-page">
      <header className="lt-hero">
        <h1>Lottery – JeetBuzzGames</h1>
        <p className="lt-subtitle">Play daily, weekly, instant, and jackpot lotteries—securely and seamlessly.</p>
      </header>

      <section className="lt-section">
        <h2>Introduction</h2>
        <p>
          The lottery has always been one of the world’s most exciting and rewarding games of chance. From traditional
          paper tickets to modern online platforms, lotteries bring players the thrill of winning life-changing prizes
          with just a single ticket. At JeetBuzzGames, we make the lottery more accessible, secure, and engaging through
          our advanced digital platform.
        </p>
        <p>
          Our online lottery games allow players to participate in daily, weekly, and jackpot draws with ease. Whether
          you prefer quick-pick instant lotteries or large-scale jackpots, JeetBuzzGames offers a wide range of options
          to suit every player. With transparent draws, real-time results, and secure payments, players can enjoy the
          excitement of the lottery without leaving home.
        </p>
      </section>

      <section className="lt-section">
        <h2>Types of Lottery Games</h2>
        <ol className="lt-list">
          <li>
            <strong>Daily Lottery</strong>
            <div>Frequent results and smaller, regular prizes. Great for consistent play.</div>
          </li>
          <li>
            <strong>Weekly Lottery</strong>
            <div>Higher prizes with themed draws and special bonuses.</div>
          </li>
          <li>
            <strong>Jackpot Lottery</strong>
            <div>Massive rewards that grow as tickets are sold until claimed.</div>
          </li>
          <li>
            <strong>Instant Lottery (Scratch & Win)</strong>
            <div>Scratch digital cards and see instant results for quick excitement.</div>
          </li>
          <li>
            <strong>Number-Based Lottery</strong>
            <div>Pick lucky numbers and await official draws with multiple formats and combinations.</div>
          </li>
        </ol>
      </section>

      <section className="lt-section">
        <h2>Advantages of Playing Lottery at JeetBuzzGames</h2>
        <div className="lt-table">
          <div className="lt-row lt-row--head">
            <div>Lottery Type</div>
            <div>Features & Benefits</div>
          </div>
          <div className="lt-row">
            <div>Daily Lottery</div>
            <div>Frequent wins, affordable tickets, fast results</div>
          </div>
          <div className="lt-row">
            <div>Weekly Lottery</div>
            <div>Larger prizes, exciting weekly draws</div>
          </div>
          <div className="lt-row">
            <div>Jackpot Lottery</div>
            <div>Life-changing winnings, progressive prize pools</div>
          </div>
          <div className="lt-row">
            <div>Instant Lottery</div>
            <div>Quick results, digital scratch cards, fun and engaging</div>
          </div>
          <div className="lt-row">
            <div>Number-Based Lottery</div>
            <div>Choose your own numbers, multiple draw formats, improved chances</div>
          </div>
          <div className="lt-row">
            <div>Secure & Transparent System</div>
            <div>Real-time results, encrypted transactions, fair play</div>
          </div>
          <div className="lt-row">
            <div>Multi-Device Support</div>
            <div>Play anytime on desktop, tablet, or mobile</div>
          </div>
        </div>
      </section>

      <section className="lt-section">
        <h2>How to Play Lottery at JeetBuzzGames</h2>
        <ol className="lt-list">
          <li><strong>Register Your Account</strong> – Sign up on JeetBuzzGames.com.</li>
          <li><strong>Select Your Lottery Game</strong> – Choose between daily, weekly, jackpot, or instant lotteries.</li>
          <li><strong>Pick Your Numbers or Quick Pick</strong> – Manually select numbers or use auto generate.</li>
          <li><strong>Purchase Tickets</strong> – Securely buy your ticket online.</li>
          <li><strong>Wait for the Draw</strong> – Results are published in real-time.</li>
          <li><strong>Claim Your Prize</strong> – Winnings are credited instantly for easy withdrawal.</li>
        </ol>
      </section>

      <section className="lt-section">
        <h2>Tips for Lottery Players</h2>
        <ul className="lt-list">
          <li><strong>Play Regularly but Responsibly</strong> – Increase chances with consistency, within budget.</li>
          <li><strong>Use Systematic Plays</strong> – Cover multiple number combinations where available.</li>
          <li><strong>Join Lottery Pools</strong> – Pooling tickets increases probability of winning.</li>
          <li><strong>Stay Informed</strong> – Track schedules, jackpots, and odds.</li>
          <li><strong>Enjoy the Game</strong> – Treat it as entertainment first.</li>
        </ul>
      </section>

      <section className="lt-section">
        <h2>Security and Transparency</h2>
        <p>
          JeetBuzzGames ensures fair and transparent draws using certified RNGs and verified systems. Transactions are
          encrypted, and results are published instantly for complete trust.
        </p>
      </section>

      <section className="lt-section">
        <h2>Responsible Lottery Gaming</h2>
        <p>
          We encourage responsible play by offering deposit limits, spend trackers, and time reminders. Our support team
          is available 24/7 to help maintain healthy gaming habits.
        </p>
      </section>

      <section className="lt-section">
        <h2>Conclusion</h2>
        <p>
          Lottery games at JeetBuzzGames provide excitement, variety, and the potential for huge rewards. From daily
          draws and instant scratch games to progressive jackpots, our platform offers something for every lottery
          enthusiast. With secure gameplay, real-time results, and fair systems, JeetBuzzGames ensures that every ticket
          holds the promise of excitement and possibility.
        </p>
        <p>
          Join today, purchase your lucky numbers, and take a chance at life-changing winnings with JeetBuzzGames!
        </p>
      </section>
    </div>
  );
};

export default Lottery;

