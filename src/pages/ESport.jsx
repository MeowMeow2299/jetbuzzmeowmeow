import React, { useEffect } from 'react';
import './ESport.css';

const updateOrCreateMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const ESport = () => {
  useEffect(() => {
    document.title = 'E-Sports | JeetBuzzGames – Competitive Online Gaming & Tournaments';
    updateOrCreateMeta(
      'description',
      'Join JeetBuzzGames for the ultimate E-sports experience. Play competitive games, participate in tournaments, and enjoy real-time multiplayer action with professional players worldwide.'
    );
    updateOrCreateMeta(
      'keywords',
      'E-Sports, Competitive Gaming, Online Gaming, Multiplayer Tournaments, FPS Games, MOBA Games, JeetBuzzGames, Live Streaming, Gaming Community, Online Competitions'
    );
  }, []);

  return (
    <div className="es-page">
      <header className="es-hero">
        <h1>E-Sports – JeetBuzzGames</h1>
        <p className="es-subtitle">Compete in tournaments, watch live streams, and join a global community.</p>
      </header>

      <section className="es-section">
        <h2>Introduction</h2>
        <p>
          E-sports, short for electronic sports, is the fastest-growing sector in online gaming. At JeetBuzzGames, we
          provide an immersive E-sports platform where players can compete in professional-grade tournaments, enjoy live
          streaming, and interact with a global gaming community. From FPS to MOBA and RTS, our platform caters to casual
          players, competitive gamers, and professional streamers alike.
        </p>
        <p>
          E-sports combines strategy, teamwork, and quick reflexes. Players can join tournaments, participate in leagues,
          and showcase their skills in games like League of Legends, Dota 2, CS:GO, Valorant, Fortnite, and more—with
          live streaming and real-time scoring.
        </p>
      </section>

      <section className="es-section">
        <h2>Popular E-Sports Categories</h2>
        <ol className="es-list">
          <li>
            <strong>MOBA Games</strong> – Team-based strategy and tactical decision-making in titles like League of Legends and Dota 2.
          </li>
          <li>
            <strong>FPS Games</strong> – Precision and reflexes in CS:GO, Valorant, and Call of Duty tournaments.
          </li>
          <li>
            <strong>Battle Royale Games</strong> – Survive large-scale arenas in Fortnite and PUBG with strategic play.
          </li>
          <li>
            <strong>Real-Time Strategy (RTS) Games</strong> – Resource management and tactical execution in StarCraft II.
          </li>
          <li>
            <strong>Sports Simulation Games</strong> – Competitive FIFA, NBA 2K, and Madden NFL leagues.
          </li>
        </ol>
      </section>

      <section className="es-section">
        <h2>Advantages of Playing E-Sports at JeetBuzzGames</h2>
        <div className="es-table">
          <div className="es-row es-row--head">
            <div>Category</div>
            <div>Features & Benefits</div>
          </div>
          <div className="es-row">
            <div>MOBA Games</div>
            <div>Team-based strategy, skill development, competitive rankings</div>
          </div>
          <div className="es-row">
            <div>FPS Games</div>
            <div>Reflex and aiming improvement, multiplayer interaction</div>
          </div>
          <div className="es-row">
            <div>Battle Royale</div>
            <div>Survival strategy, large-scale competitive action</div>
          </div>
          <div className="es-row">
            <div>RTS Games</div>
            <div>Resource management, tactical planning, quick decision-making</div>
          </div>
          <div className="es-row">
            <div>Sports Simulation Games</div>
            <div>Realistic sports experience, global competition, leaderboard rankings</div>
          </div>
          <div className="es-row">
            <div>Community & Live Streaming</div>
            <div>Engage with pros, watch tournaments live, interactive chats</div>
          </div>
          <div className="es-row">
            <div>Tournaments & Prizes</div>
            <div>Join leagues, earn rewards, and build reputation</div>
          </div>
        </div>
      </section>

      <section className="es-section">
        <h2>How to Get Started</h2>
        <ol className="es-list">
          <li><strong>Create Your Account</strong> – Sign up on JeetBuzzGames.com.</li>
          <li><strong>Select Your Game</strong> – Choose FPS, MOBA, Battle Royale, RTS, or Sports Simulation.</li>
          <li><strong>Join Tournaments or Lobbies</strong> – Compete in casual matches or structured tournaments.</li>
          <li><strong>Engage and Improve</strong> – Use strategy guides, watch streams, track performance.</li>
          <li><strong>Win Rewards</strong> – Earn prizes, recognition, and rank advancement.</li>
        </ol>
      </section>

      <section className="es-section">
        <h2>Tips for Success in E-Sports</h2>
        <ul className="es-list">
          <li><strong>Practice Consistently</strong> – Regular practice is key to mastery.</li>
          <li><strong>Analyze Gameplay</strong> – Review matches to identify strengths and weaknesses.</li>
          <li><strong>Communication</strong> – Clear comms are crucial for team success.</li>
          <li><strong>Adapt Strategies</strong> – Flexibility against different opponents.</li>
          <li><strong>Stay Updated</strong> – Track patches and meta changes.</li>
        </ul>
      </section>

      <section className="es-section">
        <h2>Responsible Gaming in E-Sports</h2>
        <p>
          We promote responsible gaming practices. Manage screen time, track habits, and access support resources to
          maintain a healthy balance.
        </p>
      </section>

      <section className="es-section">
        <p>
          E-sports at JeetBuzzGames provides an all-in-one platform for competitive gaming enthusiasts. With HD
          streaming, real-time interaction, and secure systems, JeetBuzzGames brings the excitement of competitive
          E-sports directly to your screen. Join today and be part of a thriving global community.
        </p>
      </section>
    </div>
  );
};

export default ESport;

