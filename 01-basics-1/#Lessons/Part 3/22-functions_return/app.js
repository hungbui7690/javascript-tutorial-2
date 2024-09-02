/*
  return
  - default undefined, shortcuts
  - everything after return line will be ignore
  - 1 inch 2.54cm

*/

///////////////////////////////////
// *** we want to convert inch to cm
///////////////////////////////////
let width = 0 // we have the values in inches
let height = 0
const wallHeight = 80

let dimensions = [width, height] // *** this looks weird at the first time >> but it just an array with 2 items
console.log(dimensions) // [0, 0] >> this is
inches

// value is an object
function calculate(value) {
  console.log(`The value in cm is: ${value * 2.54} cm`)
  return value * 2.54
  console.log('hello') // after return >> IGNORE
  console.log('hello')
  console.log('hello')
}

calculate(200) // this case, we don't need to have return
width = calculate(100) // *** this case: function need to have return
height = calculate(wallHeight)
dimensions = [width, height]

console.log(dimensions)
