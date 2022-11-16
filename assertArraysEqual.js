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

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays) {
    return (`🛑🛑🛑 🫠 Assertion Failed`);
  } 
  return (`✅✅✅ Assertion Passed`);
}

// 

console.log(assertArraysEqual(eqArrays([1, 3], [1, 2])));