import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVxp77Ks5v8wuhPc81oaIIJse9m2kGBlI",
  authDomain: "marioapp-7be32.firebaseapp.com",
  projectId: "marioapp-7be32",
  storageBucket: "marioapp-7be32.appspot.com",
  messagingSenderId: "910449310358",
  appId: "1:910449310358:web:b087cc106f6caf8338a0b7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshot: true });

export default firebase;