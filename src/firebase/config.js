// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBBl8bsYJaQvi9KSlC_rf3S95KR3NPaHe4',
    authDomain: 'tiendasoftware-geranajestic.firebaseapp.com',
    projectId: 'tiendasoftware-geranajestic',
    storageBucket: 'tiendasoftware-geranajestic.appspot.com',
    messagingSenderId: '219328541769',
    appId: '1:219328541769:web:bd483a9f04514a7db9bb98',
    measurementId: 'G-8NJBXVK99Z'
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
