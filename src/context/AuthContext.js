"use client"; // This line is not valid JavaScript, remove it

import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("admin-user"));
    if (storedUser) {
      setAuthUser(storedUser);
    }
  }, []); // Run only once on component mount

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
