import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { firebaseConfig } from "../../enviorments/enviroment.dev";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

connectAuthEmulator(auth, "http://127.0.0.1:9099");
