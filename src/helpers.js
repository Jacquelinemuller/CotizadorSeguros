export function calcularTotal(factores, factor, metros){
    const factoresInt = parseInt(factores);
    const factorInt = parseInt(factor);
    const metrosInt = parseInt (metros)
    const costoM2 = 35.86;
    
    let totalCantidad = (factores * factor * metros * costoM2).toFixed(2)
    
    return totalCantidad
    
    
   
    //console.log(totalCantidad);
}

