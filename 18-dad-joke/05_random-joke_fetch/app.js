/*
  - nếu dùng cách này, code sẽ càng ngày càng rối khi có càng nhiều code
  
  >> sử dụng promise >> nếu response đc trả về >>> gọi resolve()

*/

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((res) => {
      displayData(res)
    })
    .catch((err) => console.log(err))
})

function displayData({ value: joke }) {
  content.textContent = joke

  // ===== img shake
  const random = Math.random() * 1000
  img.classList.add('shake-img')
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, random)
}
