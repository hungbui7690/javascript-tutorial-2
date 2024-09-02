/*
  IIFE: Immediately Invoked Function Expression
  - older Approach - New = Modules
  - simple approach to avoid global scope pollution 
    >> no need to create variables in global scope
  - good way to protect variables scope 

    *** Global Namespace, Extra Steps

*/

//////////////////////////////
// normal function >> global scope pollution
//////////////////////////////

const num1 = 30
const num2 = 50

function add() {
  console.log(`The result is: ${num1 + num2}`)
}
add()

//////////////////////////////
// iife >> no need to create variables in global scope
//////////////////////////////
;(function () {
  const num3 = 30
  const num4 = 50
  console.log(`The result is: ${num3 + num4}`)
})()

//////////////////////////////
// pass arguments
//////////////////////////////
;(function (num3, num4) {
  console.log(`The result is: ${num3 + num4}`)
})(300, 400)

//////////////////////////////
// return / assign to variable
//////////////////////////////
const result = (function (num3, num4) {
  console.log(`The result is: ${num3 + num4}`)
  return num3 + num4
})(300, 400)

console.log(result)
