/*
  setInterval() 
  - run function REPEATEDLY, at SPECIFIC INTERVAL
  - pass function ref
  - duration in ms
  - default duration is 0, will cover more extensively in async/await chapter
  - return unique identifier which we can use to CLEAR the interval >> clearInterval()
  - on window object
  - similar to setTimeout()

*/

///////////////////////////
// Example 1:
///////////////////////////
function hello() {
  console.log('hello')
}

setInterval(hello, 1000)

///////////////////////////
// Example 2: pass arguments
///////////////////////////
const showScore = (name, score) => {
  console.log(`hello ${name}, your score is ${score}`)
}

setInterval(showScore, 2000, 'nicky', 30)

///////////////////////////
// Example 3: clearInterval()
///////////////////////////
const firstID = setInterval(showScore, 3000, 'travis', 30)
const secondID = setInterval(showScore, 3000, 'bobo', 30)
clearInterval(firstID)
