const prompt = require('prompt-sync')();

const array = new Array()
const par = parseInt(prompt('Ingrese la cantidad de números en el parámetro: '))
for (i = 0; i<par; i++){
    var num = parseInt(prompt('Ingrese el número: '))
    array.push(num);
}
array.sort()

function sumArray (array){
    var numero = parseInt(prompt('Ingrese el número a comparar: '));
    var encontrado = false;
    for ( let i = 0; i<array.length; i++){
        for (let x = i+1; x < array.length; x++){
            if (array[i] + array [x] === numero){
                encontrado = true;
                break;            
            }
        }
    }
    if (encontrado){
        console.log(encontrado)
    }else{
        console.log(encontrado);
    }
}

sumArray(array);