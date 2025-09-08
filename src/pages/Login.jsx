import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../auth/AuthContext.jsx';

const Login = () => {
  const { loginWithGoogle, loginWithFacebook, loginWithEmail, signupWithEmail, startPhoneLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginWithEmail(email, password);
    } catch (err) {
      setError(err?.message || 'Login failed');
    }
  };
  const onSendOtp = async () => {
    setError('');
    try {
      const c = await startPhoneLogin(phone, 'recaptcha-container');
      setConfirmation(c);
    } catch (err) {
      setError(err?.message || 'Failed to send OTP');
    }
  };
  const onVerifyOtp = async () => {
    if (!confirmation) return;
    setError('');
    try {
      await confirmation.confirm(otp);
    } catch (err) {
      setError(err?.message || 'Invalid OTP');
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
        </div>

        <div className="divider"><span>WhatsApp / Phone</span></div>
        <div className="form-field">
          <label htmlFor="phone">Phone number (with country code)</label>
          <input id="phone" type="tel" placeholder="+84xxxxxxxxx" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="form-actions" style={{gap: '8px'}}>
          <button className="btn-primary" type="button" onClick={onSendOtp}>Send OTP</button>
          <div id="recaptcha-container" />
        </div>
        {confirmation && (
          <>
            <div className="form-field">
              <label htmlFor="otp">Enter OTP</label>
              <input id="otp" type="text" placeholder="123456" value={otp} onChange={(e)=>setOtp(e.target.value)} />
            </div>
            <div className="form-actions">
              <button className="btn-primary" type="button" onClick={onVerifyOtp}>Verify OTP</button>
            </div>
          </>
        )}

        <p className="signup-hint">Don't have an account? <a href="/signup" className="link-accent">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;

