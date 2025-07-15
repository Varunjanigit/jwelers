import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAbqpGEW4pw741OdrM-qjPDAR_ZhkCH2s",
  authDomain: "vraj-tex.firebaseapp.com",
  projectId: "vraj-tex",
  storageBucket: "vraj-tex.firebasestorage.app",
  messagingSenderId: "988017252893",
  appId: "1:988017252893:web:c74f9dc23c617acc9d44f4",
  measurementId: "G-H8NT5YQ42Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
