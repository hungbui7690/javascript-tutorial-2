/*
  3 methods to convert objects into arrays: 
  
  (1) Object.keys() >> convert property keys into array
  (2) Object.values() >> convert property values into array
  (3) Object.entries() >> convert both

*/

const person = {
  name: 'john',
  age: 25,
  status: 'student',
}

// Object.keys()
const keys = Object.keys(person)
console.log(keys) // ['name', 'age', 'status']
