import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBw2_09-CPVIdpjQiquUUfA2LwQJcvsERo",
  authDomain: "chat-bot-fa40c.firebaseapp.com",
  databaseURL: "https://chat-bot-fa40c-default-rtdb.firebaseio.com",
  projectId: "chat-bot-fa40c",
  storageBucket: "chat-bot-fa40c.appspot.com",
  messagingSenderId: "252322462455",
  appId: "1:252322462455:web:5e8fb1cdf297a2b751b1f2",
  measurementId: "G-MVKV58E6XV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
