import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIXDbanypPnMT3nF1mSmakurGOidtWTw4",
  authDomain: "portfolio-8971b.firebaseapp.com",
  projectId: "portfolio-8971b",
  storageBucket: "portfolio-8971b.firebasestorage.app",
  messagingSenderId: "282456799099",
  appId: "1:282456799099:web:3ec20dbe958c1558efefde",
  measurementId: "G-GM7VZXD2ZW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () =>
  signInWithPopup(auth, provider);

export const logout = () =>
  signOut(auth);

export { app, analytics };