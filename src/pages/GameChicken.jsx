import React, { useEffect } from 'react';
import './GameChicken.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const GameChicken = () => {
  useEffect(() => {
    document.title = 'Chicken Game | JeetBuzzGames – Play Crash-Style Chicken Game Online';
    updateOrCreateMeta(
      'description',
      'Play the exciting Chicken Game at JeetBuzzGames. Test your luck, pick safe tiles, avoid traps, and win big rewards in this crash-style online casino game.'
    );
    updateOrCreateMeta(
      'keywords',
      'Chicken Game, Online Chicken Casino Game, Crash Game, Lucky Tiles, Chicken Gambling Game, JeetBuzzGames, Interactive Casino Game, Risk and Reward Game, Online Betting, Play Chicken Game'
    );
  }, []);

  return (
    <div className="gc-page">
      <header className="gc-hero">
        <h1>Chicken Game – JeetBuzzGames</h1>
        <p className="gc-subtitle">Simple rules. Big rewards. Will you cash out in time?</p>
      </header>

      <section className="gc-section">
        <h2>Introduction</h2>
        <p>
          The Chicken Game is one of the most thrilling and fast-growing online casino games worldwide. Unlike
          traditional slots or card games, it’s an interactive crash-style game where players test their luck and
          strategy by picking safe tiles while avoiding hidden traps. At JeetBuzzGames, we bring this exciting game
          to life with HD graphics, smooth gameplay, and secure betting mechanics.
        </p>
        <p>
          Simple yet adrenaline-packed, the Chicken Game blends risk, reward, and suspense. Each round is a new
          chance to multiply your winnings. Will you play it safe, or risk it all for maximum rewards? The choice is yours.
        </p>
      </section>

      <section className="gc-section">
        <h2>How the Chicken Game Works</h2>
        <ul className="gc-list">
          <li><strong>Choose Your Bet Amount</strong> – Decide how much you want to wager before starting.</li>
          <li><strong>Select Difficulty</strong> – Choose the number of safe tiles and traps. More traps = higher risk but bigger rewards.</li>
          <li><strong>Start the Game</strong> – Tiles are laid out, and you must click to reveal safe spaces.</li>
          <li><strong>Cash Out Anytime</strong> – The more safe picks you make, the higher your winnings. But beware—hitting a trap means losing the round.</li>
          <li><strong>Strategy & Luck</strong> – Winning depends on smart decisions and risk management.</li>
        </ul>
      </section>

      <section className="gc-section">
        <h2>Types of Chicken Game Modes</h2>
        <ol className="gc-list">
          <li>
            <strong>Classic Chicken Game</strong>
            <div>The traditional version with multiple tiles, where you avoid bombs (traps) while trying to collect rewards.</div>
          </li>
          <li>
            <strong>Multiplier Chicken</strong>
            <div>Each safe tile you reveal increases your multiplier. The longer you survive, the higher your payout grows.</div>
          </li>
          <li>
            <strong>Timed Chicken Mode</strong>
            <div>Adds a countdown timer, forcing quick decisions. Perfect for players who love fast-paced gaming.</div>
          </li>
          <li>
            <strong>High-Risk Chicken</strong>
            <div>Fewer safe tiles, but massive multipliers. Designed for thrill-seekers chasing big wins.</div>
          </li>
        </ol>
      </section>

      <section className="gc-section">
        <h2>Advantages of Playing Chicken Game at JeetBuzzGames</h2>
        <div className="gc-table">
          <div className="gc-row gc-row--head">
            <div>Feature</div>
            <div>Benefits</div>
          </div>
          <div className="gc-row">
            <div>Interactive Gameplay</div>
            <div>Player-driven choices make each round unique</div>
          </div>
          <div className="gc-row">
            <div>Flexible Risk Levels</div>
            <div>Adjust difficulty and traps for customized play</div>
          </div>
          <div className="gc-row">
            <div>Instant Wins</div>
            <div>Cash out anytime and secure your profit</div>
          </div>
          <div className="gc-row">
            <div>Multi-Device Compatibility</div>
            <div>Play on desktop, tablet, or mobile seamlessly</div>
          </div>
          <div className="gc-row">
            <div>HD Graphics & Sound</div>
            <div>Immersive experience with smooth gameplay</div>
          </div>
          <div className="gc-row">
            <div>Secure Betting System</div>
            <div>Encrypted payments, fair results, and transparency</div>
          </div>
          <div className="gc-row">
            <div>Bonuses & Promotions</div>
            <div>Extra rewards for loyal players and newcomers</div>
          </div>
        </div>
      </section>

      <section className="gc-section">
        <h2>Strategies for Winning the Chicken Game</h2>
        <ul className="gc-list">
          <li><strong>Start Small</strong> – Begin with smaller bets to understand gameplay before increasing stakes.</li>
          <li><strong>Set a Cash-Out Point</strong> – Don’t get greedy; plan when to withdraw winnings.</li>
          <li><strong>Mix Risk Levels</strong> – Alternate between safe rounds and high-risk rounds for balance.</li>
          <li><strong>Observe Patterns</strong> – While outcomes are random, practice helps you adapt strategies.</li>
          <li><strong>Use Bonuses</strong> – Maximize your playtime with deposit offers and free credits from JeetBuzzGames.</li>
        </ul>
      </section>

      <section className="gc-section">
        <h2>Why Players Love the Chicken Game</h2>
        <ul className="gc-list">
          <li><strong>Simple Rules, Big Rewards</strong> – Easy to learn, but highly rewarding.</li>
          <li><strong>Fast-Paced Action</strong> – Quick rounds keep adrenaline levels high.</li>
          <li><strong>Player Control</strong> – You decide when to stop, unlike slots or roulette.</li>
          <li><strong>Community Appeal</strong> – Watch live leaderboards and challenge friends.</li>
        </ul>
      </section>

      <section className="gc-section">
        <h2>How to Get Started</h2>
        <ol className="gc-list">
          <li><strong>Sign Up</strong> – Create your account on JeetBuzzGames.com.</li>
          <li><strong>Deposit Funds</strong> – Choose from secure payment methods.</li>
          <li><strong>Select Chicken Game</strong> – Enter the game lobby and choose your preferred mode.</li>
          <li><strong>Pick Difficulty</strong> – Adjust the number of traps for your comfort level.</li>
          <li><strong>Play & Win</strong> – Start picking tiles, reveal safe zones, and cash out wisely!</li>
        </ol>
      </section>

      <section className="gc-section">
        <h2>Responsible Gaming</h2>
        <p>
          At JeetBuzzGames, we promote responsible play. The Chicken Game is designed for fun, and we provide tools to
          manage deposits, set limits, and ensure safe gaming habits. Remember, the key is to enjoy the experience while
          keeping control of your budget.
        </p>
      </section>

      <section className="gc-section">
        <h2>Conclusion</h2>
        <p>
          The Chicken Game at JeetBuzzGames delivers a unique mix of luck, strategy, and adrenaline-pumping action. With
          multiple modes, customizable difficulty, and real-time decision-making, it’s one of the most engaging online
          casino games today. Whether you’re a beginner seeking quick fun or a risk-taker chasing big multipliers, the
          Chicken Game offers endless excitement.
        </p>
        <p>
          Join JeetBuzzGames today, test your courage, and see if you can outsmart the traps to claim your rewards!
        </p>
      </section>
    </div>
  );
};

export default GameChicken;

