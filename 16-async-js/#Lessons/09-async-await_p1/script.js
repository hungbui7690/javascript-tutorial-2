/*
  Async / Await 
  - must have async 
  - await waits till promise is settled
  - error handling > use try/catch

  *** when we use keyword async with any function >> then that function will wait until the promise is settled (fulfilled: resolve or rejected)

  *** this is how to write by using async/await
        async function someFunction () {
          await ...
        }
        const otherFunction = async() => {
          await ...
        }

*/

//////////////////////////////
// ***
//////////////////////////////
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
        resolve() // *** resolve('hello') >> then the log below will return hello
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}

// normally, it we return data when resolve(), then save to the variable at await >> but in this case, there's no data, so we don't save into variable
btn.addEventListener('click', async () => {
  const first = await changeColor(1000, headingOne, 'crimson')
  await changeColor(1000, headingTwo, 'lightgreen')
  await changeColor(1000, headingThree, 'skyblue')

  // *** this line will run after the previous lines finishes (await)
  console.log(first) // undefined if resolve() >> 'hello' if resolve('hello')
})
