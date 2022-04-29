//-------------------PROMISES
console.log("Task started");
//promise creation
const buckets = ["coffee", "rice", "flour", "vegetables", "pulses", "salt"];
const friedRicePromise = new Promise((resolve, reject) => {
  if (buckets.includes("vegetables") && buckets.includes("rice") && buckets.includes("salt")) {
    resolve("Hurray!! Fried rice is ready");
  } else reject("can't make");
});

//promise consume
//----------this work will be done by browser
friedRicePromise
  .then((res) => {
    //when promise is resolved
    console.log(res);
  })
  .catch((err) => console.log(err)); //when promise is rejected

//like callback functions are stored in callback queue
//similarly promises are stored in microtask queue
//if both callback queue and microtask queue contain something
//then prority will be given to microtask queue by event loop
//----------------------------------

setTimeout(() => {
  console.log("Inside setTimeOut");
}, 0);
for (let i = 0; i < 1000; i++) {
  console.log("hii");
}

console.log("Task ended");
//value passed to resolve will be recieved by
//value passed to reject will be recieved as an error by catch

//-----------------PROMISES WITH SETTIMEOUT
function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    if (value) resolve();
    else reject();
  });
}

myPromise()
  .then((res) => console.log("resolved", res))
  .catch((err) => console.log(err));
