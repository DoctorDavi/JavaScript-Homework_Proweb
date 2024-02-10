do {
  var quantity = +prompt('введите количество ступенек для лестницы');
} while (quantity == 0);

isNaN(quantity) ? quantity = 5 : quantity;

do {
  var indentation = prompt('введите символ для отступа ступенек лестницы');
} while (indentation == '');

do {
  var lastSymbol = prompt('введите конечный символ для отступа ступенек лестницы');
} while (lastSymbol == '');

let firstSymbol = '';

for (let i = 0; i < quantity; i++) {
  let result = firstSymbol + lastSymbol;
  console.log(result);
  firstSymbol += indentation;
}

alert('лестница нарисована в консоле');
