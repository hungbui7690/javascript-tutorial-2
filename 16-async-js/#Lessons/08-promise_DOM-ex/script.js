/*
  Promise - DOM Example
  - in this lesson, we will re-do the click btn and change 3 headings colors in order (04-callback-hell) 
    > we will see the situation when resolve() that does not have any data, and .then() does not have any data

  *** try to comment the resolve() line >> .then() won't work anymore

    h2.one
    h2.two
    div.img-container
    button.btn

*/

const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.two')
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const url = 'https://source.unsplash.com/random'

function changeColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve() // ~~ does not have any data in resolve()
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}

// *** resolve() above does not have data >> so .then() here does not have data
btn.addEventListener('click', () => {
  changeColor(1000, headingOne, `crimson`)
    .then(() => changeColor(2000, headingTwo, 'lightgreen')) // ## this will run after the 'crimson' one finishes
    .then(() => changeColor(3000, headingThree, 'skyblue')) // ~~ this will run after the 'lightgreen' one finishes
    .catch((err) => console.log(err))
})

/*
  Callback Hell
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
`
*/
