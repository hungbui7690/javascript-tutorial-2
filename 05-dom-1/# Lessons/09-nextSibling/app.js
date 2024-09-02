/*
  Next Siblings
  - another way to traverse the DOM
  - nextElementSibling
  - previousElementSibling
    >> these 2 will ignore whitespace and give us the element we want

*/

const firstItem = document.querySelector('li:first-child')

firstItem.nextSibling.nextSibling.style.color = 'red' // *** nextSibling

//////////////////////////////////
// ***
//////////////////////////////////
const last = document.querySelector('#last')
const third = last.previousSibling.previousSibling // ## previousSibling does NOT IGNORE WHITESPACE >> we need to do twice
console.log('third: ', third)
third.style.backgroundColor = 'yellow'

//////////////////////////////////
// ~~ we should use this
//////////////////////////////////
const second = firstItem.nextElementSibling // ??? nextElementSibling: IGNORE WHITESPACE + give us the element we want
console.log('second: ', second)

const first =
  last.previousElementSibling.previousElementSibling.previousElementSibling
first.style.color = 'skyblue'

///////////////////////
// ## this will return whitespace >> #text
///////////////////////
// const secondItem = firstItem.nextSibling;
