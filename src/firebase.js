import firebase from 'firebase';
  
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4ncsixeGa2eGJfMkedPGP7_qYHhc2vc",
  authDomain: "joyridebackendpoc.firebaseapp.com",
  projectId: "joyridebackendpoc",
  storageBucket: "joyridebackendpoc.appspot.com",
  messagingSenderId: "398661559890",
  appId: "1:398661559890:web:61dd035dfb4e6fa3c8618b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;