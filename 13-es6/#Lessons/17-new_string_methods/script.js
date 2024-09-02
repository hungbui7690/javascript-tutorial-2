/* 
  New String Methods
  - startsWith(), endsWith() >> case sensitive
  - includes(), repeat()
*/

const person = 'Peter Smith'
const employee = '23456-EMP-PETER-SMITH'
const manager = '23456-MAN-JOHN-DOE'

///////////////////////
// startsWith()
///////////////////////
console.log(person.startsWith('Pet')) // true
console.log(person.startsWith('peter')) // false >> case sensitive

///////////////////////
// startsWith() 2nd Parameter: stating position
///////////////////////
console.log(employee.startsWith('EMP', 6)) // true

///////////////////////
// endsWith()
///////////////////////
console.log(manager.endsWith('DOE')) // true

///////////////////////
// endsWith() 2nd param
///////////////////////
console.log(manager.endsWith('MAN', 9)) // true >> count from right to left

///////////////////////
// includes()
///////////////////////
console.log(employee.includes('PETER')) // true
console.log(employee.includes('pETER')) // false

///////////////////////
// repeat()
///////////////////////
const multiplyPeople = (person, amount = 5) => person.repeat(amount)

const people = multiplyPeople(person, 3)
console.log(people)
