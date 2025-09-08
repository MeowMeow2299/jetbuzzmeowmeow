import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

// Fallback to your provided config if env vars are missing
const firebaseConfigFallback = {
  apiKey: "AIzaSyBTyYqFFm8Qx4i7MgPqgQsjSCrgonnGmRo",
  authDomain: "jetbuzzgaming.firebaseapp.com",
  projectId: "jetbuzzgaming",
  appId: "1:561922224936:web:ac021fa10a6055f599561d",
  messagingSenderId: "561922224936",
};

const hasAllEnv = Object.values(firebaseConfig).every((v) => typeof v === 'string' && v.trim() !== '' && v !== 'undefined');
const configUsed = hasAllEnv ? firebaseConfig : firebaseConfigFallback;

export const isAuthConfigured = !!configUsed?.apiKey;

let app;
let _auth = null;
let _google = null;
let _facebook = null;
let _db = null;

if (isAuthConfigured) {
  app = initializeApp(configUsed);
  _auth = getAuth(app);
  _google = new GoogleAuthProvider();
  _facebook = new FacebookAuthProvider();
  _db = getFirestore(app);
} else {
  // eslint-disable-next-line no-console
  console.error('[Auth] Missing Firebase env. Set VITE_FIREBASE_* env vars. Auth disabled.');
}

export const auth = _auth;
export const googleProvider = _google;
export const facebookProvider = _facebook;
export const db = _db;

