import { Box } from "@mui/material";
import {
  signInWithGoogle,
  useAuthState,
} from "../../LibFacade/src/firebase/authentication/firebase.auth";
import { auth } from "../../LibFacade/src/firebase/firebase";

export default function AuthPage() {
  const authState = useAuthState(auth);
  return (
    <Box padding={"15px"}>
      <h1>Authentication Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </Box>
  );
}
