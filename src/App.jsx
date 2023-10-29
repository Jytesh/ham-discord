import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AuthProvider } from "./utils/AuthContext";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import LogOut from "./pages/LogOut";

const firebaseConfig = {
  apiKey: "AIzaSyCRxR9sDtONjm_dG8T611m7cq4Eu1oWN5g",
  authDomain: "ham-discord.firebaseapp.com",
  projectId: "ham-discord",
  storageBucket: "ham-discord.appspot.com",
  messagingSenderId: "497773406676",
  appId: "1:497773406676:web:4950c15bba37b240c0ce41",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="logout" element={<LogOut />} />
    </>
  )
);

function App() {
  return (
    <AuthProvider auth={auth}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
