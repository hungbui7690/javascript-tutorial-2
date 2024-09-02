/*
  - làm cho image shake khi click

*/

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
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

      // ===== img shake for random time from 0 - 1s
      const random = Math.random() * 1000
      img.classList.add('shake-img')
      setTimeout(() => {
        img.classList.remove('shake-img')
      }, random)
      // ======================================
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      })
    }
  }
  xhr.send()
}
