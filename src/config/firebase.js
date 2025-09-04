// Import all the firebase modules for app initialization and database creation

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { API_KEY, AUTH_DOMAIN, PROJECT_ID, MESSAGING_SENDER_ID, APP_ID } from "@env";

// Firebase configuration

const firebaseConfig = {

    apiKey: API_KEY,

    authDomain: AUTH_DOMAIN,

    projectId: PROJECT_ID,

    messagingSenderId: MESSAGING_SENDER_ID,

    appId: APP_ID

}

// Debug

console.log("Valor de configuración", firebaseConfig)

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

export { database }
 