// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBugy90APf1sBNMDcJvmS-TWd7zJPf9Z8Y",
  authDomain: "tour-palic.firebaseapp.com",
  projectId: "tour-palic",
  storageBucket: "tour-palic.appspot.com",
  messagingSenderId: "595257568304",
  appId: "1:595257568304:web:787ed585249aabdf57d1f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;