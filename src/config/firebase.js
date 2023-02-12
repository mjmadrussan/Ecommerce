// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCodx0pFCRdfnWtpmTYZ2Cz26lK0paGoJk",
  authDomain: "shoe-store-6f176.firebaseapp.com",
  projectId: "shoe-store-6f176",
  storageBucket: "shoe-store-6f176.appspot.com",
  messagingSenderId: "49498335844",
  appId: "1:49498335844:web:b2f6b96b9956b155a88d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)