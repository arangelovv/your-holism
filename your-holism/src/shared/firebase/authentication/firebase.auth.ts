import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

//Signing in with Google Auth Provider
export function signInWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider).then(async (result) => {
    const user = result.user;
    console.warn(
      `User Logged In => ${"\n"} UID: ${user.uid}, Username: ${
        user.displayName
      }`
    );
    const docRef = doc(firestore, "users", `${user.uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.warn("Document data:", docSnap.data());
    } else {
      console.warn("No such document! Currently Creating...");
      setDoc(docRef, { userName: user.displayName });
      console.warn(
        "Document has been created successfully!",
        (await getDoc(docRef)).data()
      );
    }
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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => listener();
  }, [auth]);
  return currentUser;
}
