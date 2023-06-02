
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4GZr4RtQXR4VJo2D6U7nbyryIl66srks",
    authDomain: "boardgame-assistant-app.firebaseapp.com",
    projectId: "boardgame-assistant-app",
    storageBucket: "boardgame-assistant-app.appspot.com",
    messagingSenderId: "247509939890",
    appId: "1:247509939890:web:cb4f33f1c2f4717f127bab",
    measurementId: "G-H7VKTP4NTZ"
    //apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    //authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    //projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    //storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    //messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    //appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    //measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;