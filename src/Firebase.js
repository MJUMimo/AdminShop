import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZn_C8SwXPGGJIimcHqBQzKzDgb51gHtA",
  authDomain: "petshop-cc2b5.firebaseapp.com",
  projectId: "petshop-cc2b5",
  storageBucket: "petshop-cc2b5.appspot.com",
  messagingSenderId: "232135849798",
  appId: "1:232135849798:web:5a1c90347efa5d1b391747",
  measurementId: "G-6928XQMEVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;