import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-bg" />

      <div className="login-card">
        <div className="login-card__header">
          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to continue your JeetBuzzGames experience</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Login</button>
            <a className="link-muted" href="#">Forgot password?</a>
          </div>
        </form>

        <div className="divider"><span>or continue with</span></div>

        <div className="social-grid">
          <button className="btn-social gmail"><i className="fa fa-envelope" /> Gmail</button>
          <button className="btn-social google"><i className="fab fa-google" /> Google</button>
          <button className="btn-social facebook"><i className="fab fa-facebook-f" /> Facebook</button>
          <button className="btn-social whatsapp"><i className="fab fa-whatsapp" /> WhatsApp</button>
        </div>

        <p className="signup-hint">Don't have an account? <a href="#" className="link-accent">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;

