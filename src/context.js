import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("Jason Benedictus");
  const [nim, setNim] = useState("A11.2021.13327");

  return (
    <AppContext.Provider value={{ name, setName, nim, setNim }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
