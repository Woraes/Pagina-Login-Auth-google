// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYI4tGGfyS4rOI5C3-UPn5MkCwAg54wg",
  authDomain: "auth-f7dc4.firebaseapp.com",
  projectId: "auth-f7dc4",
  storageBucket: "auth-f7dc4.appspot.com",
  messagingSenderId: "564030472845",
  appId: "1:564030472845:web:4c3858d4ab9df7ab0b98c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);