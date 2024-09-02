/*
  for-of: 

  - loops through the values of an ITERABLE OBJECTS (arrays + objects)

  - string, array, map, set, etc... (NOT OBJECT)

  - unlike forEach(), we CAN use BREAK, CONTINUE

*/

const fruits = ['apple', 'orange', 'banana', 'peach']
const longName = 'John Smith Pepper III'
let shotName = ''

//////////////////////////
// remove whitespace: continue
//////////////////////////
for (const letter of longName) {
  if (letter === ' ') continue
  shotName += letter
}
console.log(shotName)

//////////////////////////
// break
//////////////////////////
for (const fruit of fruits) {
  if (fruit === 'banana') break
  console.log(fruit)
}
