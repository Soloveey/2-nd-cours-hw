// Задание 1
let hi = 1;
let two = 2;
while (hi <= two) {
    console.log("Привет");
    hi++;
}

// Задание 2
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// Задание 3
let iN = 7;
while (iN <= 22) {
    console.log(iN);
    iN++;
}

// Задание 4 

const man = {
    Коля: `200`,
    Вася: `300`,
    Петя: `400`,
}
for (const key in man) {
    console.log(`${key} - зарплата ${man[key]} долларов.`);
}



// Задание 5
let n = 1000;
let num = 0;
while (n > 50) {
    n = n / 2;
    num++;
    console.log(num);
    console.log(n);
    
}
//Задание 6
for (let friday = 2; friday <= 31 ; friday = friday + 7){   
    console.log(`Сегодня пятница ${friday} число. Необходимо подготовить отчет.`);    
}
