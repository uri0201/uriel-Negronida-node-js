/*Crear una función llamada “gananciaTotal” que recibe 
como argumento un array con los balances de un periodo y tal 
como lo indica su nombre retorna la ganancia total de ese periodo.*/

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
];

function gananciaTotal (balancesUltimoSemestre){
    var suma = 0;
    for (i=0; i<balancesUltimoSemestre.length; i++){
        suma += balancesUltimoSemestre[i].ganancia;
    }
    console.log(suma);
}

gananciaTotal(balancesUltimoSemestre);
  
