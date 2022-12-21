const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = (arr) => {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        newArr.push(innerItem);
      }
    } else if (!Array.isArray(item)) {
      newArr.push(item)
    }
  }
  return newArr;
}

console.log(assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), ([1, 2, 3, 4, 5, 6]) )));
console.log(flatten([1, 2, [3, 4], 5, [6]]));