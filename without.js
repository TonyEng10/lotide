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
// let arr1 = [4, 2, 3]
// let arr2 = [5, 2, 3]

const without = function (arr1, arr2) {
  // function has 2 parameters, first one is array second one is what u want to remove from array
  //  need to loop through array
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice([i], 1)
        return arr1// console.log(`Both arrays have the number: ${arr2[j]}`);
      }

    }
    // for (let j = 0; j < arr1[i]; j++) {
    // console.log("world");
  }
}

// if it matches then remove from array
//  
// }
console.log(without([4, 2, 3], [5, 2, 3]));
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.splice(3, 1);
console.log(arr);*/