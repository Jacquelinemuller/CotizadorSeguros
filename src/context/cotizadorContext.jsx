
import { createContext } from "react"

const CotizadorContext = createContext ({})
/*function realizarcotizacion () {
const [error, setError] = useState(false);
   const cotizacion = (e) => {
    e.preventDefault();
    if (metros === 0 || propiedad === "" || ubicacion === "") {
      setError(true);
      return;
    }
    setError(false);
      

    const total = calcularTotal(ubicacion, propiedad, metros);
    setTotal(total);
        
  };
}*/


export default CotizadorContext