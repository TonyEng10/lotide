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

const without = function (ar1, ar2) {
  // function has 2 parameters, first one is array second one is what u want to remove from array
  //  need to loop through array
  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      if (ar1[i] === ar2[j]) {
        ar1.splice([i], 1)
        return ar1// console.log(`Both arrays have the number: ${arr2[j]}`);
      }

    }
    // for (let j = 0; j < arr1[i]; j++) {
    // console.log("world");
  }
}
console.log(without([1, 2, 3], [1]));
// console.log(assertArraysEqual(eqArrays(without([1, 2, 3], [1])), ([2, 3])));
// if it matches then remove from array
//  
// // }
// console.log(without([1, 2, 3], [1]));
// console.log(without([1, 2, 3, 6, 8, 200], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.splice(3, 1);
console.log(arr);*/
// const words = ["hello", "world", "lighthouse"];
// const newWords = [...words]
// without(newWords, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(words);
// console.log(newWords);