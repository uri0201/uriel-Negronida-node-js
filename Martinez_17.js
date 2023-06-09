const prompt = require('prompt-sync')();

var num= parseInt(prompt('Ingrese el número límite: '));
var array= new Array(num);
function NuevoArreglo (num, array){
    for ( var i=1; i<num+1; i++){
        array.push(i);        
    }
    console.log(array);
}

NuevoArreglo(num, array);