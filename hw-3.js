// Задание 1
let password = String("password1234");

let enterPassword = String(prompt("Введите пароль"));

if (password === enterPassword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let c = prompt(7);
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
let d = 1;
let e = prompt(d);
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4
let a = '2';
let b = '3';
console.log(Number(a) + Number(b));

// Задание 5
let monthNumber = String(prompt("Введите номер месяца"));
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
        if (monthNumber > 12) {
            console.log("Такого месяца не существует")
            break;
        }
}