import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "budget-me-69f04.firebaseapp.com",
    projectId: "budget-me-69f04",
    storageBucket: "budget-me-69f04.appspot.com",
    messagingSenderId: "906254637459",
    appId: "1:906254637459:web:3ada7f73031e090103b066",
    measurementId: "G-MP0M4GXQBP"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);