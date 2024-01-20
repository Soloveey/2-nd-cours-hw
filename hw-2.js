let a = "10";
alert(a);
a = "20";
alert(a);

const yearOfRelease = 2007;
alert(yearOfRelease);

const nameCreator = "Brendan";
alert(nameCreator);

let ten = 10;
let two = 2;
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);

two = two ** 5;
let result = two;
alert(result);

let remainderDivision = 9;
remainderDivision = remainderDivision % 2;
alert(remainderDivision);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num++;
num = num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
    name: 'Bob',
    age: 25,
    isAdmin: false
};
user.cityOfResidence = true;
user.age = 27;
delete user.cityOfResidence;
 
let info = prompt('Какой у вас трудовой стаж?') ;
alert(info);

let nameUser = prompt('Как вас зовут?');
alert(`Привет, ${nameUser}!`);
