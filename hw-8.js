// Задание 1

const peopleName = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

peopleName.sort(function (i, j) {
  let first = i.age;
  let next = j.age;
  if (first > next)
    return 1;
  if (first < next)
    return -1;
  return 0;
})

console.log(peopleName);

// Задание 2

function isMale(peopleMail) {
  return peopleMail.gender === 'male'
}

function isPositive(number) {
  return number > 0;
}
function filter(arr, ruleFunction) {
  const num = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      num.push(arr[i]);
    }
  }
  return num;
}
const people = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));

// Задание 3

let todayDate = new Date();
console.log(todayDate);
let timerId = setInterval(() => console.log(todayDate), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 4

function delayForSecond(callback) {
  setTimeout(() => {
    console.log();
    if (callback) { callback(); }
  }, 1000);
}

delayForSecond(function callback() {
  console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) { cb(); }

  }, 1000)
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));