import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  const loginWithFacebook = () => signInWithPopup(auth, facebookProvider);
  const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signupWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const ensureRecaptcha = (containerId = 'recaptcha-container') => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
        size: 'invisible',
      });
    }
    return window.recaptchaVerifier;
  };

  const startPhoneLogin = async (phoneNumber, containerId) => {
    const verifier = ensureRecaptcha(containerId);
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, verifier);
    return confirmation; // caller stores and confirms
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithFacebook, loginWithEmail, signupWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

