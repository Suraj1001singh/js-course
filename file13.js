//AJAX-: Asynchronous javascipt and XML
//HTTP  request
//is a set of "web development techniques"
//using many web technologies on "client-side"
//to create asynchronous web application

//with ajax, web application can send and retrive
//data from a server asynchronously ( in the background)
//without interferring with the display and
//bhehavoiur of the existing page
//we don't use data in XML anymore, we use JSON

//We have 3 most common ways to create and send request to server
//  1) XMLHttpRequest(old way of doing)
//  2) fetch ApplicationCache(new way of doing)
//  3) axios (this is third party library)

// ---------------XMLHttpRequest.readyState
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// converting JSON to js objects we use, JSON.parse()
// converting js objects to JSON we use, JSON.stringify()
// JSON is a data format that has its own independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.

//---------METHODE 1
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// // console.log(xhr.readyState);
xhr.open("GET", URL);
// // console.log(xhr.readyState);
// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     //converting jSON to js object using js library JSON
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// };
// xhr.send();

//---------HTTPS STATUS CODES
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//METHODE 2 using onload() handler

xhr.onload = () => {
  if (xhr.status == 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);
  } else {
    console.log("something went wrong");
  }
};
//this is called when there is network error,like if there is not internet connection
xhr.onerror = () => {
  console.log("Please check your internet connenction");
};
xhr.send();
