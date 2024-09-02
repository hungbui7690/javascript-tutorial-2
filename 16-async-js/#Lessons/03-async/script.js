/*
  Asynchronous
  - to make like the recipe, we must use async (setTimeout())
    + boil water in 10 mins
      - chop onion
      - chop carrots
    + add carrots boil for 5 mins
    + add onion boil for 5 mins

  ***  NOTES: BROWSER API provides these methods (not JS) >> Fetch Data, Get Geolocation, setTimeout, setTimer, etc.
*/

////////////////////////////////////////
/*
  Async === setTimeout() >> now, we can chop carrots and onions in the waiting time >> when JS see setTimeout() method >> it will handle that method to Browser, and Browser will exec the callback that JS gave >> it will wait until JS finishes then run the callback fn
*/
////////////////////////////////////////
function boilWater(time) {
  console.log(`... boiling`)

  // *** use setTimeout() >> async >> run in background
  setTimeout(() => {
    console.log(`... done`)
  }, time)
}

////////////////////////////////////////
// (1) Example 1: 10s >> this is the minimum time to wait before the callback inside setTimeout() to run >> if we have 100_000 lines of CHOP CARROTS, then we must wait for long time >> so, we need to wait for finish boilWater() then run the callback in setTimeout()
////////////////////////////////////////
// boilWater(10000)
// console.log(`Chop Carrots`)
// console.log(`Chop Onion`)

////////////////////////////////////////
// (2) Example 2
////////////////////////////////////////
// boilWater(10000)
// console.log(`Chop Carrots`)
// console.log(`Chop Onion`)

// // *** this is not async >> cannot run in the background
// for (let i = 0; i < 15000; i++) {
//   console.log(`..... Busy`)
// }

//////////////////////////////////////////////////////////////
// (3) Example 3: though the time = 0, the callback in setTimeout() still runs after Chop Carrots
// boilWater(0)
// console.log(`Chop Carrots`)
