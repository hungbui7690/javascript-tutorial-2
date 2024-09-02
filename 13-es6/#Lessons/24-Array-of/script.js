/*
  Array.of ; NOT ON PROTOTYPE
  of: creates a new array instance from a variable number of arguments
  
 */

/////////////////////////
// ***
/////////////////////////
const example = ['one', 'two', 'three']
console.log(example)
console.log(example.map) // ƒ map() { [native code] }
console.log(example.from) // # not on prototype >> undefined
console.log(example.of) // # not on prototype >> undefined

/////////////////////////
// *** Array.of >> create array
/////////////////////////
const friends = Array.of('joe', 'nicky', 12, true)
console.log(friends) // ['joe', 'nicky', 12, true]

const arr1 = new Array(42)
console.log(arr1) // [empty × 42]

const arr2 = Array.of(42)
console.log(arr) // [42]
