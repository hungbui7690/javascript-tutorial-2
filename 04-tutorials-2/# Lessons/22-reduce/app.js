/**
 * reduce
 *  - reduce to single value (number, array, object ...)
 *  - 1st parameter = acc = total of all calculations
 *  - 2nd parameter = cur = current iteration/value
 */

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
]

/////////////////////////////////
// 2 parameters for the callback + initial value (can be number, {}: empty object, '': empty string, []: empty array...)
/////////////////////////////////
// const total = people.reduce((acc, cur) => {
//   console.log(acc, cur)
// }, 0)

/////////////////////////////////
// must have return acc >> otherwise, undefined
/////////////////////////////////
// const total = people.reduce((acc, cur) => {
//   console.log(acc, cur)

//   return acc
// }, 0)

/////////////////////////////////
// ***
/////////////////////////////////
const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`)
  console.log(`current money : ${currItem.salary}`)
  acc += currItem.salary
  return acc
}, 500)
console.log(total)
