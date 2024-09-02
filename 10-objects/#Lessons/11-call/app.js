/*
  call 
  - run instantly
  - arguments: list of items

*/

/////////////////////////
// ***
/////////////////////////
const john = {
  name: 'john',
  age: 25,
  greet: function () {
    console.log(this)
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`)
  },
}

const susan = {
  name: 'susan',
  age: 42,
}

john.greet()
// susan.greet() // fail because susan does not have greet()

/////////////////////////
console.log('///////////')
/////////////////////////
function greet() {
  console.log(this)
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`)
}
greet() // window object >> since there's nothing on the left side of the dot

/////////////////////////
console.log('///////////')
/////////////////////////

const secondGreet = john.greet // copy function from john
secondGreet() // *** just regular function call >> window

/////////////////////////
// *** call()
console.log('///////////')
/////////////////////////
greet.call(john) // john
greet.call(susan) // susan
greet.call({ name: 'peter', age: 21 }) // peter

/////////////////////////
console.log('///////////')
/////////////////////////
john.greet.call(susan) // susan

/*
 *** we can create function outside of object >> everytime we want to use, just need to use call()
 */
