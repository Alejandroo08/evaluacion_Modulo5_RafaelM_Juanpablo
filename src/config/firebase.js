import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, MESSAGING_SENDER_ID, APP_ID } from "@env";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdk3fQTx4cyjUa3iW_6FKUfRz4SqWY_A8",
  authDomain: "evaluacion-modulo5-rafa-juan.firebaseapp.com",
  projectId: "evaluacion-modulo5-rafa-juan",
  storageBucket: "evaluacion-modulo5-rafa-juan.firebasestorage.app",
  messagingSenderId: "832046354624",
  appId: "1:832046354624:web:df22de875715f19ba79d25"
};
// Initialize firebase database
const app = initializeApp(firebaseConfig)

if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const auth = getAuth(app)

if (auth) {
    console.log('Firebase initialized successfully');
  } else {
    console.log('Firebase initialization failed');
  }

const db = getFirestore(app)

if (db) {
  console.log('Firestore initialized correctly');

} else {
  console.log('Firestore initialization failed');
}
export { db, auth }
 