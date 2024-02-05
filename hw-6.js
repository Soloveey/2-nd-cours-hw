//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

//Задание 2
let setNumber = [1, 5, 4, 10, 0, 3];
let position = setNumber.indexOf(4);
console.log(position);

//Задание 3
let number = [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);

//Задание 4

let i = 1;
let one = [[i, i, i], [i, i, i], [i, i, i]];
console.log(one);

//Задание 5 
let a = [1, 1, 1];
a.push(2, 2, 2);
console.log(a);

//Задание 6
let numbers = [9, 8, 7, 'a', 6, 5];
numbers = numbers.sort();
numbers.pop();
console.log(numbers);

//Задание 7
let numberN = [9, 8, 7, 6, 5];
let guessNumber = Number(prompt('Угадай число'));
if (numberN.includes(guessNumber)) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}

//Задание 8
let lineS = 'abcdef';
lineS = lineS.split('');
lineS.reverse();
lineS = lineS.join('');
console.log(lineS);


//Задание 9
let arr = [[1, 2, 3], [4, 5, 6]];
for (let arrIn of arr) {
    console.log(arrIn);
}


//Задание 10
let t = [1, 2, 3, 4, 5];
for (let i = 0; i < t.length; i++) {
    if (n = i + t);
    console.log(n);
}

//Задание 11
let fullNumber = [2, 3, 5, 7];
let squareNumber = fullNumber.map(item => (item ** 2));
console.log(squareNumber);

//Задние 12
let word = ['слово', '', 'слог', 'длинное предложение'];
let wordResult = word.map((l) => l.length);
console.log(wordResult);

//Задание 13
function filterPositive(array) {
    const resultArray = array.filter(iN => (iN < 0));
    console.log(resultArray);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

