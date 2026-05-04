import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXmwfVujOYxhqMTrXG7QZQeXOba0g6P1U",
  authDomain: "ap-plumbing-91865.firebaseapp.com",
  projectId: "ap-plumbing-91865",
  storageBucket: "ap-plumbing-91865.firebasestorage.app",
  messagingSenderId: "226790221838",
  appId: "1:226790221838:web:1291a4348d904af590b45f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);