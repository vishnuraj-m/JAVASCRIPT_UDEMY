//* !Variables

// var Name = 'Vishnu';
// console.log(Name);

//* !Let and const

// let price = 250;
// price = 300;
// const Name = 'Vishnu';
// ! Name = 'Ram'  //it will not work while using const
// console.log(price, Name);


// *Primitive Datatypes


// let str = 'Vishnu';
// console.log(typeof str);

// let age = 30;
// console.log(typeof age);

// let isMarried = false
// console.log(typeof isMarried);

// let color;
// console.log(typeof color);

// let isSelectedColor = null;
// console.log(typeof isSelectedColor);


// *Reference types: Object

// let name = 'Vishnu';
// let age = 30;
// let hobby = 'reading';

// let user = {
//     name: 'Vishnu',
//     age: 30,
//     hobby: 'reading',
// }

// console.log(user);
// console.log(user.name); //*dot notation
// console.log(user.hobby); //*dot notation


// console.log('this is bracket notation ', user['name']); //*bracket notation
// console.log(user['age']); //*bracket notation


// ! Reference types: Array

// let friends = ['vishnu', 'aravind', 'anand'];

// console.log(friends);
// console.log(friends[0]);
// console.log(typeof friends);
// console.log(friends.length);




// // * Reference types: Function

// function showMyName() {
//     console.log('My Name is Vishnu');
// }

// showMyName();
// showMyName();


// with parameter

// function employeeName(name) {
//     console.log('My Name is ' + name)
// }

// employeeName('vishnu')
// employeeName('Ram')
// employeeName('Raja')
// employeeName('Shanty')


// let num1 = 30;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(sum);


// function calSum(num1, num2) {
//     const sum = num1 + num2;
//     return sum
// }

// const result = calSum(30, 20);
// console.log(result);



// ! Template Literals

// let value = 'Template Literals'
// console.log(`This is ${value}`)
// console.log(`This is`, value)


// console.log(`${30 + 15}`)
// console.log(`this
// is
// my world`)


// * Exercise
// let person = {
//     name: 'Vishnu',
//     age: '30',
//     isMarried: false,
//     homeAddress: {
//         long: 55.32,
//         lat: 25.36,
//     },
//     friends: ['ram', 'vishnu', 'raja', 'krishna'],
// }

// console.log(person);
// console.log(person.name);
// console.log(person.homeAddress.lat);
// console.log(person.friends[0]);
// console.log(typeof person)



// !Java Script Operators


// *Arithmetic Operators

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);


// *Assignment Operators

// let num1 = 10;
// let num2 = num1;
// console.log(num1, num2);


// let num1 = 10;
// let num2 = num1 + 5;
// num1 += 5;
// console.log(num2);

// num1 = num1 - 5;
// num1 -= 5;

// num1 = num1 * 5;
// num1 *= 5

// num1 = num1 + 5;
// num1 += 5;

// num1++;

// num1--;


// *Comparison Operators
// ! >, <, >=, <=, ===, !==

// let price = 200;
// console.log(price > 300);
// console.log(price >= 200);
// console.log(price < 100);
// console.log(price <= 500);
// console.log(price === 200);
// console.log(price !== 200);


// *Logical Operators
// ! and (&&), or (||), not(!)

let price = 10;

console.log(price > 5 && price < 15);


console.log(price > 50 || price < 15);

console.log(!(price > 50))