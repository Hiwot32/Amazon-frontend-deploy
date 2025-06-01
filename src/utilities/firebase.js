// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXqarBWhPWcWQnd4RYqrTcm4HDp-OOVfg",
  authDomain: "clone-4cfbf.firebaseapp.com",
  projectId: "clone-4cfbf",
  storageBucket: "clone-4cfbf.firebasestorage.app",
  messagingSenderId: "831650849655",
  appId: "1:831650849655:web:66234ca7f9021aaca1f772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);