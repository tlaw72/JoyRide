import firebase from 'firebase';
  
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Troy's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4ncsixeGa2eGJfMkedPGP7_qYHhc2vc",
  authDomain: "joyridebackendpoc.firebaseapp.com",
  projectId: "joyridebackendpoc",
  storageBucket: "joyridebackendpoc.appspot.com",
  messagingSenderId: "398661559890",
  appId: "1:398661559890:web:61dd035dfb4e6fa3c8618b"
};

// Amy's Firebase config
// const firebaseConfig = {
//     apiKey: "AIzaSyCJ4HsE-FdxMTcU87i0pUu_RhuEUZc3FlI",
//     authDomain: "joyride-b528c.firebaseapp.com",
//     projectId: "joyride-b528c",
//     storageBucket: "joyride-b528c.appspot.com",
//     messagingSenderId: "103325948359",
//     appId: "1:103325948359:web:6b90fad392f15c8acb21e2"
// };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var firestore = firebase.firestore();
  
export default database;
// export default firestore;