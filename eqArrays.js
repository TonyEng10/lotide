const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 🫠 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  let strArr1 = arr1.length;// tip by mentor to try to check for false first to eliminate options
  let strArr2 = arr2.length;// compare length is a quick way to rule out comparison
  if (strArr1 !== strArr2) {// if not false then moves on to for loop
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {// loop checks each index of array to see if matches with false return first
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;// other wise return true after the for loop runs through 
}



eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS