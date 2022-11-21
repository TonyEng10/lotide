// const eqArrays = require('../eqArrays');

const assertArraysEqual = function(arg) {
  if (!arg) {
    return (`🛑🛑🛑 🫠 Assertion Failed`);
  } 
  return (`✅✅✅ Assertion Passed`);
}
// eqArrays([1, 2], [1, 2]);
 
module.exports = assertArraysEqual;

// console.log(assertArraysEqual(eqArrays([1, 3], [1, 2])));

// console.log(eqArrays([1, 3], [1, 2]));
// console.log(eqArrays([1, 2], [1, 2]));
