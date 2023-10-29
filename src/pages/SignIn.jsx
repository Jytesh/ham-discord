import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../utils/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { auth } = useAuth();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log({ result });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Button variant="contained" onClick={handleSignIn}>
        Sign in with Google
      </Button>
    </div>
  );
}
