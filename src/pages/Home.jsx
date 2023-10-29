import { useEffect } from "react";
import { useAuth } from "../utils/AuthContext";

import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ExitIcon from "@mui/icons-material/ExitToAppOutlined";
import Card from "@mui/material/Card";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 40,
  },
}));

export default function Home() {
  const { auth } = useAuth();
  const [user, loading] = useAuthState(auth);
  console.log({ user });
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/signin");
    }
  });
  if (loading) return <CircularProgress />;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate("/logout");
            }}
          >
            <ExitIcon />
          </IconButton>
        </StyledToolbar>
        <Card>
          <title> HOME </title>
        </Card>
      </AppBar>
    </Box>
  );
}
