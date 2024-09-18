import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXmSNXhF1-EPVjQaIgCC0dB3fESTlgsKk",
  authDomain: "vk-football-1b9a5.firebaseapp.com",
  projectId: "vk-football-1b9a5",
  storageBucket: "vk-football-1b9a5.appspot.com",
  messagingSenderId: "7615742662",
  appId: "1:7615742662:web:8a6429230115463b4fcdc7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
