const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 🫠 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const resto = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const findKey = function(obj, callback) {
  for (const key in obj) {
    // console.log(obj[key]);
    if (callback(obj[key])) {
    return (key);
    }
  }
  }

// findKey(resto);
// obj[key]["stars"] nested object need way to find. very import was obj[key]
// const customFunction = function (x) {
//   return x.stars === 2
// }
const result = findKey({
"Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
console.log(result);

console.log(assertEqual(result, "noma"));