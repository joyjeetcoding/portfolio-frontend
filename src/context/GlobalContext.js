"use client"
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <GlobalContext.Provider value={{handleNav, navbar}}>
      {children}
    </GlobalContext.Provider>
  );
}
