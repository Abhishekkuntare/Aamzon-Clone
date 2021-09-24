// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdfujuKYhDspcoRAQUB3on1ioIk967V6g",
  authDomain: "clone-6a5ca.firebaseapp.com",
  projectId: "clone-6a5ca",
  storageBucket: "clone-6a5ca.appspot.com",
  messagingSenderId: "1054351611406",
  appId: "1:1054351611406:web:3b6d8d3ba4815db1250e5f",
  measurementId: "G-2EHFJQC8T5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // db means data base 
const auth = firebaseApp.auth();

export { db, auth };