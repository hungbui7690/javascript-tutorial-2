/*
  - expressions 
    - another way define a function
  - create a variable, assign to FUNCTION (not value), use var
  - diff: hoisting, use - arrow func, libraries,
*/

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2
}

const firstValue = addValues(3, 4)
const secondValue = addValues(12, 34)

/////////////////////////////////
// function expression: assign function to a variable
/////////////////////////////////
const add = function (num1, num2) {
  return num1 + num2
}

// const thirdValue = add(5, 6);
const values = [firstValue, secondValue, add(5, 6)] // at the end, these functions return just values
console.log(values)

const multiply = (num1, num2) => num1 * num2 // *** arrow function: another way to write function expression
