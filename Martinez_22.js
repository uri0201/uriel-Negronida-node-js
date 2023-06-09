/*22 - Crear una función llamada “moveZeros” que reciba un arreglo como parámetro y 
devuelva otro con los números “0” ordenados al final.
Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]*/

const prompt = require('prompt-sync')();
const array = [];
const par = parseInt(prompt('Ingrese la cantidad de números en el parámetro: '))
for (i = 0; i<par; i++){
    var num = parseInt(prompt('Ingrese el número: '))
    array.push(num);
}

function moveZeros(array){
    const array2= new Array()
    const array3= new Array()
    for (i = 0; i<(array.length); i++){
        if (array[i]!==0){
            array2.push(array[i]);
        }
    }for (i = 0; i<(array.length); i++){
        if (array[i]===0){
            array3.push(array[i]);
        }
    }
    const array4= array2.concat(array3);
    console.log(array4)
}
moveZeros(array);