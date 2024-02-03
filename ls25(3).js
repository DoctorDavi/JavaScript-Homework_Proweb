let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');

if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {
  alert('Значения не числовые');
} else if (isNaN(num1)) {
  alert('Первое значение не числовое');
} else if (isNaN(num2)) {
  alert('Второе значение не числовое');
} else if (isNaN(num3)) {
  alert('Третье значение не числовое');
} else if (num1 == num2 || num1 == num3 || num2 == num3) {
  alert('Числа не должны быть одинаковыми');
} else if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
  alert(`Из чисел ${num1}, ${num2} и ${num3} средним числом является ${num1}`);
} else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
  alert(`Из чисел ${num1}, ${num2} и ${num3} средним числом является ${num2}`);
} else if (num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1) {
  alert(`Из чисел ${num1}, ${num2} и ${num3} средним числом является ${num3}`);
} else {
  console.log('Что-то пошло не так');
} 
