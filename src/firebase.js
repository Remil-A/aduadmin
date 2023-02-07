import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWX45NEuPZlOAUHsFe67Jlr8LZ2tKTKRU",
  authDomain: "aduadmin.firebaseapp.com",
  projectId: "aduadmin",
  storageBucket: "aduadmin.appspot.com",
  messagingSenderId: "18719796836",
  appId: "1:18719796836:web:d87bfa1ea1a45e75553971",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()