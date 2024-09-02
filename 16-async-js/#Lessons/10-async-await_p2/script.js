/*
  Async / Await 
  - error handling > use try/catch

*/

const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.twooooooo') // ## create error here
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const url = 'https://source.unsplash.com/random'

btn.addEventListener('click', async () => {
  // ## add try/catch
  try {
    const first = await changeColor(1000, headingOne, 'crimson')
    await changeColor(1000, headingTwo, 'lightgreen')
    await changeColor(1000, headingThree, 'skyblue')
    console.log(first)
  } catch (error) {
    console.log(error)
  }
})

function changeColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve('hello')
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}
