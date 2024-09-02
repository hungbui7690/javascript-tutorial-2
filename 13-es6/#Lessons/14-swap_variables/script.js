/*
  Swap Variable
  - swap using destructuring

 */

let first = 'apple'
let second = 'orange'

/////////////////////////////
// Old Method: use temp variable
/////////////////////////////
let temp = second
second = first
first = temp
console.log(first, second)

/////////////////////////////
// New Method: destructuring
/////////////////////////////
;[first, second] = [second, first]
console.log(first, second)
