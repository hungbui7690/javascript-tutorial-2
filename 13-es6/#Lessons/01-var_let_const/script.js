/*
  var, let, const 
  - define, update, redefine
  - const can not mutate primitive type

*/

/////////////////////////////////
// var: in window object
/////////////////////////////////
var number = 100 // define
console.log('var define: ', number)

number = 200 // update
console.log(number)

var number = 'orange' // ## re-define
console.log('var after re-define: ', number)

/////////////////////////////////
// let: can update, cannot re-define
/////////////////////////////////
let amount = 100 // define
console.log(amount)

amount = 200 // update
console.log(amount)

// let amount = 'orange' // ## error >> cannot re-define

/////////////////////////////////
// const: cannot update, cannot re-define
/////////////////////////////////
const total = 100
// total = 200 // # error

/////////////////////////////////
// const: with ref type, can mutate values, but cannot re-assign
/////////////////////////////////
const person = { name: 'bob' }
person.name = 'john'
console.log(person.name)

// person = { age: 23} // # error
