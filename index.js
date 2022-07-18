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




// * Reference types: Function

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


// let price = 10;

// console.log(price > 5 && price < 15);


// console.log(price > 50 || price < 15);

// console.log(!(price > 50));


// *Equality Operators

// let price = 10;
// console.log(price === 10);
// console.log(price === 20);
// console.log(price !== 10);
// console.log(price !== 20);

// console.log(price === '10');
// console.log(price == '10');




// *Swap

// let num1 = 10;
// let num2 = 15;
// let temp = num1;
// num1 = num2;
// num2 = temp

// console.log(`num1:`, num1, `num2:`, num2)




// !Conditional statement

// *if else

// let num = 0;

// if (num > 0) {
//     console.log(`Positive Number`);
// } else if (num < 0) {
//     console.log(`Negative Number`);
// } else {
//     console.log(`Number is Zero`);
// }


//* Switch case


// let color = 'black';
// switch (color) {
//     case 'black':
//         console.log(`Color is Black`);
//         break;
//     case 'White':
//         console.log(`Color is White`);
//         break;
//     case 'Red':
//         console.log(`Color is Red`);
//         break;

//     default:
//         console.log(`Not in list`)
//         break;
// }


// *Ternary Operators

// let num1 = 10;
// let num2 = 20;
// let maxValue;
// if (num1 > num2) {
//     maxValue = num1;
// } else {
//     maxValue = num2
// }

// console.log(maxValue);


// // !11111111111111

// let max = num1 > num2 ? num1 : num2;
// console.log(max);


// *FizzBuzz

// let number = 10;
// if (number % 3 === 0) {
//     console.log('Fizz');
// } else if (number % 5 === 0) {
//     console.log('Buzz');
// } else if (number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz');
// } else {
//     console.log('Nothing');
// }


// *FizzBuzz Ternary

// let number = 15;
// console.log(number % 3 === 0 && number % 5 === 0
//     ? 'FizzBuzz'
//     : number % 3 === 0
//         ? 'Fizz'
//         : number % 3 === 0
//             ? 'Buzz'
//             : 'Nothing'
// );


// !Exercise Grading system

// let mark = 90;
// if (mark < 0 || mark > 100) {
//     console.log('Invalid Mark');
// } else if (mark >= 80 && mark <= 100) {
//     console.log('A+');
// } else if (mark >= 70 && mark <= 79) {
//     console.log('A');
// } else if (mark >= 60 && mark <= 69) {
//     console.log('A-');
// } else if (mark >= 50 && mark <= 59) {
//     console.log('B');
// } else if (mark >= 40 && mark <= 49) {
//     console.log('C');
// } else if (mark >= 33 && mark <= 39) {
//     console.log('D');
// } else {
//     console.log('Fail')
// }




// !Exercise Switch

// let number = 0;

// switch (true) {
//     case number > 0:
//         console.log('This is Positive Number');
//         break;

//     case number < 0:
//         console.log('This is Negative Number');
//         break;
//     default:
//         console.log('Number is Zero')
//         break;
// }


// !  LOOPS

// * For Loop

// for (let index = 1; index <= 5; index++) {
//     console.log('Vishnu', index);
// }



// for (let index = 5; index >= 1; index--) {
//     console.log('Vishnu', index);
// }


// *While

// let index = 1;

// while (index <= 5) {
//     console.log('Hi Vishnu', index);
//     index++;
// }

// *Do While

// let service = 1;
// do {
//     console.log('Hi Vishnu', service);
//     service++
// } while (service <= 5)


// * for in loop

// const obj = {
//     name: 'Vishnu',
//     age: 30,
// }
// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// // ********
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);


// // *******

// for (let index in numbers) {
//     console.log(index, numbers[index]);
// }


// * for of loop

// let numArray = [1, 2, 3, 4, 5, 6, 7];

// for (let num of numArray) {
//     console.log(num)
// }

// *Break and continue

// !Break

// for (let num = 1; num <= 20; num++) {
//     if (num === 10) {
//         break;
//     }
//     console.log(num)
// }

// !Continue

// for (let num = 1; num <= 20; num++) {
//     if (num === 10) {
//         continue;
//     }
//     console.log(num)
// }

// * Infinite loop

// for (let num = 1; num++;) {
//     console.log(num)
// }


// *Nested Loop

// for (let vis = 1; vis <= 3; vis++) {
//     for (let ram = 1; ram <= 3; ram++) {
//         console.log(vis, ram)
//     }
// }


// ! STRING


// *String Basics

// let country = 'India';
// console.log(country);
// console.log(typeof country);
// console.log(country[4]);
// console.log(country.charAt(1))

// *String Methods

// let message = 'Hi My name is Hi Vishnu';
// console.log(message);
// !charAt
// console.log(message.charAt(1));
// !toUpperCase
// console.log(message.toUpperCase());
// !toLowerCase
// console.log(message.toLowerCase());
// !includes
// console.log(message.includes('Vishnu'));
// !startsWith
// console.log(message.startsWith('Hi'));
// !endsWith
// console.log(message.endsWith('Vishnu'));



// !search
// console.log(message.search('My'));
// !indexOf
// console.log(message.indexOf('Hi'));
// !lastIndexOf
// console.log(message.lastIndexOf('Hi'));



// !toString
// let temp = 1234;

// let value = temp.toString();
// console.log(value);
// console.log(typeof value);

// let temp1 = [1, 2, 3, 4];

// let value1 = temp1.toString();
// console.log(value1);
// console.log(typeof value1);


// let temp2 = true;

// let value2 = temp2.toString();
// console.log(value2);
// console.log(typeof value2);


// !Concat

// let m1 = 'Hi ';
// let m2 = 'My Name ';
// let m3 = 'is Vishnu';

// let m = m1.concat(m2, m3);
// console.log(m);


// let l = m1 + m2 + m3;
// console.log(l);

// !Split
// let message1 = 'Hi My name is Hi Vishnu';
// console.log(message1.split(' '));


//! Slice
// let message2 = 'Hi My name is Hi Vishnu';
// console.log(message2.slice(0, 5));
// console.log(message2.slice(6, 12));
// console.log(message2.slice(3));
// console.log(message2.slice());
// console.log(message2.slice(0));
// console.log(message2.slice(-12, -1));

// !Substring

// let message3 = 'Hi My name is Hi Vishnu';
// console.log(message3.substring(0, 5))

// !Substr
// console.log(message3.substr(0, 5))



// ***Escape Sequences

// let testMessage = "Hi vishnu it's Nice Course"
// let testMessage1 = '\tHi vishnu "it\'s Nice Course",\nHow are you?'

// console.log(testMessage);
// console.log(testMessage1);


//*****  String Immutability

// let test = 'Hi Vishnu';
// test = test + ' How are you?'
// console.log(test);


// ! Objects

// const user = {
//     name: 'Vishnu',
//     age: 40,
//     hobby: 'Reading',
// }

// console.log(user);
// console.log(user.name);
// console.log(user['name']);
// console.log(user['age']);



// ****Adding, Modifying Deleting Properties
// const user1 = {
//     name: 'Vishnu',
//     age: 40,
//     isMarried: true,
// }

// !ADD

// user1.email = 'vishnu@gmail.com';
// user1['phone'] = '+919895087107';
// user1['1 page x'] = '123'; //!only possible this way
// console.log(user1);

// !UPDATE
// user1.isMarried = false;
// user1.age = user1.age - 10;
// console.log(user1);

// !DELETE
// delete user1.age;
// console.log(user1);

// *Object Methods This Keyword

const user = {
    name: 'Vishnu',
    age: 30,
    isMarried: true,
    friends: ['raja', 'ram',],
    selectColor: null,
    calculateAge: function () {
        console.log(`Hi Iam Vishnu ${this.age} years old`);
    }
};
user.calculateAge();