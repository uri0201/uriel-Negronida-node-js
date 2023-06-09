/*Crear un programa que solicite por consola al usuario que ingrese
la letra “F” (en mayúscula) y en caso de que este ingrese un valor 
distinto se lo vuelva a pedir hasta que ingrese la letra correcta. 
Una vez ingresada la letra F devolver por consola el siguiente mensaje: “Lo lograste!”
Pista: para este ejercicio deberás utilizar el bucle Do While*/
const prompt = require('prompt-sync')();
let letra;

do {

    letra = prompt('Ingrese la letra hasta que sea la correcta: ')

}while(letra !== 'F')

console.log ('You nailed it, queen!')

