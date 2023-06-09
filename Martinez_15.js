const prompt = require('prompt-sync')();
console.log("EJERCICIO 15");
const array1 = new Array (5);
var divisor=parseInt(prompt("Ingrese el divisor: "));
for(i=1; i<6; i++){
    var num=parseInt(prompt("Ingrese un numero:  "));
    array1.push(num);
}
const array2=new Array (5);
function divisibles(array1,divisor){
    for( i=1; i<array1.length; i++){
        if (array1[i]%divisor===0){
            array2.push(array1[i]);
            
        }
    }
    console.log(array2);
}

divisibles(array1,divisor);
