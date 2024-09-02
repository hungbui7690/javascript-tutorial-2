/*
  Parameter Destructuring
  - use often when with with React (passing props)

 */

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

/////////////////////////
// Method 1
/////////////////////////
// function printPerson(person) {
//   console.log(person.first)
// }
// printPerson(bob)

/////////////////////////
// Method 2
/////////////////////////
// function printPerson(person) {
//   const { first, last, city } = person
//   console.log(first, last, city)
// }
// printPerson(bob)

/////////////////////////
// Method 3
/////////////////////////
function printPerson({ first, last, city }) {
  console.log(first, last, city)
}

printPerson(bob)
