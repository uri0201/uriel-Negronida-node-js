const prompt = require('prompt-sync')();

var ang1=parseFloat(prompt('Ingrese el primer ángulo'));
var ang2=parseFloat(prompt('Ingrese el primer ángulo'));
var ang3=parseFloat(prompt('Ingrese el primer ángulo'));
var sumaang= ang1+ang2+ang3;

if (sumaang==180){
    console.log('El triángulo es válido.');
} else{
    console.log('El triángulo es inválido.');
}