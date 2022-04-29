let name = "suraj";
console.log(name);

function about(name, age) {
  console.log(arguments);
  console.log("my name is ", name, age);
}
let age = 22;
about("suraj", 33);

//---------------------CLOSURES
//when function returned by function it also returns its local vairables along with function
//if function1 returns function2 which is inside function1 , it will return local variables of function1 along it
//this is called closures
//Example 1
function function1(name, age) {
  function function2() {
    console.log(name, age);
  }
  return function2; //here functon1 will return its local variables as well (Memory context)
}
const ans = function1("suraj", "21");
ans();

//Example 2
function hello1(x) {
  const a = "how";
  const b = " are u ";
  function hello2() {
    console.log(a + b + x);
  }
  return hello2; //return with localvariables of hello1(or with its lexical env)[a,b,x]
}
const ans2 = hello1("suraj");
ans2();
//output: how are u suraj

//Example 2
function power(x) {
  function calculatePower(num) {
    let ans = 1;
    for (let i = 0; i < x; i++) {
      ans = ans * num;
    }
    console.log(ans);
  }
  return calculatePower;
}
const square = power(2);
square(12);

//Example 2
function funct() {
  let count = 0;
  function increment() {
    count++;
    console.log(`called ${count} times`);
  }
  return increment;
}
const ans3 = funct();
ans3();
ans3();
ans3();
