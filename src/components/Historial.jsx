import { HiHome } from "react-icons/hi"
import { Link } from "react-router-dom"
import usehistorial from "../hooks/useValorPolizaContext"
import ValorPoliza from "./ValorPoliza"

function Historial() {
  const {historial} = usehistorial ()
   console.log(historial);
  
  return(
    
    <>
    <nav>
    <Link to = {"/"}>
        <HiHome/>
    </Link></nav>
    <header>

    <header className="header2">
        <h1 className="center">Historial de cotizaciones </h1> 
            </header>
    </header>
    <ul className="principal">
      {historial.map((elemento,indice) => <ValorPoliza key={indice} {...elemento}/>)}
    </ul>
    </>
    )
}

export default Historial

