/*
  - nếu dùng cách này, code sẽ càng ngày càng rối khi có càng nhiều code
  
  >> sử dụng promise >> nếu response đc trả về >>> gọi resolve()

*/

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  // ==== .then()
  getData(URL)
    .then((res) => {
      displayData(res)
    })
    .catch((err) => console.log(err))
})

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return

      // ===== resolve() sẽ trả lại xhr.responseText
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject({ status: xhr.status, text: xhr.statusText })
      }
      // ======================
    }
    xhr.send()
  })
}

function displayData(data) {
  const { value: joke } = JSON.parse(data)
  content.textContent = joke

  // ===== img shake
  const random = Math.random() * 1000
  img.classList.add('shake-img')
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, random)
}
