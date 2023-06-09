/*Crear una función llamada “contarHasta” que pide 
un número positivo por consola y retorna una lista con los números desde el 
0 hasta el número recibido.
Utilizar el bucle While para hacerlo. */

const prompt = require('prompt-sync')();

var numero = parseInt(prompt('Ingrese un número: '))


while (numero <= 0){
    var numero = parseInt(prompt('Ingrese un número positivo: '))
}

function contarHasta(numero){
    var contador = 0
    let array = new Array ()
    while (contador != numero){
        contador ++;
        array.push(contador)
    }
    console.log(array);
}

contarHasta(numero);