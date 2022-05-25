import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA1tIKYGlLFwAXo5t2mqwC_leW1TslTkkY",
  authDomain: "hackathon-saylani-3ee66.firebaseapp.com",
  projectId: "hackathon-saylani-3ee66",
  storageBucket: "hackathon-saylani-3ee66.appspot.com",
  messagingSenderId: "960687736761",
  appId: "1:960687736761:web:d7da92fc4edf645bd85868",
  measurementId: "G-SW8ZB7MZ6D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);