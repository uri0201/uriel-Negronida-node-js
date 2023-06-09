const prompt = require('prompt-sync')();


let letras = prompt('Ingrese la cadena de letras: ')
function formacionLetras (letras){
    if (letras === letras.toUpperCase()){
        console.log ('Son solo mayusculas.')
    }else if (letras === letras.toLowerCase()){
        console.log ( 'Son solo minusculas.')
    }else{
        console.log ('Son ambos.')
    }
}

formacionLetras(letras);