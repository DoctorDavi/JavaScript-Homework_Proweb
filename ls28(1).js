var userName = prompt('Введите ваше имя');

// Повторяет пока пользователь не вводит число
do {
  var userBirthday = +prompt('Введите свой год рождения');
} while (isNaN(userBirthday));

// Повторяет пока пользователь не вводит число которое больше года рождения
do {
  var curYear = +prompt('Введите нынешний год');
} while (isNaN(curYear) || curYear < userBirthday);

// Определяет возраст пользователя
function defineAge(userBirthday, curYear) {
  return `${userName}, Вам ${curYear - userBirthday} лет/года`;
}

alert( defineAge(userBirthday, curYear) );
