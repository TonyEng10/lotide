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


module.exports = middle;