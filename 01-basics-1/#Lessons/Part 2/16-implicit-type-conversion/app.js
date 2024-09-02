// Implicit Type Conversion

const name = 'joe'
const lastName = 'jordan'
const fullName = name + ' ' + lastName
console.log(fullName)

const number = 4
const number2 = 10
const result = number + number2
console.log(result)

////////////////////////////////
// ***
////////////////////////////////
const value = name - lastName
console.log(value) // NaN

////////////////////////////////
// ***
////////////////////////////////
let number3 = 10
let number4 = 23

number4 = '23' // ***
const result2 = number3 + number4
console.log(result2) // *** convert to string >> implicit type conversion

////////////////////////////////
// *** input always return string when we select its value >> we need to convert to number if we want to have calculation
////////////////////////////////
const randomNumber = 13
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault()
  let value = document.getElementById('amount').value // <input type="number"> >> though type is number, but it still returns string
  value = parseInt(value)
  console.log('Input Value Type')
  console.log(value)
  console.log('Sum of Two Values')
  console.log(randomNumber + value)
})
