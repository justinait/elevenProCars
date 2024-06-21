import React, { createContext, useContext, useState } from 'react';

export const ReferenceContext = createContext();

export const useReferenceContext = () => useContext(ReferenceContext);

export const ReferenceContextProvider = ({ children }) => {
  const [referenceCode, setReferenceCode] = useState(null);

  const setRefCode = (code) => {
    setReferenceCode(code);
  };

  return (
    <ReferenceContext.Provider value={{ referenceCode, setRefCode }}>
      {children}
    </ReferenceContext.Provider>
  );
};
