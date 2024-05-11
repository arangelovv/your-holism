import { Box } from "@mui/material";
import {
  signInWithGoogle,
  useAuthState,
} from "../../shared/firebase/authentication/firebase.auth";
import { auth } from "../../shared/firebase/firebase";

export default function AuthPage() {
  const authState = useAuthState(auth);
  return (
    <Box padding={"15px"}>
      <h1>Authentication Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </Box>
  );
}