const tryThisString: string = "Hi my name is nathanael lewis";

const initializeFunction = reverseSTring(tryThisString);
console.log(initializeFunction);

function reverseSTring(inputString: string): string {
  const addLetters: string[] = [];

  for (let letter of inputString) {
    addLetters.push(letter);
  }
  const onReverse = addLetters.reverse().join("");
  return onReverse;
}
