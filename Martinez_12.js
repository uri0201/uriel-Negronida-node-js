const prompt = require('prompt-sync')();

var num=parseInt(prompt('Ingrese un número: '));
let primo=true;

for (var i = 2; i < num; i++){
    if (num % i ===0){
        primo=false;
    }
}

if (primo){
    console.log('Es primo. ');
} else {
    console.log('No es primo.');
}