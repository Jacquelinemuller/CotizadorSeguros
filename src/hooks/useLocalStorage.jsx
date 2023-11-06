import { useState,useEffect } from "react";

const useLocalStorage = (clave, valorInicial) => {
  const local = () => {
    let dato = localStorage.getItem(clave);
    if (!dato) {
      localStorage.setItem(clave, valorInicial);
      return valorInicial;
    }
    return JSON.parse(dato);
  };
  const [valor, setValor] = useState(local);
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [valor, clave]);
  return [valor, setValor];
};

export default useLocalStorage;