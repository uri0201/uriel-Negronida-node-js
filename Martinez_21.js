const prompt = require('prompt-sync')();

var nombre = prompt('Ingrese el nombre: ');
function abbrevName(nombre){
    const array = nombre.split(' ');
    const iniciales = array [0][0] + ' . ' + array [1][0];
    console.log(iniciales.toUpperCase());
}

abbrevName(nombre);