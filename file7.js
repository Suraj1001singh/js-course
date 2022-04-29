//------------ Synchronous vs asynchronous programming

//js is synchronous and single thread programming language

//-------SETTIMEOUT

//Example 1
console.log("Time out start");
function hello() {
  console.log("hello");
}
setTimeout(hello, 1000); //this function calls hello function after delay of  atleast 1000ms
console.log("Time out end");
// setTimeout is function provided by browser

// overall flow of this code
// step1 :when js read setTimeout funct , js  passes it to browers to handel it and keep on reading and execute furthur line of code
// step2: browser will wait for the time , given along setTimeout function by user
// step3: as time get over, browser place callback function into callback queue
// step4: when js complete its execution on remaining code, event loop put that callback function
//        from callback queue to call stack
// step5: now js will execute that callback function and finally it will pop out from callstack

//Example 2
console.log("Time out start");
function sayHello() {
  console.log("hello");
}
setTimeout(sayHello, 0);
for (let i = 0; i < 100; i++) {
  console.log("66");
}
// console.log("Time out end");
//NOTE: even though time delay if of 0ms , that function will be handeled by browser and
//      brower will put it into callback queue as soon as it gets and
//      event loop will wait to finish execution of remaining code , then after it will put the callback function
//      in callstack and then it will get execute

//Example 3
console.log("Time out start");
function sayHello2() {
  console.log("hello");
}
const id = setTimeout(sayHello2, 1000);
console.log("Clearing time out having id ", id);
clearTimeout(id);
console.log("Time out end");
// The global clearTimeout() method cancels a timeout previously established by calling setTimeout().