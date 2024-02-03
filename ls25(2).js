let userTime = +prompt('Введите время (0 - 24)');

if (userTime == 0 || userTime == 24) {
  alert('Полночь');
} else if (userTime >= 1 && userTime <= 5) {
  alert(userTime + ' час/часа/часов ночи');
} else if (userTime >= 6 && userTime <= 11) {
  alert(userTime + ' часов утра');
} else if (userTime == 12) {
  alert('Полдень');
} else if (userTime >= 13 && userTime <= 17) {
  alert(userTime + ' часов дня');
} else if (userTime >= 18 && userTime <= 23) {
  alert(userTime + ' часов вечера');
} else if (isNaN(userTime)) {
  alert('Значение не числовое');
} else {
  alert('Вы должны были ввести значение от 0 до 24');
}
