import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

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

export function useCurrentUser(auth: Auth) {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Initial state: no user

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => listener();
  }, [auth]);
  return currentUser;
}
