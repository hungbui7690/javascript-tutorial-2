/*
  Constructor Functions
  - there are 2 ways to create Blue Print: 
    + Factory Functions
    + Constructor Functions (this lesson)

  - Constructor Functions
    > new keyword 
      - create new empty object
      - set "this" point to that empty object
      - no need return keyword

  - Factory Function: 
    > return object which has property name, values
    > when we want to use, invoke like normal function


  *** Constructor Function: 
      > this 
      > "new" 

*/

//////////////////////////
// factory function
//////////////////////////
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      )
    },
  }
}

//////////////////////////
// constructor function
//////////////////////////
// (1) name must be capitalized
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    )
  }
  console.log(this)
}

// (2) use >> must have "new" keyword
const john = new Person('john', 'anderson')
john.fullName()

const bob = new Person('bob', 'sanders')
bob.fullName()
