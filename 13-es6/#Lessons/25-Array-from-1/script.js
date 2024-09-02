/*
  Array.from: NOT ON PROTOTYPE
  - returns real array "from array-like object" with a length property or an iterable object
  - turns array-like/ish into array - string, NodeList, set

  - Array.from(array-like-object, callback)

 */

//////////////////////////
// ***
//////////////////////////
const udemy = 'udemy'
console.log(Array.from(udemy)) // ['u', 'd', 'e', 'm', 'y']

const num = 32
console.log(Array.from(num)) // []

const joe = {
  name: 'joe',
}
console.log(Array.from(joe)) // []

//////////////////////////
// ***
//////////////////////////
function countTotal() {
  console.log(arguments) // array-like, but not real array >>  [33, 44, 55, 66, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  let argsArr = Array.from(arguments) // convert to array
  const total = argsArr.reduce((acc, cur) => {
    acc += cur
    return acc
  }, 0)
  return total
}
console.log(countTotal(33, 44, 55, 66)) // 198

//////////////////////////
// *** Array.from(array-like, callback)
//////////////////////////
console.log('//////1//////')

const arr = Array.from([1, 2, 3], (item) => {
  return item * 2
})
console.log('arr: ', arr)
