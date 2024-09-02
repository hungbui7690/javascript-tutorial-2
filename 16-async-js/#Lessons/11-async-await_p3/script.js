/*
  Async / Await 
  - any function which has "async" keyword will return promise by default
  - in this case, we don't care because it won't return any data in resolve() 
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
        resolve()
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}

// ~~ async >> return promise >> to get data, we need to use .then()
async function displayColor() {
  try {
    const first = await changeColor(1000, headingOne, 'crimson')
    await changeColor(1000, headingTwo, 'lightgreen')
    await changeColor(1000, headingThree, 'skyblue')
  } catch (error) {
    console.log(error)
  }
  return 'hello'
}

// ~~ because displayColor() return promise >> though resolve() does not have any data >> we still need to use .then()
btn.addEventListener('click', async () => {
  displayColor().then((data) => {
    console.log(data)
  })
})
