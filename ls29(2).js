// Переменная которая хранит рандомный объект с данными
let foods = receipt();
console.log(foods);

var foodCollection = '';
var foodsPrice = 0;

for (const food in foods) {
  // Переменная которая заполняется именами вложенных объектов 
  foodCollection += `${food}, `;

  // Переменная которая суммируется ценами из вложенных объектов 
  foodsPrice += foods[food].price;
}

// Переменная которая учитывает сумму с доставкой 
var foodsPriceWithDelivery = foodsPrice + 9000;

console.log(`Вы заказали ${foodCollection} 
| Общая стоимость ${foodsPriceWithDelivery} сумм с доставкой (9000)`);
