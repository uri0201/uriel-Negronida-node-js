/*Crear un programa que pida al usuario que teclee un número y 
se repita hasta que este teclee un 0. Además, al finalizar mostrará 
por consola la suma de todos los números tecleados.*/

const prompt = require('prompt-sync')();
function sumaNum(){
    var numero = 1;
    var suma = 0;

    while (numero !== 0){
        var numero = parseInt(prompt('Ingrese un número o 0 para terminar: '))
        suma += numero;    
    }

    console.log(suma)
}

sumaNum();
