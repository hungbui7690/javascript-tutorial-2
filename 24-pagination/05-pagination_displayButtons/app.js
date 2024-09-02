/*
  - Sau khi fetchFollowers xong, chúng ta có Array >>> tiếp theo chúng ta sẽ sử dụng Array.from() >>> sẽ đc Array of Arrays >> sử dụng paginate() 

*/

import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const heading = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

// ====================
let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  // === cần index để set active cho button
  displayButtons(btnContainer, pages, index)
}
// ====================

const init = async () => {
  const followers = await fetchFollowers()
  heading.textContent = `Pagination`

  pages = paginate(followers)
  setupUI()
}

window.addEventListener('load', init)