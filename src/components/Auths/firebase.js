import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmv7_UhA-w72BSPQgLT4GGgpahbT-UZtw",
    authDomain: "shop24-11f3b.firebaseapp.com",
    projectId: "shop24-11f3b",
    storageBucket: "shop24-11f3b.appspot.com",
    messagingSenderId: "597474665582",
    appId: "1:597474665582:web:e70d4eb2892ea75f58327f",
    measurementId: "G-MTD4N58K6Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };