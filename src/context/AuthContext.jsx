import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (data) => {
    setUserId(data.id);
    setToken(data.token);

    localStorage.setItem("userId", data.id);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);

    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ login, logout, userId, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
