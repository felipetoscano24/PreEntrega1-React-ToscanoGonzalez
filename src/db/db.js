import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2tJMX7yPFPilhO46pxQscRln-KphNymQ",
  authDomain: "candykingdom-candystore.firebaseapp.com",
  projectId: "candykingdom-candystore",
  storageBucket: "candykingdom-candystore.appspot.com",
  messagingSenderId: "110219283846",
  appId: "1:110219283846:web:2bf4587b6179b3220f7007"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db