// Callback Functions, Higher Order Functions
// *** This is the case when callback receive parameter >> inside the callback, not at Higher Order Function

//////////////////////
// higher order
//////////////////////
function greet(name, cb) {
  const myName = 'John'
  console.log(`${cb(name)}, my name is ${myName}`) // # callback take argument
}

//////////////////////
// callback
//////////////////////
function evening(name) {
  return `Good evening ${name.toUpperCase()}`
}

function afternoon(name) {
  return `Good afternoon ${name.toUpperCase()}`
}

greet('Dave', evening)
greet('Dan', afternoon)
