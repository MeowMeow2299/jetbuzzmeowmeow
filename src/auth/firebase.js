import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

const hasAllEnv = Object.values(firebaseConfig).every((v) => typeof v === 'string' && v.trim() !== '' && v !== 'undefined');

export const isAuthConfigured = hasAllEnv;

let app;
let _auth = null;
let _google = null;
let _facebook = null;

if (hasAllEnv) {
  app = initializeApp(firebaseConfig);
  _auth = getAuth(app);
  _google = new GoogleAuthProvider();
  _facebook = new FacebookAuthProvider();
} else {
  // eslint-disable-next-line no-console
  console.error('[Auth] Missing Firebase env. Set VITE_FIREBASE_* env vars. Auth disabled.');
}

export const auth = _auth;
export const googleProvider = _google;
export const facebookProvider = _facebook;

