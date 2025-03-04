// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwnHBww5vlYMSVKVsg3noOjoFhUCH12ac",
  authDomain: "ecommerce-a02fb.firebaseapp.com",
  projectId: "ecommerce-a02fb",
  storageBucket: "ecommerce-a02fb.firebasestorage.app",
  messagingSenderId: "806227913075",
  appId: "1:806227913075:web:db14eb445712bf27123d06",
  measurementId: "G-NZPV225J1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export {fireDB,auth};