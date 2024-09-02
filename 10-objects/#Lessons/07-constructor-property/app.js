/*
  Constructor Property
  - all objects in JS:
    + have access to "constructor property" that points to a constructor function that created it. 
  - built-in constructor functions
  - arrays and Functions are objects in JS

*/

////////////////////////////
// constructor function
////////////////////////////
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    )
  }
}

const john = new Person('john', 'sanders')
console.log(john.constructor) // return function Person() above

// (1) object
const bob = {}
console.log(bob.constructor) // f Object() >> constructor Object that created objects for us

// (2) array
const list = []
console.log(list.constructor) // f Array()

// (3) function
const sayHi = function () {}
console.log(sayHi.constructor) // f Function()

// (4)
const susy = new john.constructor('susy', 'carpenter') // can create new instance from same constructor function
susy.fullName()
