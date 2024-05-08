import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebase";

//Signing in with Google Auth Provider
export function signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider).then((result) => {
    const user = result.user;
    console.warn(
      `User Logged In => ${"\n"} UID: ${user.uid}, Username: ${
        user.displayName
      }`
    );
  });
}

//Signing out from the application
export function authSignOut() {
  signOut(auth);
  console.warn("User Signed out...");
}

//Getting current logged in user
export function getCurrentUser() {
  const user = auth.currentUser;
  return user;
}

export function useAuthState(auth: Auth) {
  const [authState, setAuthState] = useState<string | null>(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(user.uid);
      } else {
        setAuthState(null);
      }
    });
    return () => listener();
  }, [auth]);

  return authState;
}
