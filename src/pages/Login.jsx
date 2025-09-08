import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../auth/AuthContext.jsx';

const Login = () => {
  const { loginWithGoogle, loginWithFacebook, loginWithEmail, signupWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginWithEmail(email, password);
    } catch (err) {
      setError(err?.message || 'Login failed');
    }
  };
  return (
    <div className="login-page">
      <div className="login-bg" />

      <div className="login-card">
        <div className="login-card__header">
          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to continue your JeetBuzzGames experience</p>
        </div>

        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Login</button>
            <a className="link-muted" href="#">Forgot password?</a>
          </div>
        </form>
        {error && <div className="error-hint">{error}</div>}

        <div className="divider"><span>or continue with</span></div>

        <div className="social-grid">
          <button className="btn-social gmail" onClick={()=>signupWithEmail(email || 'demo@example.com', password || 'changeme')}><i className="fa fa-envelope" /> Gmail</button>
          <button className="btn-social google" onClick={loginWithGoogle}><i className="fab fa-google" /> Google</button>
          <button className="btn-social facebook" onClick={loginWithFacebook}><i className="fab fa-facebook-f" /> Facebook</button>
          <button className="btn-social whatsapp" disabled title="Use phone auth setup"> <i className="fab fa-whatsapp" /> WhatsApp</button>
        </div>

        <p className="signup-hint">Don't have an account? <a href="#" className="link-accent">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;

