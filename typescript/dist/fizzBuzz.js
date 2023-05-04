"use strict";
function fizzBuzz(startingNumber, endingNumber) {
    for (let i = startingNumber; i <= endingNumber; ++i) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
    }
    return "Not either.";
}
fizzBuzz(0, 100);
//# sourceMappingURL=fizzBuzz.js.map