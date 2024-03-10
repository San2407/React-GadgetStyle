// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdKEzB-dY5BHhn2rxzD977ZdUqnPspN5g",
    authDomain: "gadget-style-34430.firebaseapp.com",
    projectId: "gadget-style-34430",
    storageBucket: "gadget-style-34430.appspot.com",
    messagingSenderId: "425560667394",
    appId: "1:425560667394:web:f5b94e41e1c6682947fe1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)