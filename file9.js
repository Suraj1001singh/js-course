//-------CALLBACK IN ASYNC PROGRAMMING
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");

// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "green";
//     setTimeout(() => {
//       heading3.textContent = "Heading 3";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "green";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//this is called callback hell

function changetext(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) onSuccessCallback();
        } else {
            if (onFailureCallback) onFailureCallback();
        }
    }, time);
}
changetext(heading1, "one", "red", 1000, () => {
    changetext(heading2, "two", "green", 1000, () => {
        changetext(heading3, "three", "orange", 1000, () => {
            changetext(heading4, "four", "blue", 1000, () => {

            }, () => console.log("heading4 doesn't exist"));
        }, () => console.log("heading3 doesn't exist"));
    }, () => console.log("heading2 doesn't exist"));
}, () => console.log("heading1 doesn't exist"));

//this is callback hell and also called pyramid of DOM


//-------------------------------- DEFER and ASYNC
//https://ourcodeworld.com/articles/read/1379/what-is-the-difference-between-the-async-and-defer-attributes-in-javascript#:~:text=Async%20allows%20the%20execution%20of,any%20effect%20on%20inline%20scripts.
