// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 🫠 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

if (keys1.length !== keys2.length) {
  return false;
}
for (let key of keys1) {
  if (Array.isArray(object1[key]) & Array.isArray(object2[key])) {//this was the last thing added to try and eqArrays in check
    return eqArrays(object1[key], object2[key]);// line 17-19 can be adjusted or deleted 
  }//
  if (object1[key] !== object2[key]) {
    return false;
  }

}
return true;
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // eqObjects(cd, dc); // => true
// // assertEqual(eqObjects(cd, dc), true); // => true
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false); // => false
// console.log(eqObjects(cd, cd2)); // => false
// console.log("test", cd.d);
// console.log(eqArrays(cd.d, dc.d))
// console.log(assertEqual(eqArrays(cd.d, dc.d)), true);

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