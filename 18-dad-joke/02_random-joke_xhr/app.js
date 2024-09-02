/*
  https://api.chucknorris.io/
  https://api.chucknorris.io/jokes/categories
  https://api.chucknorris.io/jokes/random?category={category} >>> thằng này có thêm query parameter

*/

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')

const URL = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  getData(URL)
})

function getData(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return

    if (xhr.status === 200) {
      const { value: joke } = JSON.parse(xhr.responseText)
      content.textContent = joke
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      })
    }
  }
  xhr.send()
}
