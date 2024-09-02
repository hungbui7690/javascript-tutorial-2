/*
  for-in: 
  - iterate over OBJECT PROPERTIES
  - NOT advised to use on arrays, especially if the order is important
  

  *** objects : for-in
      array   : for-of

 */

const person = {
  name: 'john',
  age: 25,
  status: 'student',
}

for (const propertyName in person) {
  console.log(`${propertyName} : ${person[propertyName]}`) // ## must use bracket notation
}
