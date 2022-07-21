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

// ********
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);


// *******

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

// const user = {
//     name: 'Vishnu',
//     age: 30,
//     isMarried: true,
//     friends: ['raja', 'ram',],
//     selectColor: null,
//     calculateAge: function () {
//         console.log(`Hi Iam Vishnu ${this.age} years old`); //!here used this
//     }
// };
// user.calculateAge();


// *Traversing Object Entries

// const user = {
//     name: 'Vishnu',
//     age: 30,
//     gender: 'Male',
//     phone: 9895087107,
//     email: 'vishnu@gmail.com'
// }

//! * 1st method
// for (let key in user) {
//     console.log(key, user[key]);
// }

//! *2nd method
// console.log(Object.keys(user));
// console.log(Object.values(user));

//! *3rd method
// for (let val of Object.values(user)) {
//     console.log(val);
// }


// *  Exercise Total Salary

// const salaries = {
//     vishnu: 2000,
//     raj: 4000,
//     ram: 5000,
//     krishna: 6000,
//     shiv: 8000
// }


//! * 1st method

// let sum = 0;
// for (let key in salaries) {
//     console.log(key, salaries[key]);
//! sum = sum + salaries[key];
//     sum += salaries[key];
// }
// console.log(sum);

//! *2nd method
// console.log(Object.keys(salaries));
// console.log(Object.values(salaries));

//! *3rd method

// for (let val of Object.values(salaries)) {
//     sum += val;
// }
// console.log(sum);



// *Object Destructuring

// const user = {
//     name: 'vishnu',
//     age: 30,
//     favBook: {
//         bookName: 'Abcdefg',
//         author: 'xyz',
//     },
// };

// const { name, age, favBook } = user  //!!!!!!!  Object Destructuring
// const { bookName, author } = favBook  //!!!!!!!  Object Destructuring

// console.log(user.name); //* normal
// console.log(name); //* after object destructuring
// console.log(age);
// console.log(favBook.bookName);
// console.log(favBook.author);

// *Cloning an object

// const user = {
//     name: 'Vishnu',
//     age: 30
// }

//! * 1st method

// const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age;

//! *2nd method

// for (let key in user) {
//     console.log(key, user[key]);
//     copiedUser[key] = user[key]
// }

//! *3rd method OBJECT ASSIGN METHOD
// const copiedUser = Object.assign({}, user);

// console.log(copiedUser);

// * Math Object

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.round(3.7));


// *JSON Data Format

// const user = {
//     name: 'Vishnu',
//     age: 30,
// };

// ! obj to json
// const jsonData = JSON.stringify(user)

// console.log(user);
// console.log(jsonData);

// ! json to obj
// console.log(JSON.parse(jsonData));

// * ------ Javascript Functions

// * Function Basics

// ! Function Declaration

// function aboutMe(name, age) {
//     const message = `Hi it's me ${name} ${age} years old`
//     console.log(message);
// }

//! Function Call
// aboutMe('Vishnu', 30);
// aboutMe('Ram', 26);


// *** CALCULATE SUM

// function calSum(num1, num2) {
//     console.log(num1 + num2)

// }
// calSum(10, 10);

// ****
// let number1 = 20;
// let number2 = 30;

// function calcSum(number1, number2) {
//     let sum = number1 + number2;
//     return sum
// }
// let result = calcSum(10, 20)
// console.log(result);


// *Default Parameters

// function calSum(number1, number2, number3 = 50) {
//     let sum = number1 + number2 + number3;
//     return sum;
// }
// console.log(calSum(10, 20));



// * Function as an Expression

// const calSum = function (number1, number2, number3 = 50) {
//     let sum = number1 + number2 + number3;
//     //     return sum;
// }

// console.log(calSum(10, 20));   //! only declare below


// * Arrow Functions
// const calSumArrow = (number1, number2) => number1 + number2;
// console.log(calSumArrow(10, 20));

// !Fun Expression multiplication
// const mulByTwo = function (num1) {
//     return num1 * 2;
// }

// console.log(mulByTwo(6));


// !arrow multiplication

// const mulByArrow = (number1) => number1 * 2;
// console.log(mulByArrow(3));



// *Rest Parameter
// function multiply(...args) {

//     let mul = 1;
//     for (let num of args) {
//         mul = mul * num
//     }
//     return mul;

// }

// console.log(multiply(2, 2, 2, 2, 2));




// ! ---------Javascript Arrays

// * Array Basics

// let friends = ['vishnu', 'ram', 'raja', 'shiva', 'devi'];

//console.log(friends);
//console.log(friends[2]);
//console.log(friends[3]);
//console.log(friends[0]);
//console.log(friends.length);



// * Adding Elements in an array

// const numbers = [12, 13, 14, 15, 16]
// console.log(numbers);
// numbers.unshift(9, 10, 11); //! add before
// console.log(numbers);

// numbers.push(17, 18, 19); //! add after
// console.log(numbers)

// numbers.splice(3, 0, 1, 1, 2, 2); //!add in between
// console.log(numbers);

// * Removing Elements in an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers);

// numbers.shift(); //!remove first
// console.log(numbers);

// numbers.pop(); //!remove last
// console.log(numbers);

// numbers.splice(2, 3); //!remove in between
// console.log(numbers);


// *Finding Elements (Primitive Type)

// const numbers = [1, 2, 3, 2, 5, 6, 2, 8];


// console.log(numbers.includes(6));
// console.log(numbers.includes(6, 5));
// console.log(numbers.includes(3, 3));
// console.log(numbers.indexOf(5));
// console.log(numbers.lastIndexOf(6));
// console.log(numbers);


// * Finding Elements (Reference Type)

// const doctors = [
//     { name: "vishnu", age: 20, },
//     { name: "ram", age: 30, },
//     { name: "shiv", age: 40, },
// ];

// const result = doctors.find(function (doctor) {
//     return doctor.name === 'ram';
//     // return doctor.age > 30;
// })

// console.log(result);

// * Iterating an array

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(i, numbers[i])
// }


// ! for of
// for (let num of numbers) {
//     console.log(num)
// }


// ! for each

// numbers.forEach(function (num, index) {
//     console.log(index, num);
// })

//  * Sorting and Reversing an array

// const numbers = [2, 6, 5, 8, 9, 7, 4, 1, 3];

// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);


// !------------------------

// let students = [
//     { name: 'Vishnu', age: 60 },
//     { name: 'Ram', age: 20 },
//     { name: 'Shiv', age: 40 },
// ];

// students.sort(function (d1, d2) {
//     if (d1.age > d2.age) return +1;
//     if (d1.age === d2.age) return 0;
//     if (d1.age < d2.age) return -1;
// });
// console.log(students);

// !------------------------

// let doctors = [
//     { name: 'Vishnu', age: 40 },
//     { name: 'Ram', age: 20 },
//     { name: 'Shiv', age: 60 },
// ];
// doctors.sort(function (d1, d2) {
//     if (d1.age > d2.age) return +1;
//     if (d1.age === d2.age) return 0;
//     if (d1.age < d2.age) return -1;
// }).reverse();
// console.log(doctors);

//  * Testing the elements of the array every , some

//  !!!!!! every

// const numbers = [3, 5, 6, 7, 8, -1, 9, 5];
// const data = numbers.every(function (num) {
//     return num > 0;
// });

// console.log(data);


//  !!!!!! some

// const data1 = numbers.some(function (num) {
//     return num > 0;
// });
// console.log(data1);


// * Combining and Slicing the array

// ! concat

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6, 7, 8, 9];
// const num = num1.concat(num2);
// console.log(num);

// ! slice

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sliceArray = number.slice(3, 8);
// console.log(sliceArray);


//  * Spread Operators

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(...numbers);
// console.log(numbers);
// console.log(numbers[0], numbers[1],);

// const copiedArray = [...numbers];
// console.log(copiedArray);


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// num = [...num1, ...num2]
// console.log(num);

// * Joining Array

// ! Array to String

// let numbers = [1, 2, 3, 4, 5, 6];
// let joinArray = numbers.join('|')
// console.log(joinArray);

// ! String to Array

// let message = 'Hi my name is vishnu';
// const arrayMessage = message.split(' ');
// console.log(arrayMessage);
// console.log(arrayMessage.join('-'));

// * Mapping an array

// let numbers = [1, 2, 3, 4, 5, 6];


// let mulByTwo = [];
// for (let num of numbers) {
//     mulByTwo.push(num * 2);
// };
// console.log(mulByTwo)

// !  MAP===================>

// const multiplyByTwo = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(multiplyByTwo);

// const mulByTwo = numbers.map((num) => num * 2);
// console.log(mulByTwo);

// ! ====..............

// let doctor = [
//     { name: 'vishnu', age: 25 },
//     { name: 'ram', age: 30 },
//     { name: 'shiva', age: 35 },
// ];

// const docName = doctor.map((doc) => doc.name);
// console.log(docName);
// console.log(typeof docName);


// * Filtering an array

// ! normal way
// let numbers = [1, 2, 3, 4, 5, 6];
// let onlyOddNumbers = [];

// for (let num of numbers) {
//     if (num % 2 === 1) {
//         onlyOddNumbers.push(num);
//     }
// }

// console.log(onlyOddNumbers);

// ! filter

// const onlyOddNumbers1 = numbers.filter(function (num) {
//     return num % 2 === 1;
// });

// console.log(onlyOddNumbers1);

// ! Filter arrow function

// const onlyEvenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(onlyEvenNumbers)

// *Reducing an array


// ! normal way

// let numbers = [10, 20, 30];

// let sum = 0;
// for (let num of numbers) {
//     sum = sum + num;
// };
// console.log(sum);


// ! Reduce

// const ReduceSum = numbers.reduce(function (sum, num) {
//     return sum = sum + num;
// }, 0);

// console.log(ReduceSum);

// ! reduce arrow

// const reduceSum = numbers.reduce((sum, num) => sum = sum + num);
// console.log(reduceSum)




// !===================ES6, ES7 and ES8 Features==============

// * Array Object Destructuring

// function greeting(user) {

// ! Object destructuring
//     const { name, age, address } = user;
//     const { long, lat } = address;

//     console.log(`Hello ${name} and age is ${age} and address is ${long},${lat} `)
// };

// const user = {
//     name: 'vishnu',
//     age: 30,
//     address: {
//         long: 334.256,
//         lat: 258.654
//     }
// };

// greeting(user);

// ! array destructuring

// let [a, b, c, d, e] = [1, 2, 3, 4, 5];
// console.log(a, b, c, d, e)


// * Data Structure: Set

// let set = new Set();

// set.add(100);
// set.add(300);
// set.add(200);
// set.add(100);

// console.log(set);
// console.log(set.size);

// ! remove
// set.delete(200);
// console.log(set);
// console.log(set.size);

// ! for of

// for (let val of set) {
//     console.log(val);
// };

// ! for each

// set.forEach((val) => console.log(`for each\n`, val));

// ! clear

// set.clear();
// console.log(set);

// * Data Structure: Map

// let map = new Map();

// map.set('Mango', 'Aam');
// map.set('Banana', 'kel');
// map.set('Score', 100);

// console.log(map);


// ! for of

// for (let ele of map) {
//     console.log(ele);
// }

// ! search using  has

// console.log(map.has('Banana'));
// console.log(map.has('Bat'));


// ! Delete
// map.delete('Banana');
// console.log(map);


// !key & vales

// console.log(map.values());
// console.log(map.keys());

// ! Clear

// map.clear();
// console.log(map);


// * Weak Set + Weak Map

// !  Weak Set

// const ws = new WeakSet();

// const object1 = {};
// const object2 = {};

// ws.add(object1);
// ws.add(object2);

// console.log(ws);


// ! find
// console.log(ws.has(object1));
// console.log(ws.has(object2));
// ! Delete

// ws.delete(object1);
// console.log(ws.has(object1));

// ! Weak Map

// const wm = new WeakMap();

// wm.set(object1, 123456789);
// console.log(wm.has(object1));

// ! show vales

// console.log(wm.get(object1));

// ! Delete

// wm.delete(object1);
// console.log(wm.has(object1));


// * Module (Import Export)

// import addNumber from './main.js'

// console.log(addNumber(10, 20));



//  * padStart, padEnd TrimStart, TrimEnd

// ! padStart ===> 0004

// let minute = '4';
// let hour = '8'

// console.log(minute.padStart(4));
// console.log(minute.padStart(4, 0));

// ! padEnd ===> 4000

// console.log(hour.padEnd(5, 0));
// console.log(hour.padEnd(5));


// ! Trim ===> remove all empty places
// let trimName0 = '   vishnu   ';

// console.log(trimName0.length);

// trimName0 = trimName0.trim();
// console.log(trimName0);
// console.log(trimName0.length);

// ! TrimStart ===> remove left side empty places

// let trimName = '   vishnu   ';

// console.log(trimName.length);

// trimName = trimName.trimStart();
// console.log(trimName);
// console.log(trimName.length);

// ! TrimEnd ===> remove right side empty places

// let trimName1 = '   vishnu   ';
// console.log(trimName1.length);

// trimName1 = trimName1.trimEnd();
// console.log(trimName1);
// console.log(trimName1.length);

//  !=== Error Handlings in JavaScript

// * Different types of errors in JavaScript.

// let java Is Fun = true; //!SyntaxError (not declared properly)
// let javaIsFun = true; //!ReferenceError (not declared)

let country = 'India';
console.log(country.toUpperCase());
let javaIsFun = true;
// console.log(javaIsFun.toUpperCase()); //!typeError (bcz use wrong cmd)


let pi = 3.141592654;
// console.log(pi.toFixed(101)); //! RangeError (1 to 100 is limit)


// * Exercise Throw Custom Error Object

function div(a, b) {
    if (b === 0) {
        //throw new Error('Second Parameter cannot be zero');
        throw new SyntaxError('Second Parameter cannot be zero'); //! Throw Custom Error
        //throw new TypeError('Second Parameter cannot be zero');
        //throw new ReferenceError('Second Parameter cannot be zero');
    }
    return a / b;
}
console.log(div(5, 0))