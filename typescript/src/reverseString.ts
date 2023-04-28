function reverseString(inputString: string): string {
  const addToArray = inputString.split("").reverse();
  const combineToString = addToArray.join().replace(/,/g, "");
  return combineToString;
}

const myString: string = "hello";
console.log(reverseString(myString));
