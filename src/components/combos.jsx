import useCotizador from "../hooks/useCotizador";


const Combos = ({datos,label,tipo}) => {
    
  const {elementos,setElementos} = useCotizador ()
   
    return (
     <>
     <label htmlFor={tipo}>{label}</label>
    <select name={tipo} id={tipo} defaultValue= {0} onChange= {(e)=> setElementos ({...elementos, [tipo]: parseFloat(e.target.value),
                                                                                                  [label] : e.target.options[e.target.selectedIndex].text                                    })}  >
     <option disabled value={0}>
        ...
     </option>
     {datos.map((elemento,index) => (
         <option key= {index} value={elemento.factor}>{elemento.tipo}</option>
         ))}
     </select>
      

     </>
    );
  }
  
  export default Combos;
  