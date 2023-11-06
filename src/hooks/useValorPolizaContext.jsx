import { useContext } from "react";
import ValorPolizaContex from "../context/historialContext";

const usehistorial = () => useContext(ValorPolizaContex);
export default usehistorial;
