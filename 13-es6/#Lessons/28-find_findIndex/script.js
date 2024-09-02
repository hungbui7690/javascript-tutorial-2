/*
  find - findIndex - every - some

  - find: get specific item

  - findIndex: get index of the item

 */

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' },
]

////////////////////////////
// filter(): return array
////////////////////////////
const anna1 = people.filter((person) => person.name === 'anna')
console.log('filter: ', anna1)
console.log(anna1[0].name)
console.log(anna1[0].id)

////////////////////////////
// find(): return single item >> if not match, return "undefined"
////////////////////////////
const anna2 = people.find((person) => person.name === 'anna')
console.log('find: ', anna2)

////////////////////////////
// findIndex(): return the index of that item
////////////////////////////
// (1) find the index
const annaIndex = people.findIndex((person) => person.id === 3)
console.log('findIndex: ', annaIndex)

// (2) remove using index + slice()
const newPeople = people.slice(0, annaIndex) // remove anna
console.log(newPeople)
