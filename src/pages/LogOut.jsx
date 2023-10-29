import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
export default function LogOut() {
  const navigate = useNavigate();
  const { auth, loading} = useAuth();
	useEffect(() => {
		if (loading) return;
    if (!auth.currentUser) {
      navigate("/");
    } else {
      auth.signOut().then(() => {
        console.log("Signed out");
        localStorage.clear();
        navigate("/");
      });
    }
  });
  return <CircularProgress />;
}
