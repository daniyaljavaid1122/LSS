import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaGkJsKdUt8YspJ9GsuTsUiFbBsyPby_s",
  authDomain: "bloodoner-1.firebaseapp.com",
  projectId: "bloodoner-1",
  storageBucket: "bloodoner-1.appspot.com",
  messagingSenderId: "697695308909",
  appId: "1:697695308909:web:2788fa4388b639d3b44364",
  measurementId: "G-SRXFFVEX3K"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export { app, auth, database };