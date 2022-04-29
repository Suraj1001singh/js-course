//-------------PROTO

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = Object.create(obj1); // returns empty object
//this sets proto for object2
obj2.key = "value3";
console.log(obj2, obj2.key1);
//if key  is not found in obj2 it will look into
// it's proto which is obj1

//--proto--,[[prototype]] both are same

const userMethodes = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethodes); //setting proto
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser("Raghav", "khurana", "raghav@gmail.com", "35", "Delhi, india");
console.log(user1.about());
console.log(user1.is18());
//NOTE : if js doesn't find anything inside object
// then it looks inside it's proto

//js function ===> function + object
function hello() {
  console.log("Hello fSociety");
}
console.log(hello.name);
//you can add your own custom property in function
hello.myProperty = "hii , this is my property";
// this is object behaveviour
console.log(hello.myProperty);

//-----------------------PROTOTYPE
//only functions provide prototype property
console.log("prototype : ", hello.prototype);
//adding property
hello.prototype.abz = "abz";
hello.prototype.xyz = "xyz";
console.log("prototype : ", hello.prototype);
