// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPWBZ2BivAym9sT3I4Ow5Y-O23TZBJFw",
  authDomain: "cards-a3858.firebaseapp.com",
  projectId: "cards-a3858",
  storageBucket: "cards-a3858.firebasestorage.app",
  messagingSenderId: "582068539825",
  appId: "1:582068539825:web:d5426d2b7fad2035faad90"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
