const prompt = require('prompt-sync')();
console.log("EJERCICIO 16");
var inicio=parseInt(prompt("Ingrese el inicio: "));
var final=parseInt(prompt("Ingrese el final: "));
var incremento=parseInt(prompt("Ingrese el incremento: "));
const array1 = new Array (50);
function rango(array1,inicio, final, incremento){
    for( i=inicio; i<final+1; i=i+incremento){
        array1.push(i);       
    }
    console.log(array1);
}
rango(array1,inicio,final,incremento);