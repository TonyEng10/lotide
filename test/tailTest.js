const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  });
});
// console.log(tail(words));