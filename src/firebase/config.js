// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBl8bsYJaQvi9KSlC_rf3S95KR3NPaHe4",
  authDomain: "tiendasoftware-geranajestic.firebaseapp.com",
  projectId: "tiendasoftware-geranajestic",
  storageBucket: "tiendasoftware-geranajestic.appspot.com",
  messagingSenderId: "219328541769",
  appId: "1:219328541769:web:bd483a9f04514a7db9bb98",
  measurementId: "G-8NJBXVK99Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);