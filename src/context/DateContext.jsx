import { createContext, useState, useEffect } from "react";

export const FechaContext = createContext();

const FechaProvider = (props) => {
  const [fecha, setFecha] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setFecha(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <FechaContext.Provider value={fecha}>
      {props.children}
    </FechaContext.Provider>
  );
};

export default FechaProvider;
