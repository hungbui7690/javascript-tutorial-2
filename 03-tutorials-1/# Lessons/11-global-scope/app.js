/*
  Global Scope vs Local Scope
  - any variable outside code block {} is said to be in Global Scope
  - can be access anywhere in the program
  - Gotchas : name collisions when the code grows >> easily modify by mistake

*/

let name = 'bobo'
name = 'peter'

function calculate() {
  // some other code...
  console.log(name)
  name = 'orange'

  // *** comment the inner() >> run >> then uncomment >> then run
  function inner() {
    name = 'APPLE'
    console.log(`this is from inner function ${name}`)
  }
  inner()
}
calculate()
console.log('after calculate(): ', name) // name collision

// *** this also change the global variable >> easy to have name collisions
if (true) {
  // some other code...
  console.log(name)
  name = 'pants'
}

console.log(`after <IF>, name is ${name}`)
