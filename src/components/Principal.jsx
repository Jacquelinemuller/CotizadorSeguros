import { Link } from 'react-router-dom';
import {HiOutlineClipboardList} from "react-icons/hi"
import Combos from './combos';
import { useEffect, useState } from 'react';
import useCotizador from '../hooks/useCotizador';
import headerImagen from "../img/headerImagen.jpg"
import { calcularTotal } from "../helpers"
import Swal from "sweetalert2"
import { HiSave} from "react-icons/hi"
import usehistorial from '../hooks/useValorPolizaContext';

function Principal() {

   const { elementos, setElementos } = useCotizador();
   const {historial , setHistorial} = usehistorial ([]);
   const [total, setTotal] = useState (0);
   const [datos,setDatos] = useState ([]);
   const { metros, ubicacion, propiedad, factor, factores} = elementos;
      
  useEffect(()=> {
      const ver = async () => setDatos(await (await fetch("/datos.json")).json());
      ver();
    }, []);

 const cotizacion = () => {
        if (propiedad == 0 || ubicacion == 0 || metros < 20) {
        alerta('', 'Debes completar todos los datos en pantalla..', 'warning') } 
        else { 
        const newCotizacion = calcularTotal(factor, factores, metros);
        setTotal(newCotizacion);
      }}  

        const alerta = (titulo, mensaje, icono)=> {
          Swal.fire({
              icon: icono || '', 
              title: titulo || '',
              text: mensaje,
              showConfirmButton: false,
              timer: 3500,
              width: '240px'
            })
      }      

   const btonGuardar = () => {
    setHistorial ([...historial, {fecha: new Date().toLocaleString(),
                 ubicacion,
                 propiedad,
                  Valor: ((elementos.factores * elementos.factor * elementos.metros * 35).toFixed(2)),
  }])  
    setTotal (0)
   
  }

   return (
  <>
   <nav> <Link to= "/historial">CONSULTA DE COTIZACIONES<HiOutlineClipboardList/> </Link> </nav>
   <header className="header1">
        <h1 className="center">Seguros del hogar</h1> 
        <img src={headerImagen} alt="imagen encabezado" />
    </header>
   <section>
    <form className="formulario" action="" onSubmit={ (e) => e.preventDefault()}>
     <Combos 
     datos= {datos.filter(dato => dato.categoria === "propiedad")}
     label = { "propiedad"}  
     tipo= {"factor"}
      />
     <Combos datos= {datos.filter(dato => dato.categoria === "ubicacion")} 
           label = { "ubicacion"} 
           tipo= {"factores"}
            />

  
   <label htmlFor="metros" >Coloque la cantidad de metros2</label>
   <input type="number" id="metros"  value="20" min="20" max="500" required onInput={(e) => setElementos({...elementos , metros: isNaN(parseInt(e.target.value))
  ? 20
  :parseInt(e.target.value)<20
  ?20
  :parseInt(e.target.value),
})
}
/>
   <button  type="button" onClick={cotizacion}>Realizar Cotizacion</button>
</form>
{total!= 0 && (
  <>
  <p className="importe"> Precio estimado: ${" "} {total}</p>
  <form className="" action="" onSubmit={ (e) => e.preventDefault()}>
  <button className='btguardar' type="button" onClick={btonGuardar} title='guardar cotizacion'><HiSave/></button>
  </form>
  </>
)}
   </section>
  </>
  )
}

export default Principal

