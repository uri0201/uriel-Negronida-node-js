const prompt = require('prompt-sync')();

var num = parseInt(prompt('Ingrese un número: '))

function sumattion (num){
    suma = 0;
    for (var i = 0; i < num + 1; i++ ){
        suma = suma+i;
    }
    console.log(suma);
}

sumattion(num);