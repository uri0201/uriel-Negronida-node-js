const prompt = require('prompt-sync')();
var n1=prompt('Ingrese algo: ');
var n2=prompt('Ingrese algo: ');

console.log('¿Se ingresaron los mismos datos?')
if (n1 == n2){
    console.log('True');
}else{
    console.log('False');
}
console.log('¿Tiene la misma cantidad de carácteres?')
string1=n1.length;
string2=n2.length;
if (string1 == string2){
    console.log('True');
}else{
    console.log('False');
}