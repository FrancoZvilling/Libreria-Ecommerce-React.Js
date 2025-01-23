// src/context/SearchContext.js
import { createContext, useState, useContext } from 'react';

// Creamos el contexto de búsqueda
const BusquedaContext = createContext();

// El provider de búsqueda
export const BusquedaProvider = ({ children }) => {
  const [BusquedaQuery, setBusquedaQuery] = useState(''); // Estado para almacenar lo que busca el usuario

  // Función para actualizar el estado de la búsqueda
  const updateBusquedaQuery = (query) => {
    setBusquedaQuery(query);
  };

  return (
    <BusquedaContext.Provider value={{ BusquedaQuery, updateBusquedaQuery }}>
      {children}
    </BusquedaContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useBusqueda = () => useContext(BusquedaContext);
