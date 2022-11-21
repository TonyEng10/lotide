const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
console.log(middle([1]));

console.log(assertArraysEqual(eqArrays(middle(([1, 2, 3, 4, 5])), [3])));