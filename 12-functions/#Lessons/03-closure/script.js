/*
  Closure: 
  - is the function that return function
  - gives us an access to outer function's scope from an inner function
  - make private variables with closure

*/

///////////////////////////////
// intro
///////////////////////////////
// function outer() {
//   function inner() {
//     console.log(`hello there, secret is: `)
//   }
//   return inner
//   inner() // *** after return, NOT WORK
// }

// // invoke inner() >> method 1
// outer()()

// // invoke inner() >> method 2
// const inner = outer()
// inner()
// console.log(inner) // ƒ inner() { console.log(`hello there, secret is: `) }

///////////////////////////////
// *** with variable
///////////////////////////////
function outer() {
  let privateVar = 'secret' // *** outer variable

  function inner() {
    console.log(`hello there, secret is: ${privateVar}`) // # can access outer variable
  }
  return inner
  inner()
}

const inner = outer()
inner() // # the benefit of closure is though we invoke here, we still can access to "privateVar"
