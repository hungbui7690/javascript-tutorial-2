/*
  Spread Operator: 
  - Allow an iterable to spread/expand individually inside receiver
  - Split into single items and COPY them >> ko mutate 
  - ES2018 - ES8 >> can use for object

*/

const person = {
  name: 'john',
  job: 'developer',
}

// update property + change "name"
const newPerson1 = { ...person, city: 'Chicago' }
newPerson1.name = 'Katrina'
console.log(newPerson1)
console.log(person)

// update property + change "name" at the same time
const newPerson2 = { ...person, city: 'Chicago', name: 'Xander' }
console.log(newPerson2)
console.log(person)
