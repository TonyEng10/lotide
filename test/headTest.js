
const assertEqual = require('../assertEqual');
const head = require('../head');

// assertEqual(head([8,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// console.log(head([8,6,7]));
// console.log(head(["Hello", "Lighthouse", "Labs"]));
const assert = require('chai').assert;


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 8 for [8, 6, 7]", () => {
    assert.strictEqual(head([8, 6, 7]), 8);
  });
});