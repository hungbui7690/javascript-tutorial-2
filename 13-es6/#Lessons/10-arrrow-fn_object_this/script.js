/*
  "this" in Arrow Function

  - regular function: 
    > 'this' refers to parent, left of the dot

  - arrow function : 
    > refer to it's surrounding scope
*/

/////////////////////////
// Problem: object: function inside function >> "this" not work in the regular way
/////////////////////////
const bob = {
  firstName: 'bob',
  lastName: 'smith',

  // *** function inside function
  sayName: function () {
    setTimeout(function () {
      console.log('BOB: this: ', this) // window
      console.log(`BOB: Hello, my name is ${this.firstName} ${this.lastName}`) // undefined
    }, 1)
  },
}
bob.sayName() // window object

/////////////////////////
// Method 1
/////////////////////////
const ted = {
  firstName: 'ted',
  lastName: 'chew',
  sayName: function () {
    const self = this // *** use "self" or "that"
    setTimeout(function () {
      console.log('TED: this: ', this)
      console.log('TED: self: ', self)
      console.log(`TED: Hello, my name is ${self.firstName} ${self.lastName}`)
    }, 1)
  },
}
ted.sayName()

/////////////////////////
// Method 2
/////////////////////////
const tim = {
  firstName: 'tim',
  lastName: 'cahill',
  sayName: function () {
    // *** use arrow function
    setTimeout(() => {
      console.log('TIM: this', this)
      console.log(`TIM: Hello, my name is ${this.firstName} ${this.lastName}`)
    }, 1)
  },
}
tim.sayName()

/////////////////////////
// object: general function
/////////////////////////
const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    console.log('ANNA: this: ', this) // window
    console.log(`ANNA: Hello, my name is ${this.firstName} ${this.lastName}`) // undefined
  },
}
anna.sayName()

/////////////////////////
// object: general function
/////////////////////////
const tina = {
  firstName: 'tina',
  lastName: 'tucker',
  sayName: function () {
    console.log('TINA: this: ', this) // tina
    console.log(`TINA: Hello, my name is ${this.firstName} ${this.lastName}`) // tina
  },
}
tina.sayName()
