// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "educational-hub-31f3b.firebaseapp.com",
  projectId: "educational-hub-31f3b",
  storageBucket: "educational-hub-31f3b.appspot.com",
  messagingSenderId: "479334201944",
  appId: "1:479334201944:web:9cb6a98c3b3fbf7d48a82d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);