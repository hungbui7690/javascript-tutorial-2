/*
  setTimeout() 
  - run function once after specific time
  - pass function ref >> callback
  - duration in ms
  - default duration is 0, will cover more extensively in async/await chapter
  - return unique identifier which we can use to clear the timeout
  - on window object

*/

/////////////////////////////
// Example 1:
/////////////////////////////
setTimeout(function () {
  console.log('Ex1: hello')
}, 1000)

/////////////////////////////
function sayHi() {
  console.log('Ex1: Hi!!!')
}

setTimeout(sayHi, 1200)

// setTimeout(sayHi(), 1200) // *** NOT WORK

/////////////////////////////
// Example 2: arrow function >> ES6
/////////////////////////////
setTimeout(() => {
  console.log('Ex2: hihi')
}, 2000)

/////////////////////////////
// Example 3: pass the arguments to callback function
/////////////////////////////
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`)
}

setTimeout(showScore, 3000, 'joe', 50) // name = 'joe', score = 50

/////////////////////////////
// Example 4: clearTimeout
/////////////////////////////
const firstID = setTimeout(showScore, 4000, 'nicky', 30) // everytime we run the setTimeout() >> it will return an ID
const secondID = setTimeout(showScore, 5000, 'shane', 20)
console.log(firstID) // # get back unique identifier
console.log(secondID)

// clearTimeout(firstID) // with this line, 'nicky' won't be run
