// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  for (let item of array) {
  
  results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

module.exports = map;
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const assertArraysEqual = function(arg) {
//   if (!arg) {
//     return (`🛑🛑🛑 🫠 Assertion Failed`);
//   } 
//   return (`✅✅✅ Assertion Passed`);
// }

// function eqArrays(arr1, arr2) {
//   let strArr1 = arr1.length;// tip by mentor to try to check for false first to eliminate options
//   let strArr2 = arr2.length;// compare length is a quick way to rule out comparison
//   if (strArr1 !== strArr2) {// if not false then moves on to for loop
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {// loop checks each index of array to see if matches with false return first
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;// other wise return true after the for loop runs through 
// }

// console.log(assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ] )));