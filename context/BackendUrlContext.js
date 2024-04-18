// context/BackendUrlContext.js
import React, { createContext, useContext, useState } from 'react';

const BackendUrlContext = createContext();

export const BackendUrlProvider = ({ children }) => {
  const [backendUrl, setBackendUrl] = useState("http://localhost:8080");

  return (
    <BackendUrlContext.Provider value={{ backendUrl, setBackendUrl }}>
      {children}
    </BackendUrlContext.Provider>
  );
};

export const useBackendUrl = () => useContext(BackendUrlContext);
