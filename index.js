const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  takeUntil: takeUntil,
  without: without,
  map: map,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  countOnly: countOnly
};