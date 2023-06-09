/*23 - Crear una función llamada “arregloDeObjetos” que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada “valor” 
que contenga el valor del número y sus anteriores
.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/

const prompt = require('prompt-sync')();

var num = parseInt(prompt('Ingrese un parámetro: '))

function arregloDeObjetos (num){
    array= new Array()
    for (i = 1; i< num+1; i++){
        array.push('{valor:  ' + i + '}');

    }
    console.log(array);
}
arregloDeObjetos(num);