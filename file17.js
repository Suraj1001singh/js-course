const hello = async () => {
  let x = 0;
  setInterval(() => {
    x += 1;
    if (x > 14) x = 0;
    console.log("hello", x);
  }, 1000);
};
hello();
