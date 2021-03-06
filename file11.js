//-----------------PROMISES WITH SETTIMEOUT
function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) resolve();
      else reject();
    }, 2000);
  });
}

myPromise()
  .then((res) => console.log("resolved"))
  .catch((err) => console.log("rejected"));
