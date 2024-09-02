/*
  - Sau khi fetchFollowers xong, chúng ta có Array >>> tiếp theo chúng ta sẽ sử dụng Array.from() >>> sẽ đc Array of Arrays >> sử dụng paginate() 

*/

import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const heading = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  const followers = await fetchFollowers()
  heading.textContent = `Pagination`

  pages = paginate(followers)
  setupUI()
}

// ==== buttons functionality
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    // console.log(e.target.dataset.index)
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) index = 0
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) index = pages.length - 1
  }
  setupUI()
})
// ===============================

window.addEventListener('load', init)
