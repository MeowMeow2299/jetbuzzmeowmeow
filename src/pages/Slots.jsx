import React, { useEffect } from 'react';
import './Slots.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const Slots = () => {
  useEffect(() => {
    document.title = 'Online Slots | JeetBuzzGames – Play Exciting Slot Games with Big Wins';
    updateOrCreateMeta(
      'description',
      'Discover a wide range of online slot games at JeetBuzzGames. Play classic slots, video slots, progressive jackpots, and themed slots with HD graphics and interactive gameplay.'
    );
    updateOrCreateMeta(
      'keywords',
      'Online Slots, Slot Games, Video Slots, Progressive Jackpot Slots, Classic Slots, JeetBuzzGames, HD Slot Games, Online Casino Slots, Interactive Slots, Big Wins'
    );
  }, []);

  return (
    <div className="slots-page">
      <header className="slots-hero">
        <h1>Slots – JeetBuzzGames</h1>
        <p className="slots-subtitle">Spin the reels on classic, video, progressive, and themed slots.</p>
      </header>

      <section className="slots-section">
        <h2>Introduction</h2>
        <p>
          Slot games are one of the most popular and engaging forms of online casino entertainment. At JeetBuzzGames, we
          offer a vast collection of slot games ranging from classic 3-reel slots to modern video slots, progressive
          jackpots, and themed slots. Our platform provides immersive gameplay with HD graphics, dynamic sound effects,
          and interactive features to create a thrilling experience for players of all skill levels.
        </p>
        <p>
          Whether you are a casual player seeking fun or a high-stakes gamer chasing big wins, our slot games cater to
          everyone. Players can explore a wide variety of themes, including adventure, mythology, movies, and cultural
          stories, all designed to provide a visually appealing and rewarding experience.
        </p>
      </section>

      <section className="slots-section">
        <h2>Types of Slot Games</h2>
        <ol className="slots-list">
          <li>
            <strong>Classic Slots</strong> – Traditional 3-reel games with simple gameplay and iconic symbols.
          </li>
          <li>
            <strong>Video Slots</strong> – 5+ reels, advanced animations, bonus features, and multi-paylines.
          </li>
          <li>
            <strong>Progressive Jackpot Slots</strong> – A portion of every bet grows a shared jackpot for massive wins.
          </li>
          <li>
            <strong>Themed Slots</strong> – Story-driven slots based on adventures, civilizations, movies, and more.
          </li>
          <li>
            <strong>3D and Interactive Slots</strong> – Cinematic visuals and interactive mini-games for dynamic play.
          </li>
        </ol>
      </section>

      <section className="slots-section">
        <h2>Advantages of Playing Slots at JeetBuzzGames</h2>
        <div className="slots-table">
          <div className="slots-row slots-row--head">
            <div>Slot Type</div>
            <div>Features & Benefits</div>
          </div>
          <div className="slots-row">
            <div>Classic Slots</div>
            <div>Simple gameplay, easy for beginners, nostalgic experience</div>
          </div>
          <div className="slots-row">
            <div>Video Slots</div>
            <div>Advanced graphics, multiple paylines, bonus features</div>
          </div>
          <div className="slots-row">
            <div>Progressive Jackpot Slots</div>
            <div>Opportunity for massive payouts, multi-level jackpots</div>
          </div>
          <div className="slots-row">
            <div>Themed Slots</div>
            <div>Engaging stories, immersive gameplay, cinematic experience</div>
          </div>
          <div className="slots-row">
            <div>3D and Interactive Slots</div>
            <div>Lifelike animations, interactive mini-games, dynamic bonus rounds</div>
          </div>
          <div className="slots-row">
            <div>Multi-Device Support</div>
            <div>Play on desktop, tablet, or mobile seamlessly</div>
          </div>
          <div className="slots-row">
            <div>Secure Platform</div>
            <div>Advanced encryption ensures fair play and player protection</div>
          </div>
        </div>
      </section>

      <section className="slots-section">
        <h2>How to Get Started</h2>
        <ol className="slots-list">
          <li><strong>Create an Account</strong> – Sign up on JeetBuzzGames.com.</li>
          <li><strong>Deposit Funds</strong> – Add money securely via multiple payment options.</li>
          <li><strong>Select a Slot Game</strong> – Browse the slots lobby and choose your favorite.</li>
          <li><strong>Adjust Bet & Lines</strong> – Configure bet size and paylines.</li>
          <li><strong>Spin & Win</strong> – Trigger bonus rounds, free spins, or jackpots for bigger rewards.</li>
        </ol>
      </section>

      <section className="slots-section">
        <h2>Tips for Slot Players</h2>
        <ul className="slots-list">
          <li><strong>Understand Paylines & Payouts</strong> – Learn each slot's rules and paytable.</li>
          <li><strong>Try Free Play</strong> – Use demo modes to practice features.</li>
          <li><strong>Manage Bankroll</strong> – Set a budget and avoid chasing losses.</li>
          <li><strong>Take Advantage of Bonuses</strong> – Use deposit bonuses and free spins.</li>
          <li><strong>Play Progressive Jackpots Wisely</strong> – Know requirements and bet strategically.</li>
        </ul>
      </section>

      <section className="slots-section">
        <h2>Responsible Gaming</h2>
        <p>
          JeetBuzzGames promotes responsible gaming. Monitor time and deposits, access support resources, and use
          self-limitation tools to keep play safe and enjoyable.
        </p>
      </section>

      <section className="slots-section">
        <h2>Conclusion</h2>
        <p>
          Slots at JeetBuzzGames offer a comprehensive experience for both casual and high-stakes players. From classic
          and video slots to progressive jackpots, themed adventures, and 3D interactive games, our platform combines
          engaging gameplay with HD graphics and real-time interaction. Join today and spin the reels for excitement,
          rewards, and endless entertainment!
        </p>
      </section>
    </div>
  );
};

export default Slots;
