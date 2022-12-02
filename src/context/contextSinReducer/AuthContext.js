import { createContext, useState } from "react";


const initialAuth = null;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  function handleAuth() {
    if (auth === null) {
      setAuth(true);
    } else {
      setAuth(null);
    }
  }

  const data = {auth,handleAuth}

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
