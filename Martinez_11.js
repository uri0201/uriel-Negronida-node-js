const prompt = require('prompt-sync')();

var n1= parseFloat(prompt('Ingrese un número: '));
var n2= parseFloat(prompt('Ingrese un número: '));
var n3= parseFloat(prompt('Ingrese un número: '));


function OperadoresLogicos (n1, n2, n3){
    if (n1>n2 && n1>n3 && n1>0){
        console.log('El número es mayor al 2 y 3 y además es positivo.');
    }
    if (n1<0 || n2<0 || n3<0){
        console.log('Hay negativos.');
    }
    if (n3>n1 && n3>n2){
        suma=n3+1;
        console.log('El número 3 es mayor a 1 y 2, y el nuevo valor del mismo es: ', suma);
    }
    if (n1==0 || n2==0 || n3==0){
        console.log('Error.');
    }else{
        return false;
    }
}


OperadoresLogicos (n1, n2, n3);
