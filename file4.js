//------------------NEW KEYWORD

function createUser(name, age) {
  this.name = name;
  this.age = age;
}
createUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old !`;
};
const user1 = new createUser("suraj", 21);
console.log(user1.about());
//new keyword works
//1) create empty object  : this={}
//2) return this(i.e empty object)
//3) automatic proto being set (proto chaining done by new keyword)

for (let key in user1) {
  if (user1.hasOwnProperty(key)) console.log("own property:", key);
  else console.log("proto property : ", key);
}

//---------------------------ANALAYSIS
//Q : how array has all its methode
//Ans: from its prototype ,internally below is called as
// let numbers= new Array(1,2,3) and here new keyword linking prototype methodes to proto
let numbers = [1, 2, 3];
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

//---------------------CLASS
class CreateUser {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  about() {
    return `${this.name} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
}
const user2 = new CreateUser("Adams", 12, "male");
console.log(user2.about(), user2.name);
