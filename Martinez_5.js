const prompt = require('prompt-sync')();

var gradosF=parseFloat(prompt('Ingrese los números en Fareinheit: '));
var gradosC=(gradosF-32)*5/9;

console.log(gradosC);


