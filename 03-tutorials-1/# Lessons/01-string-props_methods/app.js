// String properties and methods
// wrapper String Object, don't memorize methods

let firstNames = ['joe', 'nick', 'shane', 'kylian', 'susy']
const lastNames = ['sanders', 'malone', 'jasper']

// concat
const allNames = firstNames.concat(lastNames)
console.log(allNames)

// reverse: MUTATE
console.log('reverse', allNames.reverse())

// unshift: add to beginning
allNames.unshift('anna')
console.log('unshift', allNames)

// shift: remove first item
allNames.shift()
console.log('shift', allNames)

// push
allNames.push('jason')
console.log('push', allNames)

// pop
const popped = allNames.pop()
console.log('pop', popped, allNames)

// slice: returns new array >> NOT MUTATE
const newNames = allNames.slice(0, 2)
console.log(newNames)

////////////////////////
// *** splice(start, deleteCount): MUTATE
////////////////////////
const specificNames = allNames.splice(0, 3)
console.log('splice', specificNames, allNames)
