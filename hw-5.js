// Задание 1
function lesserNumber(a, b) {
    if (a <= b) {
        return (a);
    } else {
        return (b);
    }
}
console.log(lesserNumber(11, 13));

//Задание 2
function identifyNumbers(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
};
console.log(identifyNumbers(5));
console.log(identifyNumbers(7));

//Задание 3

//3.1
function numberNew(d) {
    let mult = d * d;
    console.log(mult);
}
numberNew(67);

//3.2
function numberSquar(c) {
    return c * c;
}
console.log(numberSquar(55));

//Задание 4
"use strict";
let age = prompt("Сколько Вам лет?", 18);
let printMessage;
if (age < 0) {
    printMessage = function () {
        console.log("Вы ввели неправильное значение");
    }
} else if (age <= 12) {
    printMessage = function () {
        console.log("Привет, друг!");
    }
}
else {
    printMessage = function () {
        console.log("Добро пожаловать!");
    }
}
printMessage();

//Задание 5
function checkNumber(numberX, numberZ) {
    if (isNaN(numberX) || isNaN(numberZ)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        return (numberX * numberZ);
    }
}
console.log(checkNumber(9, 9));

//Задание 6
let enterNumber = prompt('Введите число')
function messageUser(enterNumber) {
    if (isNaN(enterNumber)) {
        console.log('Переданный параметр не является числом');
    } else {
        return (enterNumber ** 3);
    }
}
console.log(messageUser(enterNumber));

//Задание 7
function getRadiusСircle() {
    return 3.14 * this.radius ** 2;
}
function getPerimeterСircle() {
    return this.two * 3.14 * this.radius ** 2;
}
const circle1 = {
    radius: 2,
    two: 2,
    getArea: getRadiusСircle,
    getPerimeter: getPerimeterСircle,
};
const circle2 = {
    radius: 3,
    two: 2,
    getArea: getRadiusСircle,
    getPerimeter: getPerimeterСircle,
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
function seasonYears() {
    let numberMonth = prompt('Введите номер месяца');
   if (numberMonth == 1 || numberMonth == 2 || numberMonth == 12) {
    alert ('Зима');
  }else  if (numberMonth == 3 || numberMonth == 4 || numberMonth == 5) {
    alert ('Весна');
  }else  if (numberMonth == 6 || numberMonth == 7 || numberMonth == 8) {
    alert ('Лето');
  }else  if (numberMonth == 9 || numberMonth == 10 || numberMonth == 11) {
    alert ('Осень');
  }else   if (isNaN(numberMonth)) {
    alert ('Ошибка!!! Номер месяца должен быть числовым значением.');
  }else  if (numberMonth < 1 || numberMonth > 12) {
    alert ('Ошибка!!! Такого месяца не существует.');
  } else {
    alert (numberMonth);
  }
  }
  console.log(seasonYears());