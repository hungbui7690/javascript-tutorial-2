// find
// returns SINGLE instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'susy', age: 30, position: 'the boss', id: 3 },
  { name: 'anna', age: 35, position: 'the boss', id: 4 },
]
const names = ['bob', 'peter', 'susy']

/////////////////////////////
// return 'undefined' if not match
/////////////////////////////
console.log(
  names.find(function (name) {
    return name === 'zelda'
  })
)

/////////////////////////////
// FIND: return SINGLE item
/////////////////////////////
const person = people.find(function (person) {
  return person.id === 3
})
console.log(person.name)

/////////////////////////////
// FILTER: returns MULTIPLE items
/////////////////////////////
const person2 = people.filter(function (person) {
  return person.id === 3
})
console.log(person2[0].name)
