/*
  Null vs Undefined
  - both represent "no value"

  - undefined: "javascript cannot find value for this"
  - null: developer sets the value to "no value" 

  - variables without value: 
  - missing function arguments >> function that has parameters, but we don't pass the values when invoking >> undefined
  - missing object properties >> if we try to access the properties that don't exist in object >> undefined

*/

let num1 = 20 + null // 20 + 0
console.log(num1) // 20

let num2 = 20 + undefined // 20 + undefined
console.log(num2) // NaN
