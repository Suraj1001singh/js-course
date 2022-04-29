//NOTE : .then always return promise
//       if we doesn't return anything it will return undefined
//Solving callbackhell usin promise  and settime

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

const changetext = (element, text, color, time) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolved("done!");
      } else rejected("element doesn't found");
    }, time);
  });
};

changetext(heading1, "one", "red", 1000)
  .then(() => changetext(heading2, "two", "green", 1000))
  .then(() => changetext(heading3, "two", "yellow", 1000))
  .then(() => changetext(heading4, "two", "blue", 1000))
  .then(() => changetext(heading5, "two", "violet", 1000))
  .then(() => changetext(heading6, "two", "pink", 1000))
  .then(() => changetext(heading7, "two", "orange", 1000))
  .catch((err) => alert(err));

//we are able to use multiple then , only because we are returning the promise
// from inside the then function
//if we have not returned , then will return promise as undefined
//and undesirable results will be seen
