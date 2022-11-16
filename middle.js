function eqArrays(arr1, arr2) {
  let strArr1 = arr1.length;
  let strArr2 = arr2.length;
  if (strArr1 !== strArr2) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arg) {
  if (!arg) {
    return (`🛑🛑🛑 🫠 Assertion Failed`);
  }
  return (`✅✅✅ Assertion Passed`);
}

const middle = function (array) {
  //checks array and outputs the middle elements. 
  //odd number array only the middle and even number array the middle 2 elements
  //need to loop through array somehow
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return array.splice(Math.floor(array.length / 2), 1);
  }
  if (array.length % 2 === 0) {
    return array.splice((Math.floor(array.length / 2) - 1), 2);
  }
}
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
console.log(middle([1]));

console.log(assertArraysEqual(eqArrays(middle(([1, 2, 3, 4, 5])), [3])));