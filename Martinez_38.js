const prompt = require('prompt-sync')();

var cadena = prompt('Ingrese una oración/palabra: ')

function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
    var cadenaInvertida = cadena.split('').reverse().join('');
  
    if (cadena === cadenaInvertida) {
      console.log ('Es palíndromo');
    } else {
      console.log ('No es palíndromo');
    }
}

esPalindromo(cadena);