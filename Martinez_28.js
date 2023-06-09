/*Crear una función que retorne la cantidad de balances positivos 
utilizando la variable “balancesUltimoSemestre” del ejercicio anterior.
*/


let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
];

function gananciaTotal (balancesUltimoSemestre){
    var contador = 0;
    for (i=0; i<balancesUltimoSemestre.length; i++){
        if (balancesUltimoSemestre[i].ganancia>0){
            contador ++;
        }
    }
    console.log(contador);
}

gananciaTotal(balancesUltimoSemestre);
  