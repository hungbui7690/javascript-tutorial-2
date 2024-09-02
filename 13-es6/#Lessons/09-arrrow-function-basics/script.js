/*
  Arrow Function === Fat Arrow Function
  - no name, always expression, assign to variable
  - no function keyword
  - "this"

*/

const sayHi = () => console.log('hello')
sayHi()

//////////////////////////
// one line of code  >> can omit {}
//////////////////////////
const double = (value) => value * 2
console.log(double(4))

//////////////////////////
// 2 params
//////////////////////////
const multiply = (num1, num2) => {
  const result = num1 * num2
  // more code...
  return result
}
console.log(multiply(3, 4))

//////////////////////////
// return objects >> need to have () >> otherwise, err >> because {} is used for object, not for function
//////////////////////////
const object = () => ({ name: 'joe', age: 25 })
const person = object()
console.log(person)

//////////////////////////
// arrow function as callback function
//////////////////////////
const numbers = [1, 2, 3, 4, 5]
const big = numbers.filter((num) => num > 2)
console.log(big)

//////////////////////////
// ***
//////////////////////////
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log('You clicked me')
})
