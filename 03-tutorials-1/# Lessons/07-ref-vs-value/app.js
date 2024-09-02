/*
  Reference vs Value
  - Primitive Data Types: String, Number, Symbol, Boolean, Undefined, Null,
  - Reference Type: Arrays, Functions, Objects
  - typeof

  - when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value
  - when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

*/

////////////////////////////
// PRIMITIVES
const num1 = 1
let num2 = num1
num2 = 7

console.log('num1', num1)
console.log('num2', num2)

////////////////////////////
// REF: change is made on person2 >> then person1 will change as well
let person1 = { name: 'bob' }
let person2 = person1
person2.name = 'susy'

console.log('person 1', person1)
console.log('person 2', person2)

////////////////////////////
// COPY OBJECT
person2 = { ...person1 } // copy to new object
person2.name = 'anna'

console.log('Person 1', person1)
console.log('Person 2', person2)
