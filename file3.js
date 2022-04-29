function createUser(name, age, gender, id) {
  const user = Object.create(createUser.prototype);
  user.name = name;
  user.age = age;
  user.gender = gender;
  user.id = id;
  return user;
}

createUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old !`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la ";
};

const user1 = createUser("suraj", 22, "male", 1212);
const user2 = createUser("shiva", 12, "male", 1212);
const user3 = createUser("ritesh", 25, "male", 1212);
console.log(user1.about());
console.log(user2.about());
console.log(user3.is18());



