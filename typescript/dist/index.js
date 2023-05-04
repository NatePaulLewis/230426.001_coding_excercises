"use strict";
const tryThisString = "Hi my name is nathanael lewis";
const initializeFunction = reverseSTring(tryThisString);
console.log(initializeFunction);
function reverseSTring(inputString) {
    const addLetters = [];
    for (let letter of inputString) {
        addLetters.push(letter);
    }
    const onReverse = addLetters.reverse().join("");
    return onReverse;
}
//# sourceMappingURL=index.js.map