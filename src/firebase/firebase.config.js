// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBz5xdwJSzwwqDgQnlL0dgSMf2wZxdiAw",
  authDomain: "crafted-figures-auth.firebaseapp.com",
  projectId: "crafted-figures-auth",
  storageBucket: "crafted-figures-auth.appspot.com",
  messagingSenderId: "383109413234",
  appId: "1:383109413234:web:0de563bf5490df184b45eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;