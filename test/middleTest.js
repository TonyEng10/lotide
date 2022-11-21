const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("#middle", () => {

  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

});

// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2]));
// console.log(middle([1]));

// console.log(assertArraysEqual(eqArrays(middle(([1, 2, 3, 4, 5])), [3])));