import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RefCodeManager = () => {
  
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const ref = searchParams.get('ref');
        // Aquí puedes guardar 'ref' en el estado de tu componente o en el contexto de la aplicación
        // También puedes enviarlo al backend si es necesario
        console.log(ref);
    }, [location.search]);
  return null;
};

export default RefCodeManager;
