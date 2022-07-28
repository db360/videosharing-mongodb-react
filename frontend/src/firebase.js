// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "video-share-51d19.firebaseapp.com",
  projectId: "video-share-51d19",
  storageBucket: "video-share-51d19.appspot.com",
  messagingSenderId: "230816538710",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
