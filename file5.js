// -------------------How JavaScript Works----------
// https://dev.to/narottam04/how-javascript-works-visually-explained-269j
// compilation phase
// three thing happens in compilaton 1) Token/lexical ,2) parsing, 3) executable code generation
//    1) Early error checking
//    2) scope for variables
// code execution
//    1) in JS code executes inside execution context(Global execution context)

// ..------------Global execution context phase
// phase 1 creation phase
// phase 2 code execution phase

//javascipt is synchronus and single thread programming language

//---------------------------LEXICAL  AND DYNAMIC SCOPING
//https://medium.com/@osmanakar_65575/javascript-lexical-and-dynamic-scoping-72c17e4476dd

// Lexical scoping (sometimes known as static scoping ) is a convention used
// with many programming languages that sets the scope (range of functionality)
//  of a variable so that it may only be called (referenced) from within the block
//   of code in which it is defined. The scope is determined when the code is compiled.
//    A variable declared in this fashion is sometimes called a private variable.

// The opposite approach is known as dynamic scoping . Dynamic scoping creates
// variables that can be called from outside the block of code in which they
// are defined. A variable declared in this fashion is sometimes called a public variable.

//lexical scope is created during runtime and static scope is created during runtime

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName); // initailly as undefined during global context formation
function myFunction() {
  //already stored  global context  before execution
  console.log("This is my function");
}
var firstName = "Harshit";
var lastName = "singh";
var fullName = firstName + " " + lastName;
console.log(fullName);
//------------------------------------------------------------------------

//this will throw error: Uncaught ReferanceError
//cannot access 'greet' before initialization
//athough let and const also have hosting, but they are initialized
/*
        console.log("greet", greet);
        let greet; //now it is initialzed
*/

// if we do just console.log(greet) and not defined anywhere in file
// then it will throw error
// this will throw error: Uncaught ReferanceError
//'greet is undefined
/*
            console.log("greet", greet);
*/

// -------------------TDZ (Tempolar Dead Zone)-----------------
// A temporal dead zone (TDZ) is the area of a block where a variable is
// inaccessible until the moment the computer completely initializes it
// with a value

//--------Good Article from FreeCodeCamp about hoisting and TDZ of var, const, let
//https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/#:~:text=A%20temporal%20dead%20zone%20(TDZ,initial%20value%20to%20a%20variable.

function hii() {
  const greet = {};
  greet.name = "Good morning";
  greet.about = function () {
    console.log("hello", this.name);
  };

  const hello = () => {
    console.log("gandu", this);
  };
  hello();
  return greet;
}
const ans = hii();
ans.about();
