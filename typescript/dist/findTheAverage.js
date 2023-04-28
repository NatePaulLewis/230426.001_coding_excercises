"use strict";
function findTheAverage(inputArray) {
    const averageNumbers = inputArray.reduce((a, b) => {
        return a + b / 2;
    });
    return averageNumbers;
}
const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(findTheAverage(myNumbers));
//# sourceMappingURL=findTheAverage.js.map