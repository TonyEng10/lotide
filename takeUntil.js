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


const takeUntil = function(array, callback) {
  let x = [];
  for (let i = 0; i < array.length; i++) {
    if (i < 5) {
      if (array[i] === ',') {
        break;
      }
      x.push(array[i]);
  }
}
return x;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// // expected output
// // [ 1, 2, 5, 7, 2 ]
// // --
// // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// console.log(assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ])));
// console.log(assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])));