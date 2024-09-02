/*
  [1] Soup Recipe:
  - chop onion
  - chop carrots
  - boil water in 10 mins
  - add carrots boil for 5 mins
  - add onion boil for 5 mins

  [2] the previous recipe is not the optimized way:
  - we can boil water
    > but in the waiting time, we can chop carrots & onions

  - boil water in 10 mins, we can
    + chop onion
    + chop carrots
  - add carrots boil for 5 mins
  - add onion boil for 5 mins

*/

/////////////////////////////
// (1) Example 1: Soup Recipe
/////////////////////////////
// function boilWater(time) {
//   console.log(`... boiling`)
//   for (let i = 0; i < time; i++) {
//     console.log(`...... still not done`)
//   }
//   console.log(`... done`)
// }

// // (2)
// console.log(`Chop Onion`)
// console.log(`Chop Carrots`)
// boilWater(10000)
// boilWater(5000)
// boilWater(5000)

/////////////////////////////
// (1) Example 2: Optimized Method >> But not work
/////////////////////////////
function boilWater(time) {
  console.log(`... boiling`)
  for (let i = 0; i < time; i++) {
    console.log(`...... still not done`)
  }
  console.log(`... done`)
}

// (2) though we placed everything at the correct order, but we don't get the result we want >> it means that we CANNOT chop the carrots and onions when waiting for water to boiled >> boil water does not run in the background
boilWater(10000)
console.log(`Chop Carrots`)
boilWater(5000)
console.log(`Chop Onion`)
boilWater(5000)
