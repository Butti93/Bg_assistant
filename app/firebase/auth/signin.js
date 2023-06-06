import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';


const auth = getAuth(firebase_app);

export async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function handleGoogleSignIn() {
    const provider = new firebase_app.auth.GoogleAuthProvider();
    try {
      const result = await firebase_app.auth().signInWithPopup(provider);
      // Handle the successful Google authentication
    } catch (error) {
      // Handle the authentication error
    }
  };