// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8pkay5XsZmLOjQc3qDjsKJXBIHu-O7M",
  authDomain: "react-auth-project-941fd.firebaseapp.com",
  projectId: "react-auth-project-941fd",
  storageBucket: "react-auth-project-941fd.firebasestorage.app",
  messagingSenderId: "19162126101",
  appId: "1:19162126101:web:300e85e660e03e5896bb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);