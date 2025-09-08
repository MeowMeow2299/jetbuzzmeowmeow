import React, { useState } from 'react';
import './Signup.css';
import { useAuth } from '../auth/AuthContext.jsx';

const Signup = () => {
  const { signupWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!agree) {
      setError('Please agree to the Terms and Privacy Policy');
      return;
    }
    if (!age || Number(age) < 18) {
      setError('You must be at least 18 years old');
      return;
    }
    try {
      await signupWithEmail(email, password);
    } catch (err) {
      setError(err?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-bg" />

      <div className="signup-card">
        <div className="signup-card__header">
          <h1 className="signup-title">Welcome to JeetBuzzGames</h1>
          <p className="signup-subtitle">Create an account to discover, play and win</p>
        </div>

        <form className="signup-form" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="s-email">Email</label>
            <input id="s-email" type="email" placeholder="you@example.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="s-password">Create a password</label>
            <input id="s-password" type="password" placeholder="At least 8 characters" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="s-age">Age</label>
            <input id="s-age" type="number" min="18" placeholder="18+" required value={age} onChange={(e)=>setAge(e.target.value)} />
          </div>

          <label className="agree-row">
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
            <span>
              By continuing, you agree to our <a className="link-accent" href="#">Terms</a> and acknowledge our <a className="link-accent" href="#">Privacy Policy</a>.
            </span>
          </label>

          <button type="submit" className="btn-primary btn-wide">Continue</button>
        </form>
        {error && <div className="error-hint">{error}</div>}

        <div className="divider"><span>or sign up with</span></div>

        <div className="social-grid">
          <button className="btn-social google" onClick={loginWithGoogle}><i className="fab fa-google" /> Continue with Google</button>
          <button className="btn-social facebook" onClick={loginWithFacebook}><i className="fab fa-facebook-f" /> Continue with Facebook</button>
        </div>

        <p className="signin-hint">Already have an account? <a href="/login" className="link-accent">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;

