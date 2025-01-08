// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjq4HEACpv5wNhF1IL55R4yJ3yCL41-_o",
  authDomain: "ecommerce-libreria-a5c61.firebaseapp.com",
  projectId: "ecommerce-libreria-a5c61",
  storageBucket: "ecommerce-libreria-a5c61.firebasestorage.app",
  messagingSenderId: "474294742586",
  appId: "1:474294742586:web:61a625a1b555887cf7cf03",
  measurementId: "G-PEVKTF6QY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
