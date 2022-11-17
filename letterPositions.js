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


const letterPositions = function (sentence, itemsToCount) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {// normal c loop better for finding index related info
    let item = sentence[i]// this shows the address of the sentence very important to remember. variable item was used to rep it and make the whole thing work
    if (item !== " ") {
      if (results[item]) {
        results[item].push(i);// when doing "hello" issue was when "l" showed up in results already so it was just adding 1 to it when i did +=... had to push to [] using [i]
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