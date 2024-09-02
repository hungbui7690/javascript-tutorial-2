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

btn.addEventListener('click', async () => {
  const result = await displayColor() // ## instead of .then(), we use async/await
  console.log(result)
})
