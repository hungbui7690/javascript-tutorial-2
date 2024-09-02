// forEach
// does NOT return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
]

people.forEach(function (item) {
  console.log(item.position.toUpperCase())
})

////////////////////////////////
// ***
////////////////////////////////
// function showPerson(person) {
//   console.log(person.position.toUpperCase())
// }
// people.forEach(showPerson); // # pass callback >> passing ref >> NO ()
