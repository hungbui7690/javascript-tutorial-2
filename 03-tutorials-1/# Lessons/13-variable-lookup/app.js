/*
  Variable Lookup
  - {} - code block
  - check local first: if exists, then use >> if not exist, lookup

*/

const globalNumber = 5

function add(num1, num2) {
  // const globalNumber = 20;
  const result = num1 + num2 + globalNumber // check local >> not here >> lookup to find
  function multiply() {
    // const globalNumber = 100;
    const multiplyResult = result * globalNumber
    console.log(multiplyResult)
  }
  console.log(multiplyResult)

  multiply()
  return result
}

console.log(add(3, 4))
