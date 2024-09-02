/*
  var, let, const 
  - let, const: blocked scope {}
    > CANNOT access from outside of function and block
  - var: function scope 
    > CANNOT access from outside of function 
    > CAN access from outside of block

*/

//////////////////////////////
// var:
//////////////////////////////
var amount = 100

function greet() {
  // local cope
  var firstName = 'joe'
  console.log(`hello ${firstName}, amount is ${amount}`)
}
// console.log(firstName) // # error >> cannot access local variable from outside
greet()

//////////////////////////////
// var: function scope
//////////////////////////////
var total = 1000
var test = true

if (test) {
  var total = 'oranges'
}
console.log(total) // ## orange >> var is function scope >> not block scope >> can access from outside of the block

//////////////////////////////
// let/const: block scope
//////////////////////////////
let num = 1000
let flag = true

if (flag) {
  let num = 'oranges'
  let value = 999
}
// console.log(value) // # error >> can access from outside of block scope
console.log(num) // 1000
