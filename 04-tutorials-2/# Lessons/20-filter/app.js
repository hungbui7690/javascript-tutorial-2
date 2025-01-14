// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
]

/////////////////////////////////
const youngPeople = people.filter(function (person) {
  return person.age <= 25
})
console.log('youngPeople', youngPeople)

/////////////////////////////////
const developers = people.filter(function (person) {
  return person.position === 'developer'
})

console.log('developers', developers)
