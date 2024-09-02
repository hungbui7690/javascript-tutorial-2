/*
  Array includes() 
  - checks if the item is in an array
  - useful in the conditional statements

  - array.includes('string')

*/

const groceries = ['milk', 'bread', 'meat']
let randomItem1 = 'lemon'
let randomItem2 = 'milk'

const isIncluded1 = groceries.includes(randomItem1) // false
const isIncluded2 = groceries.includes(randomItem2) // true
console.log(isIncluded1, isIncluded2)

//////////////////////////
// conditional statements
//////////////////////////
if (groceries.includes(randomItem2)) {
  console.log(`It's in the list`)
}
