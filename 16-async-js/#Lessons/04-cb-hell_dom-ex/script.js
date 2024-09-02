/*
  Callback Hell - DOM Example
  - when we click on the button, we want to change the colors by orders of the headings >> but not change the colors at once

*/

// (1)
const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.two')
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')

// (2) callback hell >> nesting callback together >> sequence >> run from the outer to inner: crimson > lightgreen > skyblue
btn.addEventListener('click', () => {
  setTimeout(() => {
    headingOne.style.color = 'crimson'
    setTimeout(() => {
      headingTwo.style.color = 'lightgreen'
      setTimeout(() => {
        headingThree.style.color = 'skyblue'
      }, 3000)
    }, 2000)
  }, 1000)
})

console.log(`I run first`) // always run first
