// Повторяет пока пользователь не введет число больше 0
do {
  var userTaskNumbers = +prompt('Сколько примеров хотите решить?')
} while (isNaN(userTaskNumbers) || userTaskNumbers == 0);

// Повторение определяется числом введенным пользователем
for (let i = 0; i < userTaskNumbers; i++) {
  let randomNumber1 = randomizeNumber();
  let randomNumber2 = randomizeNumber();

  let randomOperator = randomizeOperator();

  // Спрашивает пользователя вычислить пример
  var userAnswer = +prompt(`${randomNumber1} ${randomOperator} ${randomNumber2} = ?`);
  
  // Вычисляет правильный ответ
  let rightAnswer = eval(randomNumber1 + randomOperator + randomNumber2);

  // Выводит сообщение о правильности решения примера
  userAnswer == rightAnswer ?
    alert(`${randomNumber1} ${randomOperator} ${randomNumber2} = ${rightAnswer}. Ваш ответ ${userAnswer} верный`) :
    alert(`${randomNumber1} ${randomOperator} ${randomNumber2} = ${rightAnswer}. Ваш ответ ${userAnswer} неверный`)
}

// Рандомизирует число от 1 до 10
function randomizeNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// Рандомизирует оператор в виде строки из четырех операторов (+, -, *, /)  
function randomizeOperator() {
  let randomNumber = Math.floor(Math.random() * 4 + 1);

  if (randomNumber == 1) {
    randomNumber = '+';
  } else if (randomNumber == 2) {
    randomNumber = '-';
  } else if (randomNumber == 3) {
    randomNumber = '*';
  } else if (randomNumber == 4) {
    randomNumber = '/';
  }

  return randomNumber;
}
