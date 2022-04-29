//----------------SETINTERVAL
//Example 1
//-----------------------------------------
// console.log("Interval start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// for (let i = 0; i < 10000; i++) console.log("66");
// console.log("Interval end");
//-------------------------------------------

//Flow
//browser will keep putting callback function in callback after every 1s(or time mentioned in setInterval)

//--------------CALLBACK IN SYNCHRONOUS PROGRAMMING
//doing particular task after completion of another task is called callback
//and function passed as argument to perform that particular task is called callback function
//----callback in synchronous programming
//Methode 1
function fun1(callback) {
  console.log("doing task 1");
  callback();
}
function fun2() {
  console.log("doing task 2");
}
fun1(fun2);

//Methode 2
fun1(() => {
  //callback function is passed
  console.log("doing task 2");
});

//Example 2
//Methode 1
//------------------------------------------------
// function getsum(reducer, ...arr) {
//   console.log("Now calculating sum");
//   reducer(arr);
// }
// function reducer(arr) {
//   let sum = 0;
//   arr.forEach((i) => {
//     sum += i;
//   });
//   console.log("Sum of number is: ", sum);
// }
// getsum(reducer, 1, 2, 3, 4, 5);
//-----------------------------------------------

//Methode 2
function getsum(callback, ...arr) {
  callback(arr);
}
getsum(
  (arr) => {
    console.log(arr.reduce((acc, num) => acc + num, 0));
  },
  1,
  2,
  3,
  4,
  5
);


