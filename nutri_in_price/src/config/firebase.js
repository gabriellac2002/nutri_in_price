// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEE3XjasgonGqpDgBzdMEEbOeL1j6tzsc",
  authDomain: "nutriinprice2.firebaseapp.com",
  projectId: "nutriinprice2",
  storageBucket: "nutriinprice2.appspot.com",
  messagingSenderId: "108629740810",
  appId: "1:108629740810:web:67bb3cffb53cdc9f96fef3",
  measurementId: "G-1Q0999NFGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);