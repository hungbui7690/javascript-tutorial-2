/*
  - In regular functions (not arrow), "this" determined by "HOW" a function is invoke (left of .)

  defaults to global >> window
  arrow functions >> does not have its own "this" keyword >> "this" keyword points outside
*/

console.log(this) // window

/////////////////////////////
// ***
/////////////////////////////
function showThis() {
  console.log(this)
}

const john = {
  name: 'john',
  showThis,
}
const bob = {
  name: 'bob',
  showThis: showThis,
}

// *** though run the same function, but the result is different
john.showThis() // {name: 'john', showThis: ƒ}
bob.showThis() // {name: 'bob', showThis: ƒ}
showThis() // window

//////////////////////////////
console.log('/// 2 ///')
//////////////////////////////
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

btn1.addEventListener('click', showThis) // btn1
btn2.addEventListener('click', showThis) // btn2

btn2.addEventListener('click', () => {
  showThis() // window
})
