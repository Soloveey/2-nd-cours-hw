// Задание 1
let text = 'строка',
  textNumbers = 'c12k4j5d69j';
let newText = text.toUpperCase();
let newtextNumbers = textNumbers.toUpperCase();
console.log(newText, newtextNumbers);

// Задание 2
const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const setString = 'Ко';
searchStart.forEach((searchStart) => {
  if (searchStart.toLowerCase().includes(setString.toLowerCase())) {
    console.log(searchStart);
  }
})

// Задание 3
const numberA = 32.58884;
console.log(Math.ceil(numberA));
console.log(Math.floor(numberA));
console.log(Math.round(numberA));

// Задание 4
const numbersRandom = [52, 53, 49, 77, 21, 32];
const numberMin = Math.min(...numbersRandom);
const numberMax = Math.max(...numbersRandom);

console.log(`Наименьшее число: ${numberMin}`);
console.log(`Наибольшее число: ${numberMax}`);

// Задание 5
let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

// Задание 6
const numberB = n => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(Math.floor(Math.random() * i));
  }
  return result;
}
console.log(numberB(10 / 2));

// Задание 7
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(5, 55));

// Задание 8
let todayDate = new Date();
console.log(todayDate);

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
myDate.setDate(11);
myDate.setMonth(1);
myDate.setYear(2024);
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
  " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

let newDate = new Date();
let hour = newDate.getHours();
let minute = newDate.getMinutes();
let second = newDate.getSeconds();
if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
console.log("текущее время: " + hour + ":" + minute + ":" + second);
console.log(fullDate);

// Задание 11
function guessTheWord() {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  fruits = fruits.sort(() => Math.random() - 0.5);
  alert(`Запомните первое и последнее слово: ${fruits}`);

  let firstFruits = prompt('Угадайте первое слово?').toLowerCase();
  let lastFruits = prompt('Угадайте последнее слово?').toLowerCase();
  if (firstFruits.toLowerCase() === fruits[0].toLowerCase() && lastFruits === fruits[fruits.length - 1].toLowerCase()) {
    alert('Это правильный ответ!!!');
  }
  else if (firstFruits.toLowerCase() !== fruits[0].toLowerCase() && lastFruits !== fruits[fruits.length - 1].toLowerCase()) {
    alert('Ответ неверный!');
  }
  else {
    alert('Вы были близки к победе!');
  }
}
console.log(guessTheWord());
