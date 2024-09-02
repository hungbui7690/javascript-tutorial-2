/*
  Objects 
  - key/value pairs  methods
  - dot notation >> there's also another way to access property: bracket notation

  - example of object:
    + a car can accelerate or stop >> it also has color, brand, engine type...
    + a person has name, lastName, edu level, married status... a person can also walk, greet, study, sleep...

*/

const person = {
  name: 'john',
  lastName: 'peters',
  age: 25,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function () {
    console.log('Hello my name is JOHN')
  },
}

person.name = 'bob'
console.log(person.name)
console.log(person.siblings[2])
person.greeting()

const age = person.age // assign property to variable
console.log(age)

/////////////////////////////////
// bracket notation
/////////////////////////////////
const subject = 'art'
const total = {}
total[subject] = 'some value' // can NOT use dot notation in this case
console.log(total)
