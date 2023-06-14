import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "jecomerce-c720d.firebaseapp.com",
    projectId: "jecomerce-c720d",
    storageBucket: "jecomerce-c720d.appspot.com",
    messagingSenderId: "509381721050",
    appId: "1:509381721050:web:9e50860ecec444e678dee3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);