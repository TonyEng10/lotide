# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tonyeng10/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns [0] of array
* `function2(tail)`: returns everything other than [0] of array
* `function3(middle)`: returns middle of array if odd lengthen array and middle 2 elements if even
* `function4(takeUntil)`: returns array up to a certain point
* `function5(without)`: returns array without certain elements determined
* `function6(map)`: lists value for every element of array
* `function7(letterPositions)`: returns index position of letter in string
* `function8(findKey)`: returns each key in object
* `function9(findKeyByValue)`: finds key but inputing value 
* `function10(eqArrays)`: compares arrays
* `function11(eqObjects)`: compares objects
* `function12(assertEqual)`: asserts on actual vs expected as test
* `function13(assertArraysEqual)`: asserts on arrays
* `function14(countLetters)`: counts how many letters show up in string and puts in object
* `function15(countOnly)`: counts item in object