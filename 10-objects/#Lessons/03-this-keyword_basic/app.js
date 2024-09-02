/*
  "this" keyword
  - this: point to the left of the dot
 */

//////////////////////////////
// Scenario 1: everytime we create an object, we need to do the same as below >> just need to change the values >> DRY
//////////////////////////////
const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    console.log(`My full name is John Anderson`)
  },
}

const bob = {
  firstName: 'bob',
  lastName: 'sanders',
  fullName: function () {
    console.log(`My full name is Bob Sanders`)
  },
}

john.fullName()
bob.fullName()

//////////////////////////////
// Scenario 2: use param
//////////////////////////////
// const john = {
//   firstName: 'john',
//   lastName: 'anderson',

//   // ***
//   fullName(name) {
//     console.log(`My full name is ${name}`)
//   },
// }

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName() {
//     console.log(`My full name is Bob Sanders`)
//   },
// }

// john.fullName('John Anderson')
// bob.fullName()

//////////////////////////////
// Scenario 3: "this" keyword
//////////////////////////////
// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName() {
//     console.log(this) // {firstName: 'john', lastName: 'anderson', fullName: ƒ}
//     console.log(`My full name is ${this.firstName} ${this.lastName}`) // My full name is john anderson
//   },
// }

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName() {
//     console.log(this) // {firstName: 'bob', lastName: 'sanders', fullName: ƒ}
//     console.log(`My full name is ${this.firstName} ${this.lastName}`) // My full name is bob sanders
//   },
// }

// john.fullName() // always point to the left of the dot >> this = john
// bob.fullName() // this = bob
