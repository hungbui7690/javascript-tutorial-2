/*
  Array Properties and Methods
  
*/

let names = ['john', 'bobo', 'barry', 'olga', 'ben']

// length
console.log(names.length)
console.log(names[names.length - 1]) // get last item

// concat: merge arrays
const lastNames = ['pepper', 'onion', 'banana']
const allNames = names.concat(lastNames)
console.log('concat()', allNames)

// reverse: MUTATES
// console.log('reverse', allNames.reverse())

// unshift: insert at the beginning
allNames.unshift('susy')
console.log('unshift', allNames)

// shift: remove at the beginning
allNames.shift()
allNames.shift()
allNames.shift()
allNames.shift()
console.log('shift', allNames)

// push
allNames.push('susy')
console.log('push', allNames)

// pop
allNames.pop()
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log('pop', allNames)

// slice
const newNames = allNames.slice(0, 2)
console.log(newNames)

// splice - MUTATES original array
const specificNames = allNames.splice(0, 3)
console.log(specificNames)
console.log(allNames)
