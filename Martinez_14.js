const prompt = require('prompt-sync')();
console.log("EJERCICIO 14");
var palabra1 = prompt("Ingrese una palabra: ");
var palabra2= prompt("Ingrese una palabra: ");
var divisor1=parseInt(prompt("Ingrese el primer divisor: "));
var divisor2=parseInt(prompt("Ingrese el segundo divisor:  "));
var loop=parseInt(prompt("Ingrese hasta donde llega el loop: "));
function Juego (palabra1, palabra2,loop,divisor1,divisor2){
    var conjuncion = palabra1+palabra2
    for (i=1; i<(loop+1);i++){
        if (i%divisor1 === 0 && i%divisor2==0){
            console.log(conjuncion);
        }else if(i%divisor1===0) {
            console.log(palabra1);
        }else if (i%divisor2==0){
            console.log(palabra2);
        }else {
            console.log(i);
        }
    }
}

Juego(palabra1,palabra2,loop,divisor1,divisor2);