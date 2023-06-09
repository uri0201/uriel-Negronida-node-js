const prompt = require('prompt-sync')();

var color=prompt('Ingrese un color: ')

switch (color){
    case ("azul"):
        console.log("Blue");
        break;
    case ("rojo"):
        console.log("Red");
        break;
    case ("amarillo"):
        console.log("Yellow");
    case ("naranja"):
        console.log("Orange");
        break;
    default:
        console.log("Color not found.");
        break;
}