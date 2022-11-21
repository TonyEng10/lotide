// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 🫠 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

const findKeyByValue = function(arg, arg2) {
  for (let genre in arg) {
    if (bestTVShowsByGenre[genre] === arg2) {// tip was to do bracket notation on genre to get key to populate
      return genre;
    }
  }
};

module.exports = findKeyByValue;

//  console.log("testing", Object.keys(bestTVShowsByGenre));
//  console.log("testing2", bestTVShowsByGenre.key);
//  findKeyByValue(bestTVShowsByGenre);
//  console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);