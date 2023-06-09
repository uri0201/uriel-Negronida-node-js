/* Crear una nueva versión de la función “esPrimo” 
utilizando el bucle While la cual va a determinar si el 
número que ingresa el usuario es primo o no. Recordar que un 
número primo es el que solo puede dividirse por sí mismo y por la unidad.
Pista: Puedes utilizar break para detener la ejecución de las iteraciones cuando sea necesario.*/

const prompt = require('prompt-sync')();

var numero = parseInt(prompt('Ingrese un número: '))

function esPrimo(numero) {
    let divisor = 2;
    var cont = 0

    while (divisor < numero) {
      if (numero % divisor === 0) {
        cont++
        console.log('No es primo. ');
        break;
      }
      divisor++;
    }

    if (cont == 0){
        console.log('Es primo')
    }
}
  

esPrimo(numero);