/*
  Synchronous
  - JS is single thread, synchronous language 
    > run from top to bottom
    > previous line finish running, then the next line will be run
*/

// (1)
function boilingWater() {
  console.log('boiling...')
  for (let i = 0; i < 10000; i++) {
    console.log(`still not done...`)
  }
  console.log('done')
}

// (2)
console.log(`i'm first`)
console.log(`i'm second`)
boilingWater()
console.log(`i'm third`) // *** this one cannot be run until boilingWater() finishes
