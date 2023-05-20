// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBxe0W1ITwDsfc4aMeO9a9vHt0eADT-T8",
  authDomain: "real-tor-1a6a3.firebaseapp.com",
  projectId: "real-tor-1a6a3",
  storageBucket: "real-tor-1a6a3.appspot.com",
  messagingSenderId: "806703495814",
  appId: "1:806703495814:web:f0b8ac90c6f83e2927af07"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();