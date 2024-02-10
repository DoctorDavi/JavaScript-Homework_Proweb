do {
  var num = +prompt('введите число больше 0');
} while (isNaN(num) || num == 0);

var exponent = +prompt('введите его степень');
isNaN(exponent) || exponent == 0 ? exponent = 2 : exponent; 

answer = num ** exponent;
alert(`${num} в степени ${exponent} равно ${answer}`);
