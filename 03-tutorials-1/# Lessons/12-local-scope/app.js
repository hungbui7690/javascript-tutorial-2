// Local Scope
// - can not be access from outside code blocks
// - use let/const

let name = 'bobo'

function calculate() {
  const name = 'john'
  const age = 25
  // code goes here
  becomesGlobal = 'global variable' // no keyword >> use var >> if we want to protect our variables >> use const/let
}

calculate()
console.log(becomesGlobal) // this can be accessed outside >> var is global

if (true) {
  const name = 'john'
}

{
  const name = 'john'
  const special = 'special'
}

console.log(special) // const/let: cannot access outside of code block

console.log(`my name is ${name} and I'm awesome`) // bobo
