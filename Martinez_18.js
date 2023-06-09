const prompt = require('prompt-sync')();

var num = parseInt(prompt('Ingrese un número: '));

function breakStatement(num) {
    const arr = new Array (10);
    let sum = num;
    for (let i = 0; i < 10; i++) {
      sum += 2;
      arr.push(sum);
      if (sum === i + 1) {
        console.log ("Se interrumpió la ejecución");
        break;
      }
    }
    console.log (arr);
}

breakStatement(num);
