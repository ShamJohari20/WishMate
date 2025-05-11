import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-sTIjMcySeZN5L2bux_lSOVlT25i-UbY",
  authDomain: "wishmate-5ed59.firebaseapp.com",
  projectId: "wishmate-5ed59",
  storageBucket: "wishmate-5ed59.firebasestorage.app",
  messagingSenderId: "951406363199",
  appId: "1:951406363199:web:725b373512d39e702dae8a",
  measurementId: "G-YHHCPWMQF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;