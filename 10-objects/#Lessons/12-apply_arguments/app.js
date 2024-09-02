/*
  Apply Arguments
  - call: run instantly 
    + arguments = list of items
  - apply: run instantly 
    + arguments = array of items

  - call(object, arg1, arg2)
    > greet.call(john, 'San Diego', 'USA')
  - apply(object, [arg1, arg2])
    > greet.apply(john, ['San Diego', 'USA'])

*/

const john = {
  name: 'john',
  age: 25,
}

const susan = {
  name: 'susan',
  age: 42,
}

//////////////////////////
// ***
//////////////////////////
console.log('//// 1 ////')

function greet() {
  console.log(this)
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`)
}

greet.apply(john) // similar to call() >> the diff is the how to setup "arguments"
greet.apply(susan)
greet.apply({ name: 'peter', age: 21 })

// //////////////////////////
// *** different between call() & apply()
//////////////////////////
console.log('//// 2 ////')

function hello(city, country) {
  console.log(this)
  console.log(`Hello, I'm ${this.name} and I live in ${city}, ${country}`)
}

console.log('>> call(): ')
hello.call(john, 'San Diego', 'USA') // # call: receive "list"
hello.call(susan, 'Chicago', 'USA')
hello.call({ name: 'peter', age: 21 }, 'Colorado', 'USA')
//////////////////////////////
console.log('>> apply(): ')
hello.apply(john, ['San Diego', 'USA']) // # apply: receive "array"
hello.apply(susan, ['Chicago', 'USA'])
hello.call({ name: 'peter', age: 21 }, ['Colorado', 'USA'])
