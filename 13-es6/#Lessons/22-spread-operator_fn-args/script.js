/*
  Spread Operator - Function Arguments

*/

console.log(Math.max(4, 5, 7, 33, 22, 88)) // sometimes, we don't know how many elements in our array

///////////////////////////
// ***
///////////////////////////
const numbers = [33, 254, 34, 33, 22, 11, 99]
console.log(Math.max(numbers)) // # NaN
console.log(Math.max(...numbers)) // spread operator >> 254

///////////////////////////
// ***
///////////////////////////
const john = ['john', 'sanders']

const sayHello = (firstName, lastName) => {
  console.log(`Hello, ${firstName} ${lastName}`)
}

sayHello(...john)
