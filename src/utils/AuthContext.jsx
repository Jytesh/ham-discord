import { createContext, useContext } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ auth, children }) => {
  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
