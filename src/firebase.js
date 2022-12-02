// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOH2ClBfnLSJcC8UKz3YuJ4WYzt01wkpw",
  authDomain: "nbrlyu.firebaseapp.com",
  projectId: "nbrlyu",
  storageBucket: "nbrlyu.appspot.com",
  messagingSenderId: "339348639679",
  appId: "1:339348639679:web:35ac0de8505a193e305b0a",
  measurementId: "G-827SFEZV4G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
