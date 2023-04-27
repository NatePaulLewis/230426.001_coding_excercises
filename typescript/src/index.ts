function findTheAverage(inputArray: number[]): number {
  const averageNumbers = inputArray.reduce((a, b) => {
    return a + b / 2;
  });
  return averageNumbers;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(findTheAverage(numbers));
