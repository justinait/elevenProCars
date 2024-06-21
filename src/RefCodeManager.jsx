import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReferenceContext } from './context/ReferenceContext';

const RefCodeManager = () => {
  const location = useLocation();
  const { setRefCode } = useContext(ReferenceContext);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ref = searchParams.get('ref');
    
    if (ref) {
      setRefCode(ref); // Actualiza el código de referencia en el contexto
    }
  }, [location.search, setRefCode]);

  return null;
};

export default RefCodeManager;