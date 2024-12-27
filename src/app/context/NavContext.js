"use client"
// provides context for opening the nav bar anywhere in the application
import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <NavContext.Provider value={{ active, setActive }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);