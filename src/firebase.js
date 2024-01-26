// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaGfaOjpYoC9_zfX2U79NSoeEzEefzLTM",
  authDomain: "kamakhya-medicos.firebaseapp.com",
  databaseURL: "https://kamakhya-medicos-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kamakhya-medicos",
  storageBucket: "kamakhya-medicos.appspot.com",
  messagingSenderId: "536387603198",
  appId: "1:536387603198:web:e0f7c8ae7410a9d109f3af",
  measurementId: "G-P8C5EY9TCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;