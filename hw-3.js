// Задание 1
let password = "password1234";

let enterPassword = prompt("Введите пароль");

if (password === enterPassword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let numberC = 91;
if (numberC > 0 && numberC < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
let numberD = 10;
let numberE = 4;
numberD > 100 || numberE > 100 ? console.log("Верно") : console.log("неверно");


// Задание 4
let a = '2';
let b = '3';
console.log(Number(a) + Number(b));

// Задание 5
let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case "1":
        console.log("Зима");
        break;
    case "2":
        console.log("Зима");
        break;
    case "3":
        console.log("Весна");
        break;
    case "4":
        console.log("Весна");
        break;
    case "5":
        console.log("Весна");
        break;
    case "5":
        console.log("Весна");
        break;
    case "6":
        console.log("Лето");
        break;
    case "7":
        console.log("Лето");
        break;
    case "8":
        console.log("Лето");
        break;
    case "9":
        console.log("Осень");
        break;
    case "10":
        console.log("Осень");
        break;
    case "11":
        console.log("Осень");
        break;
    case "12":
        console.log("Зима");
        break;
    default:
        if (monthNumber > 12 || monthNumber < 1)
            console.log("Такого месяца не существует");
        else (monthNumber === String(monthNumber))
        console.log("Введите номер месяца");
        break;
}