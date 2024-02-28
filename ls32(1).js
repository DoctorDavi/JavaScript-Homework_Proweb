let arr = []; // конечный массив

do {
  var userAnswer = prompt('Введите команду'); // строка которая содержит данные пользователя

  // Повторится пока пользователь не введет 'stop' или нажмет Esc
  if (userAnswer == 'stop' || userAnswer === null) {
    break;
  }

  let splittedUserAnswer = userAnswer.split(', '); // массив который содержит строки из данных пользователя

  if (splittedUserAnswer[0] == 'add') {
    splittedUserAnswer.shift(); // удаляет команду add из массива данных пользователя

    splittedUserAnswer.forEach(elem => arr.push(elem)) // добавляет в конечный массив данные пользователя
  } else if (splittedUserAnswer[0] == 'del') {
    splittedUserAnswer.shift(); // удаляет команду del из массива данных пользователя

    splittedUserAnswer.forEach(elem => {
      let deletedItemIndex = arr.indexOf(elem); // индекс удаляемой строки 

      arr.splice(deletedItemIndex, 1); // удаляет из конечного массива строку с найденным индексом
    });
  }

  console.log(arr);
} while (true);
