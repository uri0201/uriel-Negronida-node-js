const prompt = require('prompt-sync')();

var segs = parseInt(prompt('Ingrese los segundos: '));

function toTime(segs){
    var hs = 0;
    var mins = 0;
    if (segs>=3600){
        hs=(segs/3600).toFixed(0);
    } if (segs>=60){
        mins=((segs-(hs*3600))/60).toFixed(0);
    } else{
        console.log('No llega ni a horas ni minutos.');
    }
    console.log('La cantidad de hora(s) es: ', hs, ' y la cantidad de minuto(s) es: ', mins);
}

toTime(segs)