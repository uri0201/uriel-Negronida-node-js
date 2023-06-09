/*Crear un programa que solicite por consola al usuario que ingrese primero 
un número y luego otro. Este debe retornar el valor de la suma y preguntar
 al usuario si quiere repetir la operación ingresando “SI” o “NO”.
Si el usuario ingresa “SI” el programa comienza nuevamente.
Si el usuario ingresa “NO” el programa finaliza.
En caso de que el usuario ingrese una cadena diferente, debe volver
 a realizar la pregunta hasta que el input coincida con uno de los strings “SI” o “NO”
Pista: para este ejercicio necesitarás utilizar bucles Do While.
 Y se puede usar utilizar un bucle dentro de otro.
*/
const prompt = require('prompt-sync')();



let respuesta;

do {
    const num1= parseFloat(prompt('Ingrese un número: '));
    const num2= parseFloat(prompt('Ingrese otro número: '));
    const suma = num1 + num2;
    console.log('La suma es: ', suma)
    
    do{
        respuesta = prompt('¿Desea seguir con el programa? ')
        if (respuesta==='SI'){
            const num1= parseFloat(prompt('Ingrese un número: '));
            const num2= parseFloat(prompt('Ingrese otro número: '));
            const suma = num1 + num2;
            console.log('La suma es: ', suma)
        }
        if (respuesta!=='SI') {
            respuesta = prompt('¿Desea seguir con el programa? ')
        }
    }while (respuesta !=='NO')
    break;
}while(respuesta !=='NO')