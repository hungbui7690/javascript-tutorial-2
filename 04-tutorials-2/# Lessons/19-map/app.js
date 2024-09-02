// map()
// RETURNS a NEW ARRAY
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
]

/////////////////////////////////////
// return just text
/////////////////////////////////////
const hello = people.map(function (person) {
  return 'hello world'
})
console.log('hello', hello)

/////////////////////////////////////
// =================================
/////////////////////////////////////
const ages = people.map(function (person) {
  return person.age + 20
})
console.log('ages: ', ages)

/////////////////////////////////////
// return object
/////////////////////////////////////
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  }
})
console.log('newPeople', newPeople)

/////////////////////////////////////
// =================================
/////////////////////////////////////
const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`
})
console.log('names', names)

document.body.innerHTML = names.join('')
