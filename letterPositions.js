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


const letterPositions = function(sentence, itemsToCount) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
   let item = sentence[i]
    if (item !== " ") {
      if (results[item]) {
        results[item].push(i);
      } else {
        results[item] = [i];
      }
    };
  }
  return results;
}
// if function works then h : [0] e: [1] l:[2] o: [4]
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"))