const ValorPoliza = (props)  =>{
    return(
        <>
          
    <li className="poliza"> { Object.keys (props).map ((propiedad,indice)=> 
    <ul key = { indice}>
        
         <li className="descripcionp"> {propiedad }:        {props[propiedad]}</li></ul>)}
    </li>
    </>
    )
}

export default ValorPoliza