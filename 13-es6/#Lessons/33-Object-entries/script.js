/*
  3 methods to convert objects into arrays: 
  
  (1) Object.keys() >> convert property names into array
  (2) Object.values() >> convert property values into array
  (3) Object.entries() >> convert both

*/

const person = {
  name: 'john',
  age: 25,
  status: 'student',
}

//////////////////////////////////////
// Object.entries()
//////////////////////////////////////
const entries = Object.entries(person)
console.log('entries: ', entries) // [Array(2), Array(2), Array(2)]

//////////////////////////////////////
// map
//////////////////////////////////////
console.log('////////////////////////')

const result = entries.map((item) => {
  // console.log('>> item: ', item)
  const [key, value] = item
  // console.log(key, value)
  return key
})
console.log('map: ', result) // # only keys

//////////////////////////////////////
// for-of: use for array
//////////////////////////////////////
console.log('////////////////////////')

for (const [key, value] of entries) {
  console.log('for-of: ', key, value)
}
