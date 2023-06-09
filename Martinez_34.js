/*Crear una función llamada “doubleFilter” que reciba como parámetro
un arreglo de objetos, un continente, y un número de población. 
La función filtra el arreglo solo con los países que sean del continente pasado por parámetro, 
y además, los que su población sea mayor o igual a la del parámetro.*/


const prompt = require('prompt-sync')();

var paises = [
    {nombre: "argentina", continente: "sudamerica",  poblacion: 40000000},
    {nombre: "brasil", continente: "sudamerica", poblacion: 300000000},
    {nombre: "venezuela", continente: "sudamerica", poblacion: 25000000},
    {nombre: "chile", continente: "sudamerica", poblacion: 10000000},
    {nombre: "australia", continente: "oceania", poblacion: 18000000},
    {nombre: "nueva zelanda", continente: "oceania", poblacion: 8000000},
    {nombre: "china", continente: "asia", poblacion: 1000000000},
    {nombre: "tailandia", continente: "asia", poblacion: 32000000},
    {nombre: "vietnam", continente: "asia", poblacion: 23000000},
    {nombre: "españa", continente: "europa", poblacion: 29000000},
    {nombre: "alemania", continente: "europa", poblacion: 33000000},
    {nombre: "francia", continente: "europa", poblacion: 65000000},
    {nombre: "portugal", continente: "europa", poblacion: 4000000},
    {nombre: "grecia", continente: "europa", poblacion: 12000000},
];
  
var cont = prompt('Ingrese el continente: ');
var pob = parseInt(prompt('Ingrese el número de la población: '));

function doubleFilter(cont, pob, paises){
    for ( i=0; i<paises.length; i++){
        if (cont == paises[i].continente && pob <= paises[i].poblacion){
            console.log(paises[i]);
        }
    }
}

doubleFilter(cont, pob, paises);