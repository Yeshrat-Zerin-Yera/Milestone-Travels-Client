// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV11mtFR6NT_nxm8Xvsj5QobWtgnfejjA",
    authDomain: "milestone-travels.firebaseapp.com",
    projectId: "milestone-travels",
    storageBucket: "milestone-travels.appspot.com",
    messagingSenderId: "337362960894",
    appId: "1:337362960894:web:2d1ed963a28a723dc100af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;