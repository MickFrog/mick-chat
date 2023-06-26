// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrDFNSpijn3edGVXfaTbG0_COPNkEXwuw",
  authDomain: "friendlychat-c49f1.firebaseapp.com",
  projectId: "friendlychat-c49f1",
  storageBucket: "friendlychat-c49f1.appspot.com",
  messagingSenderId: "901345479911",
  appId: "1:901345479911:web:e2ef221cc3508e0cc0e642"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const fireDB = getFirestore(app);