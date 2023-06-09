const prompt = require('prompt-sync')();

var ano=prompt('Ingre el año: ')

if (ano%4==0){
    console.log('El año es bisiesto. ')
}else{
    console.log('El año no es bisiesto.')
}