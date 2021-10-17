import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqxW2B7yzKHBRW8F7ZGnZD_fDx__kwJxo",
    authDomain: "react-app-journal-92b89.firebaseapp.com",
    projectId: "react-app-journal-92b89",
    storageBucket: "react-app-journal-92b89.appspot.com",
    messagingSenderId: "350113256216",
    appId: "1:350113256216:web:5fab75377bc7106fa0c46d"
  };
  
initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    getAuth,
    signInWithPopup, 
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
}