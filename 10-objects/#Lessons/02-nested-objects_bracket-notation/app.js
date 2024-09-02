const age = 28 // (1)

const person = {
  name: 'Joe',
  age, // (2) age : age >> es6 >> use variable as value >> when key and value are same, we can omit one
  married: true,
  siblings: ['Anna', 'Peter'],
  greet: function () {
    console.log(`Hello, my name is ${name}`)
  },
  // es6: instead of >> sayHello : function(name){} >> we use the one below
  sayHello(name) {
    console.log(`Hello, my name is ${name}`)
  },
  // nested object
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',
  'random value': 'random',
}

console.log(person.job.title)
console.log(person.job.company.address)
console.log(person.work) // access property that does not exist >> undefined
// console.log(person.work.company) //err >> undefined.company
console.log(person.age)

console.log('//// zzzz ////')

/////////////////////////////
// cannot access to random-value when using dot notation >> can only use bracket notation
/////////////////////////////
let random = 'random-value'
console.log(person['random-value'])
console.log(person['random value'])
console.log(person[random])

/////////////////////////////
// this will be used in react >> not always, but we need to know
/////////////////////////////
random = 'age'
console.log(person[random])
