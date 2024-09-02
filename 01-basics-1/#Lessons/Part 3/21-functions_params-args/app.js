/*
  - params 
    > when declare/define
    > placeholders, local vars
  - arguments 
    > when invoke/call/run
    > use vars/values, multiple params, undefined

*/

//////////////////////////////////
// repeat >> DRY
//////////////////////////////////
// function greetBob() {
//   console.log('Hello there Bob')
// }

// function greetSusy() {
//   console.log('Hello there Susy')
// }

// function greetAnna() {
//   console.log('Hello there Anna')
// }

//////////////////////////////////
// parameter >> avoid redundant
//////////////////////////////////
const bob = 'Bob'
const susy = 'Susy'
const anna = 'Anna'

// params
function greet(name, second) {
  console.log(second)

  console.log('Hello there ' + name)
}

/////////////////////////////////
// call/invoke
/////////////////////////////////
// args: greet bob
greet(4)
// greet anna
greet(anna, 'Bob')
// greet susy
greet('Susy')
