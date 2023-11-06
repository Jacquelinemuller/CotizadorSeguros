import { useContext } from "react";
import CotizadorContext from "../context/cotizadorContext"

const useCotizador = () => useContext(CotizadorContext);
export default useCotizador