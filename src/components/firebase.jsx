import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//My Firebase API Config
const firebaseConfig = {
  apiKey: "AIzaSyBSpT9MTi2NMmXEzCq-MAGYbAMq-0uT998",
  authDomain: "chatapp-94f68.firebaseapp.com",
  projectId: "chatapp-94f68",
  storageBucket: "chatapp-94f68.appspot.com",
  messagingSenderId: "159219888310",
  appId: "1:159219888310:web:e87dc5ac1811b3c1eeb617",
  measurementId: "G-YMHFH9BT4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
