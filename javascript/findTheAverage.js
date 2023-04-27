const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(findTheAverage(myNumbers));

function findTheAverage(inputArray) {
  const sumNumbers = inputArray.reduce((a, b) => {
    return a + b / 2;
  });
  return sumNumbers;
}
