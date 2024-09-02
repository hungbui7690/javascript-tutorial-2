/*
  remove() vs removeChild
    .first
      h1
      p
    .second
      h2

*/

const first = document.querySelector('.first')

const headingOne = first.querySelector('h1') // ## this is similar to .first h1{} in css >> descendent selector
// first.removeChild(headingOne)

/////////////////////////////////
const second = document.querySelector('.second')
// second.remove()
