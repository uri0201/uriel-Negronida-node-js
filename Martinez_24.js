const prompt=require('prompt-sync')();
function pluck(array, propNom) {
    return array.map(obj => obj[propNom]);
  }
var productos = [{ Nom: 'TV LCD', precio: 100 }, { Nom: 'Computadora', precio: 500 }];

console.log(pluck(productos,"Nom"));
console.log(pluck(productos,"precio"));
