const users = {};

for (let id = 1; id <= 10; id++) {
  var userName = prompt(`Введите имя ${id}-ого пользователя`);
  var userAge = +prompt(`Введите возраст ${id}-ого пользователя`);
  
  // Заполняется объект с ключами-значениями введенными пользователем  
  users[`${id}`] = {
    name: userName,
    age: userAge,
  };

  console.log(`Пользователь: ${id}`);
  console.log(`Ваше имя: ${userName}`);
  console.log(`Ваш возраст: ${userAge}`);
}

alert('Заполненные данные в консоле');
console.log(users);
