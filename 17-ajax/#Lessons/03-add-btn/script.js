/*
  Add Button
  - when we click on the button, page won't refresh >> happens behind the scene

*/

const btn = document.querySelector('.btn') // (1)

// (3)
btn.addEventListener('click', () => {
  getData()
})

// (2)
function getData() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', './api/sample.txt')

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement('p')
      text.textContent = xhr.responseText
      document.body.append(text)
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      })
    }
  }
  xhr.send()
}
