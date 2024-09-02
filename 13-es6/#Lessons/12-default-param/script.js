const john = 'john'
const peter = 'peter'

// regular fn
function sayHi(person = 'david') {
  console.log(`Hi ${person}`)
}

// arrow fn
const sayHello = (person = 'david') => console.log(`Hello ${person}`)

sayHi() // default = david if there's no param >> prevent function from breaking, because if there's no default param, returns undefined
sayHello(peter) // peter
