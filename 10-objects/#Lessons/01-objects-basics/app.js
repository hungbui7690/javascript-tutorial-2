/*
  Objects Basic
  - Objects: collection of key (property name) and value pairs
  - Property values can be strings, numbers, booleans, arrays, and function. 
    > However if the property value is a function it's called a method 

  - Object Literal Syntax: {}
  - Dot Notation
*/

// Example of an object >> using object literal
const person = {
  name: 'Joe',
  age: 25,
  married: true,
  siblings: ['Anna', 'Peter'],
  // option 1
  greet: function () {
    console.log(`Hello, my name is ${name}`)
  },
  // option 2: shorthand >> remove ":function" keyword
  sayHello(name) {
    console.log(`Hello, my name is ${name}`)
  },
}
console.log(person)
console.log(person.name)

////////////////////////////
console.log('=== 1 ===')
// assign to variable
const name = person.name
console.log(name)

////////////////////////////
console.log('=== 2 ===')
// change value in the object
person.age = 60
console.log(person)

////////////////////////////
console.log('=== 3 ===')
// add property to object
person.city = 'chicago'
console.log(person)

////////////////////////////
console.log('=== 4 ===')
// delete property
// delete person.siblings
const deleteState = delete person.siblings // return true/false
console.log(deleteState) // true/false
console.log(person)
