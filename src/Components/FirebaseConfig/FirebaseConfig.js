// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5aKsRJ5PpHDlcg0rdfhcJ7X6KkwpM1lA",
  authDomain: "taskify-7d838.firebaseapp.com",
  projectId: "taskify-7d838",
  storageBucket: "taskify-7d838.appspot.com",
  messagingSenderId: "848107786626",
  appId: "1:848107786626:web:29d81d4a1b8e2145703f9b",
  measurementId: "G-1ZWXY1XLZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword}