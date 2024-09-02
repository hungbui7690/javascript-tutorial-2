/*
  Array.from: NOT ON PROTOTYPE
  - returns real array "from array-like object" with a length property or an iterable object
  - turns array-like/ish into array - string, NodeList, set

  - Array.from(array-like-object, callback)

 */

//////////////////////////
// *** Array.from(array-like, callback)
//////////////////////////

const arr1 = Array.from([1, 2, 3], (item) => {
  return item * 2
})
console.log('arr1: ', arr1)

//////////////////////////
// Array.from({length: x})
//////////////////////////

const arr2 = Array.from({ length: 4 }) // create new array with 4 items, all are undefined
console.log('arr2: ', arr2)

//////////////////////////
// Array.from({length: x}, callback)
//////////////////////////
const arr3 = Array.from({ length: 3 }, (_, i) => {
  return i
})
console.log('arr3: ', arr3)

//////////////////////////
// *** Sequence Generator
//////////////////////////

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const arr4 = range(0, 9, 3)
console.log('arr4: ', arr4)
