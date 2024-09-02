/*
  Destructuring
  - faster/easier way to access/unpack values from arrays 
  - objects into variables
 */

///////////////////////////
// Old Method
///////////////////////////
const fruits = ['oranges', 'banana', 'lemon']
const friends = ['peter', 'john', 'bob', 'anna', 'david']

const orange = fruits[0]
const banana = fruits[1]
console.log(orange, banana)

///////////////////////////
// New Method: destructuring
///////////////////////////
const [john, peter, bob, anna, david, susan] = friends
console.log(john, peter, bob)
console.log(susan) // # undefined

const [first, , third] = friends // ~~ skip element
console.log(first, third)
