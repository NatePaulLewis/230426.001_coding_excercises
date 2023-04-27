"use strict";
function findTheAverage(inputArray) {
    const averageNumbers = inputArray.reduce((a, b) => {
        return a + b / 2;
    });
    return averageNumbers;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(findTheAverage(numbers));
//# sourceMappingURL=index.js.map