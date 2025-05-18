"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState({
    html: [],
  });
  return (
    <AppContext.Provider
      value={{ name, setName, role, setRole, content, setContent }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
