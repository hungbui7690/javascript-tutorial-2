/*
  Rest Operator: 
  - gathers/collects the items >> opposite with spread operator
  - must the placed at the end of the array, object

*/

///////////////////////////
// Arrays
///////////////////////////
const fruits = ['apple', 'orange', 'lemon']
const [first, second, ...rest] = fruits // ## ...rest must be at the end of the array
console.log(first, rest)

///////////////////////////
// Objects
///////////////////////////
const person = { name: 'bob', lastName: 'smith', job: 'developer' }
const { job, ...others } = person // ## at the end of the object
console.log(job, others)

///////////////////////////
// Functions
///////////////////////////
const getAvg = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  let total = 0
  for (const score of scores) {
    total += score
  }
  console.log(`${name}'s avg score is ${total / scores.length}`)
}

getAvg('john', 78, 33, 44, 55)

const scoresBob = [23, 44, 55, 33, 19]
getAvg('bob', ...scoresBob)
