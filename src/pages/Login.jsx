import React, { useEffect, useState } from 'react';
import './Login.css';
import { useAuth } from '../auth/AuthContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { user, loginWithGoogle, loginWithFacebook, loginWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setBusy(true);
      await loginWithEmail(email, password);
      if (!isNaN(1)) {
        // fallback for mock mode when Firebase disabled
      }
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally { setBusy(false); }
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  // Phone/OTP flow removed to align with Signup-style simplicity
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
            <button type="submit" className="btn-primary" disabled={busy}>Login</button>
            <a className="link-muted" href="#">Forgot password?</a>
          </div>
        </form>
        {error && <div className="error-hint">{error}</div>}

        <div className="divider"><span>or continue with</span></div>

        <div className="social-grid">
          <button type="button" className="btn-social google" onClick={loginWithGoogle}><i className="fab fa-google" /> Continue with Google</button>
          <button type="button" className="btn-social facebook" onClick={loginWithFacebook}><i className="fab fa-facebook-f" /> Continue with Facebook</button>
        </div>

        <p className="signup-hint">Don't have an account? <a href="/signup" className="link-accent">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;

