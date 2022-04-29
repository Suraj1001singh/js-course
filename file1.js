//-----VARIABLES

//valid variable names
firstName = "suraj";
first$name = "suraj";
_firstName = "suraj";
$_firstName = "suraj";
console.log(firstName);
console.log(first$name);
console.log(_firstName);
console.log($_firstName);

//for special characters only $ ,_ are allowed

//------LET V/S VAR

var lastname = "singh";
var lastname = "khan";
console.log(lastname);

//error will me thrown
// let lastname ="adam";
// console.log(lastname);

let lastName = "adam";
console.log(lastName);
// in let keyword you can't define same variable name within scope
//while it can be done is using var
//so let is reccommende
//var is can be accessed outside block but let con't be

//-------CONSTANTS

const pi = 3.14;
console.log(pi);

//----------STRINGS

let string = "   Suraj   ";
console.log(string.trim().toLowerCase());
console.log(string.toUpperCase().trim());
console.log(string.trim().slice(0, 3));
console.log(string.trim());

//---------type of operators
//type of variables

var age = 23;
let studentName = "suraj";
console.log(typeof age);
console.log(typeof studentName);
console.log(Number(studentName));

//----------STRING CONCATNATION
var num1 = "11";
var num2 = "22";
console.log(num1 + num2);
// '+' infront of string convert it into number
console.log(+num1 + +num2);

//---------TEMPLATE STIRNG

var age = "22";
var name = "suraj";
console.log("my name is " + name + " and my age is " + age);
//shortcut way -: using  template string
var about = `my name is ${name} and my age is ${age}`;
console.log(about);

//----------UNDEFINED VARIABLE
var rollno;
console.log(rollno); // print undefined
//but we can't do same thing in const var, it will throw error
// const rollno1;
// console.log(rollno1);

//-------------NULL
var myVar = null;
console.log(typeof myVar, myVar);
// this will print : object null
//this is actually a bug

//-------------BIG INT

console.log("MAX_LIMIT OF NUMBER ", Number.MAX_SAFE_INTEGER);
var num1 = BigInt(12321423413412341324134142314124123412342314);
var num2 = 1324123783871974937019748327410279479237901749732904n;
var num3 = 23;
console.log(num1);
console.log(num2);
console.log(num1 + num2);
// this will throw an error because we can add only same datatype
//console.log(num1 + num3);

//--------------------COMPARISON OPERATORS
//== V/S ===
var num1 = "11";
var num2 = 11;
console.log(num1 == num2); // true
console.log(num1 === num2); // false
//'===' takes data type also under consideration

//-----------------FALSY AND TRUTHY VALUE

// falsey values
// 1) false
// 2) ""
// 3) null
// 4) undefined
// 5) 0

//---------------------TERNARY OPERATORS

var age1 = 8;
var isAllowed = age1 >= 18 ? "yes allowed" : "Not allowed";
console.log(isAllowed);

//-----------------------ARRAYS
// in js arrays are objects and array is mutable
var arr = ["mango", "apple", "aam"];
var obj = {}; //object literals
console.log(typeof arr, arr);
console.log(Array.isArray(arr), Array.isArray(obj));

//---------------------ARRAYS OPERATION

arr.push("green"); //green will be pushed to original array
console.log(arr);
arr.pop(); //it will remove and return last element of  array
console.log(arr);
arr.unshift("banana"); // add at starting
console.log(arr);
arr.shift("banana"); //remove and return first element
console.log(arr);
//NOTE : push and pop is faster than shift and unshift
var arr2 = arr.slice(0); //clone arr into arr2; this is fasted methode
arr2 = [].concat(arr);
//using SPREAD operator;
arr2 = [...arr, "hii"];
console.log(arr2);

//-------------PRIMITIVE V/S REFERANCE DATA TYPE

//primitive
var num1 = 90;
var num2 = num1;
console.log(num1, num2); //num1===num2
num1++;
console.log(num1, num2); //num1!=num2

//referance
var arr1 = ["mango", "apple"];
var arr2 = arr1;
console.log(arr1, arr2); //arr1==arr2
arr1.push("green");
console.log(arr1, arr2); //arr1==arr2

// primitive data type store in stack
// while reference data types pointers store in stack
// which point to memory location in heap having array stored
// if we change value in heap using any pointer it will be reflected
// in all pointers pointing at that memory location

//-------------CONST ARRAY
//fruits is stored in stack as referance var
//['apple','mango'] stored in heap
//while pushing banana with help of referance var we push mango to same location
//no address is changed so no error is thrown
const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);

//----------ARRAY DESTRUCTURING

const arr_1 = ["value1", "value2", "value3"];
let [myvar1, myvar2] = arr_1;
console.log(myvar1, myvar2);

const oldArr = ["value1", "value2", "value3", "value4"];
[myvar1, myvar2, ...newArr] = oldArr;
//remaining elements will be cloned into new array
console.log(myvar1, myvar2, newArr);

//----------------OBJECT
//it is referance datatype
const person = { name: "suraj", age: "22", hobbies: ["reading", "sleeping", "eating"] };
console.log(typeof person, person, Array.isArray(person));
person.gender = "Male"; //adding new field in object
console.log(person);

//to add new key value pair
const key = "email";
// person[`${key}`] = "suraj@gmal.com";
//   or
person[key] = "suraj@gmal.com";
console.log(person);
//looping over objects using for loop
for (let key in person) {
  console.log(key, ":", person[key]);
}
// looping over object using object.keys
console.log(Object.keys(person)); //return array of keys
for (let key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}
//computed properties
var key1 = "object1";
var key2 = "object2";
const object = {
  [key1]: "value1",
  [key2]: "value1",
};
console.log(object);

//------------------SPREAD OPERATOR
//in array
const primeNUmber = [1, 2, 3, 5, 7, 11];
const compositeNUmber = [4, 6, 8, 9, 10];
const naturalNumber = [...primeNUmber, ...compositeNUmber];
console.log(naturalNumber.sort());

//in string
const stringArray = [..."suraj"];
console.log(stringArray);

//in objects
const obj2 = {
  key1: "value1",
  key2: "value2",
};
const obj3 = {
  key1: "hello",
  key3: "value3",
};
console.log({ ...obj2, ...obj3 });
//miscellaneous
const obj4 = { ...["item", "item2"] };
const obj5 = { ..."suraj" }; //index will become key with corresponding char as values
console.log(obj4, obj5);

//------------------------OBJECT DESTRUCTURING

const car = {
  model: "12",
  engine: "kryo23",
};
const { model, engine } = car;
console.log(model, engine);
const employee = {
  id: "223",
  domain: "SWE",
  payscale: "level3",
  gender: "male",
  name: "suraj",
};
var { id, name, ...about } = employee;
console.log(id, name, about);

//------------------OBJECTS INSIDE ARRAY
const users = [
  {
    userId: "1",
    username: "user01",
  },
  {
    userId: "2",
    username: "user02",
  },
  {
    userId: "3",
    username: "user03",
  },
];
const [user1, user2, user3] = users;
console.log("user1 : ", user1);
console.log("user2 : ", user2);
console.log("user3 : ", user3);

const [{ username }, , { userId }] = users;
console.log(username, userId);

//-------------------------------FUNCTION
//function declaration
function getsum(a, b) {
  console.log(a + b);
}
//this is called overloading
getsum(1, 2);
getsum("race", "car");

//-------------------------FUNCTION EXPRESSION
const getdiff = function (a, b) {
  console.log(a - b);
};
getdiff(7, 4);
//-------------------------ARROW FUNCTION

const getSumazation = (a, b) => {
  console.log(a + b);
};
getSumazation(2, 5);

//--------------------------HOISTING
hello();
function hello() {
  console.log("hello");
}

//this won't be possible with function expression and arrow function

//-----------------LEXICAL SCOPING

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//   Lexical Scoping defines how variable names are resolved in nested functions,
//   inner functions contain the scope of parent functions even if the parent function has returned(this is also called closure)
function greeting() {
  const greet = "good morning";
  function myGreet() {
    const greet = "good night";
    console.log(greet);
  }
  console.log(greet);
  myGreet();
}
greeting();


//--------------------BLOCK V/S FUNCTION SCOPE
//let and const are block scope
//var is function scope
{
  let var4 = "how are you"
  console.log(var4);
}
//let var4 cannot be accessed outside block

function hii() {
  var hii = "hii";
  console.log(hii);

}
hii();

//--------------------DEFAULT PARAMETERS

function addTwo(a, b) {
  // console.log(typeof typeof b);
  // if b is undefined it will return falsy value
  if (!b) {
    b = 5;
  }
  console.log(a + b);
}
addTwo(3);

function addThree(a, b = 1, c = 2) { //default parameter  
  console.log(a + b + c);
}
addThree(3);
addThree(3, 2);
addThree(3, 2, 4);

//-------------------------REST PARAMETERS

function printParams(a, b, ...c) {
  console.log(a, b, c);
}
printParams(1, 2, 3, 4, 5, 6, 7, 8, 9,);

function addAll(...c) {
  let total = 0;
  for (let i of c) {
    total = total + c;
  }
  return total
}
console.log(addAll(1, 2));

//--------------------CALLBACK FUNCTIONS
//in simple words
function myFun(a) {
  const name = "suraj"
  console.log(a);//this will print passed function
  a(name); //calling of function
}
function myFun1(name) {
  console.log("i am inside myFun1");
  console.log("my name is :", name);
}
// i passed function as parameter and then called it from inside
myFun(myFun1);

//--------------FUNCTION RETURNING FUNCTIONS
function firstFun() {
  const sayHello = () => {
    console.log("hello Moto!");
  }
  return sayHello;
}
const ans = firstFun()
ans();

//---------------------ARRAY METHODES
// To Mutate or Not to Mutate? The JavaScript Array Methods Cheat Sheet
// https://betterprogramming.pub/to-mutate-or-not-to-mutate-javascript-array-methods-cheat-sheet-2a7f39c9ca65

//-------FOR EACH

//1st way
console.log("1st Methode");
const arr5 = [1, 2, 3, 4, 5, 6]
function multiply(number, index) {
  console.log(`2 * ${number} : ${2 * number}`)
}

arr5.forEach(multiply);

//2nd way
console.log("2nd Methode")
arr5.forEach((number, index) => console.log(`2 * ${number} : ${2 * number}`))
// Where callbacks really shine are in asynchronous functions, 
// where one function has to wait for another function (like waiting for a file to load).

const employees = [
  { username: "suraj", id: "1" },
  { username: "shivam", id: "2" },
  { username: "sarvesh", id: "3" },
  { username: "shubham", id: "4" },
]
employees.forEach(({ username }) => console.log(username))//object destructuring

//-------FOR MAP

employees.map(({ username, id }) => console.log(`hii ${username}, your id is ${id}`))

//--------FILTER

const evenNumber = arr5.filter((number) => number % 2 == 0)
console.log(evenNumber);
// The arr.filter() method is used to create a new array from a given array  consisting 
// of only those elements from the given array which satisfy a condition set by the argument method. 
// Return value: This method returns a new array consisting of only those elements that satisfied the condition of the arg_function. 

//---------REDUCE
// The reduce() method returns a single value: the function's accumulated result.
// The accumulated result from the last call of the callback function.
const sum = arr5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(sum);

const shoppingCart = [
  { productId: "01", price: 2300, qty: 2 },
  { productId: "02", price: 1200, qty: 1 },
  { productId: "03", price: 1000, qty: 4 },
  { productId: "04", price: 2400, qty: 1 },
]

const totalPrice = shoppingCart.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.qty, 0);
//initial value of accumulator is set to 0
console.log("Total cost in cart is :", totalPrice);

//---------SORT
//sort changes original array
const unordered = [34, 4, 1, 77, 9, 5, 33, 56]
unordered.sort();
//this will sort taking them as strings and we won't get desired result
console.log(unordered);

unordered.sort((a, b) => a - b);
console.log(unordered);

//if a-b ------->+ve -------->b,a
// else -------->a,b

//for sorting in increasing order return a-b
//for sorting in decreasing order return b-a

//for cloning into new array we used slice
const lowToHigh = shoppingCart.slice(0).sort((a, b) => a.price - b.price)
console.log("Low to High (price) : ", lowToHigh);

//----------FIND 
//return single object or value of  mathching index
const ans1 = shoppingCart.find((item) => item.price == 1000);
const ans2 = employees.find((user) => user.id == 3);
console.log(ans1, ans2);

//----------EVERY 
//return false if there is atleast 1 number doesn't satisfy callback condition
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr6.every((num) => num % 2 == 0));

//callback return -----?true/false
//every methode return------>true if callback is true for every numnber
//---->else it will return false;

//------------SOME 
//return true if there is atleast 1 number satisfy callback condition
console.log(arr6.some((num) => num % 2 == 0));

//-----------FILL
//this changes original array
const arr7 = new Array(10).fill(9);
console.log(arr7);
arr7.fill(-1, 2, 5);
console.log(arr7);

//----------SPLICE
//this is deletion
arr7.splice(0, 4);
console.log(arr7);
//this is insertion
arr7.splice(2, 0, "inserted");
console.log(arr7);
//insertion and deletion together
arr7.splice(2, 2, ...[4, 4]);
console.log(arr7);

//NOTE : it returns deleted items also and can be stored using const var

//-----------------ITERABLES
//object in which we can apply for of loop
// Ex: string,array,sets
for (let i of "suraj")
  console.log(i);
for (let i of [1, 2, 4, 5])
  console.log(i);
//----------------ARRRAY LIKE OBJECT
//objects having length property
//and can be accessed using index
//Ex: string,array

//---------------------------SETS
//cannot access using index
//not ordered
//unique items
const set1 = new Set([1, 2]);
set1.add(3);
set1.add(["hii", "hello"]);
set1.add(["hii", "hello"]);
//NOTE : here two same array are added in set why?
//       because when we create array using [] it assigns
//       diff memory location to different array
//       both [] have diff locatin in heap ,so they are not same
console.log(set1);
console.log(set1.has(2)); //return true or false

for (let item of set1)
  console.log(item);

//extracting unique element from array;
const arr8 = [1, 1, 4, 4, 7, 3, 6, 7, 9,];
const set2 = new Set(arr8)
const uniArrr = [...set2]
uniArrr.sort((a, b) => a - b);
console.log(uniArrr, uniArrr.length);

//-------------------------MAP
const personDetail = new Map();
personDetail.set("name", "Adam");
personDetail.set("age", "6");
personDetail.set(1, 1);
console.log(personDetail);
console.log(personDetail.get("name"));
console.log(personDetail.get(1));
const keys = personDetail.keys();
for (let i of keys)
  console.log(personDetail.get(i));

//using direct for of loop in map
for (let [key, value] of personDetail)
  console.log(key, " ", value);

//2nd methode of defining map
const personDetail2 = new Map([["name", "Adam"], ["age", "6"], [1, 1]]);
console.log(personDetail2);

//-----------CLONE USING OBJECT.ASSIGN
const obj6 = {
  key1: "value1",
  key2: "value2",
}
const obj7 = Object.assign({}, obj6)
obj7.key3 = "value3"
console.log(obj7);

//---------OPTIONAL CHAINING

const personDetail3 = {
  id: 998,
  profile: {
    name: "suraj",
    email: "suraj@gmail.com",
    phonenumber: 941156889
  }
}
console.log(personDetail3?.id);
console.log(personDetail3?.profile?.email);

//----------------METHODES
//function inside object
const person1 = {
  firstname: "suraj",
  age: 8,
  about: function () {
    console.log(`person name is ${this.firstname} and age is ${this.age}`);
  }
}
person1.about();


//-------------THIS KEYWORD
// https://www.javascripttutorial.net/javascript-this/
// https://www.w3schools.com/js/js_this.asp
//print window object 
//this refer to window
console.log(this, window);

function myFun() {
  console.log("inside function", this);
}
window.myFun();
//or
//this.myFun();
function myFun2() {
  "use strict"
  console.log("inside funct2", this);
}
myFun2();

function hello1() {
  console.log("hello world");
}
hello1.call();

//-----------------CALL , APPLY AND BIND 
const user4 = {
  firstname: "suraj",
  age: 29,
  about: function (hobby, favArt) {
    console.log(this.firstname, this.age, hobby, favArt);
  }
}
const user5 = {
  firstname: "rajeev",
  age: 21,

}
user4.about.call(user5, "coding", "picasso");//this keyword binding is changed to user5 object
user4.about.apply(user5, ["programming", "daVinci"]);
//apply internally  call "call" itself
const funct = user4.about.bind(user5, "guitar", "steve");
funct();
//in bind we can store this function inside any var
// and later call when required

//undefined undefined 
//this keyword is not binded with user4 object
//this keyword is binded to window object 
// for bind use bind()  as user4.about.bind(user4);
const funct2 = user4.about;
funct2();


//---------------------ARROW FUNCTIONS
//in arrow funct this refers to window object 
// ALWAYS and we can't change it


function createUser(firstName, lastName, email, age, address) {
  const user = {}
  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.age = age
  user.address = address

  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  } 
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;
}

const user6 = createUser("Raghav", "khurana", "raghav@gmail.com", "35", "Delhi, india")
console.log(user6.about());

