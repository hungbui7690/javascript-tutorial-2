/*
  Async/Await and try/catch
  - add these

*/

const btn = document.querySelector('.btn')

const url = './api/people.json'

// (1) add async
btn.addEventListener('click', async () => {
  // (2) add try/catch
  try {
    // (3) use await instead of .then()
    const response = await fetch(url)
    const data = await response.json()
    displayItems(data)
  } catch (error) {
    console.log(error)
  }
})

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item
      return `<p>${name}</p>`
    })
    .join('')

  const element = document.createElement('div')
  element.innerHTML = displayData
  document.body.appendChild(element)
}
