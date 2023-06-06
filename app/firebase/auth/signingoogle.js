import firebase_app from "../config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function SignInGoogle() {
  const provider = new GoogleAuthProvider();
  let result = null;
  let error = null;
  
  try {
    result = await signInWithPopup(auth, provider);
    // Handle the successful Google authentication
  } catch (e) {
    error = e;
  }
  
  return { result, error };
};
