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
let salaryKolia = Number(200);
let salaryVasia = Number(300);
let salaryPetia = Number(400);

const man = {
    Коля: `зарплата ${salaryKolia} долларов.`,
    Вася: `зарплата ${salaryVasia} долларов.`,
    Петя: `зарплата ${salaryPetia} долларов.`,
}
for (const key in man) {
    console.log(`${key} - ${man[key]}`);
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
    if (friday ) {
        console.log(`Сегодня пятница ${friday} число. Необходимо подготовить отчет.`);
    } else {`Сегодня пятница ${friday} число. Необходимо подготовить отчет.`
        
    }
}
