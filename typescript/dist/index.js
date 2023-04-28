"use strict";
function reverseString(inputString) {
    const addToArray = inputString.split("").reverse();
    const combineToString = addToArray.join().replace(/,/g, "");
    return combineToString;
}
const myString = "hello";
console.log(reverseString(myString));
//# sourceMappingURL=index.js.map