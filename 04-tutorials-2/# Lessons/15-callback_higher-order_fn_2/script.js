// Callback Functions, Higher Order Functions
// we can also pass 'morning/afternoon/evening' as arguments
// but we can also do that with higher order function >> 1 higher order function + multi callbacks

//////////////////////
// higher order function: parameter needs to have callback as an argument
//////////////////////
function greet(name, cb) {
  cb() // run the callback
  const myName = 'Wayne'
  console.log(`${name}, my name is ${myName}`)
}

//////////////////////
// callbacks
//////////////////////
function morning() {
  console.log(`Good morning !!! `)
}

function afternoon() {
  console.log(`Good afternoon !!! `)
}

// *** note: pass callback as ref >> NO ()
greet('David', morning)
greet('Joe', afternoon)
