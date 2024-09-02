const btn = document.querySelector('.btn') // (1)

const url = './api/people.json' // (2)

// (3) data we received is in form of array
const displayItems = (items) => {
  // (a)
  const displayData = items
    .map((item) => {
      const { name } = item
      return `<p>${name}</p>`
    })
    .join('')

  // (b)
  const element = document.createElement('div')
  element.innerHTML = displayData
  document.body.appendChild(element)
}

// (4)
btn.addEventListener('click', () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayItems(data)
    })
    .catch((err) => console.log(err))
})
