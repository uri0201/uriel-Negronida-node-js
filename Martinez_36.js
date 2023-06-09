const prompt=require('prompt-sync')();
var cuantoo=50
while (cuantoo<=200 && cuantoo>0){
    console.log("El usuario tiene $",cuantoo);
    var numa=parseInt(prompt("A que numero le quiere apostar "))
    var cuanto=parseInt(prompt("Cuanto quiere apostar "))
    if (!numa){
        numa=1;
    }
    if(!cuanto){
        cuanto=20
    }
    var dado = Math.floor(Math.random() * 6) + 1;
    console.log("El numero que salio fue: ",dado)
    if (dado==numa){
        var cuanton=cuanto*2;
        console.log("usted gano: ",cuanton)
        cuantoo=cuantoo+cuanton;
    }else{
        var cuanton=cuanto;
        console.log("usted perdio: ",cuanton)
        cuantoo=cuantoo-cuanton;
    }
}