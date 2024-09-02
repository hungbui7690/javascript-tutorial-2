/*
  Hoisting: 
  - function and var declarations are hoisted 
    >> we can access to variable and function declaration before we initialize   
  
  - safer to access only after initialized

*/

///////////////////////////
// var
///////////////////////////
console.log(random) // # with var, we can access to declaration, cannot access to value >> undefined
var random = 'random'
console.log(random) // random

///////////////////////////
// *** const/let
console.log('//////1//////')
///////////////////////////

const firstName = 'john'
let lastName = 'jordan'

console.log(firstName)
console.log(lastName)

///////////////////////////
// function declaration 1
console.log('//////2//////')
///////////////////////////
hello()

console.log(hello) // # when compile, the function "declaration" will be moved to the top >> this is the reason why we can call before declaration

function hello() {
  console.log(`hello world`)
}

///////////////////////////
// function declaration 2
console.log('//////3//////')
///////////////////////////
moreComplex()

function moreComplex() {
  console.log(`${firstName} ${lastName} ${random}`)
}

///////////////////////////
// function expression
console.log('//////4//////')
///////////////////////////
// sayHi() // err >> with function "expression", it won't be hoisted to the top

const sayHi = function () {
  console.log('Hi!!!')
}

sayHi()
