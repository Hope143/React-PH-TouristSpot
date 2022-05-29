import { initializeApp } from "firebase/app";
import { getFireStore, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxta7s9Jw645niVQDUpEA7ju7ptZlgwcw",
  authDomain: "simple-ecommerce-website-a3538.firebaseapp.com",
  projectId: "simple-ecommerce-website-a3538",
  storageBucket: "simple-ecommerce-website-a3538.appspot.com",
  messagingSenderId: "675783915834",
  appId: "1:675783915834:web:eb5cc919296a52c08a3803",
  measurementId: "G-QW3PHW4N8L",
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export default { db };
