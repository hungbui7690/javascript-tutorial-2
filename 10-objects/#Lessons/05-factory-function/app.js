/*
  Factory Functions
  - use to create objects
  - in regular functions (not arrow), "this" determined by "HOW" a function is invoke (left of .)

  - now, with each object, we need to setup a function >> repeating
  - everytime we want to change, we need to modify in multi places >> not practical
    >> solution is setting up a factory function 

  *** Factory Functions >> MUST HAVE return keyword >> return {}
*/

/////////////////////////////
// (1) factory function >> return object {}
/////////////////////////////
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(`My full name is ${this.firstName} ${this.lastName}`)
    },
  }
}

/////////////////////////////
// (2) use factory function to create object
/////////////////////////////
const john = createPerson('john', 'anderson')
john.fullName()
const bob = createPerson('bob', 'sanders')
bob.fullName()
const susy = createPerson('susy', 'horns')
susy.fullName()
