/*
  Objects Destructuring

 */

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

//////////////////////////
// Old Method
//////////////////////////
const firstName = bob.first
const lastName = bob.last
const sister = bob.siblings.sister
console.log(firstName, lastName, sister)

//////////////////////////
// New Method
//////////////////////////
const { first, last, city, zip } = bob // # Note: left vars must match with the properties in object
console.log(first, last, city, zip) // no "zip" >> undefined

//////////////////////////
// change property name >> use alias
//////////////////////////
const jason = {
  first: 'jason',
  last: 'staham',
  city: 'chicago',
  siblings: {
    sister: 'tina',
  },
}

const {
  first: fName, // change to lName
  last: lName,
  siblings: { sister: sis }, // siblings > sister : change to sis
} = jason
console.log(fName, lName, sis)
