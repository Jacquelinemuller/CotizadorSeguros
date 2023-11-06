import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import Historial from "./components/Historial";
import ValorPolizaContex from "./context/historialContext";
import CotizadorContext from "./context/cotizadorContext";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
const App = () => {
  /* const [error, setError] = useState(false);*/
  const [elementos, setElementos] = useState({
    metros: 20,
    ubicacion: 0,
    propiedad: 0,
  });
  const [historial, setHistorial] = useLocalStorage("historial", []);

  return (
    <>
      <ValorPolizaContex.Provider value={{ historial, setHistorial }}>
        <CotizadorContext.Provider value={{ elementos, setElementos }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/historial" element={<Historial />} />
            </Routes>
          </BrowserRouter>
        </CotizadorContext.Provider>
      </ValorPolizaContex.Provider>
    </>
  );
};

export default App;

/**/
