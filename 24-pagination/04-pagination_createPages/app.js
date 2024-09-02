/*
  - Sau khi fetchFollowers xong, chúng ta có Array >>> tiếp theo chúng ta sẽ sử dụng Array.from() >>> sẽ đc Array of Arrays >> sử dụng paginate() 

*/

import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const heading = document.querySelector('.section-title h1')

const init = async () => {
  const followers = await fetchFollowers()

  // ====== createPages >> lúc này trang đầu chỉ có 9 items >>> paginate(followers) trả về Array of Array
  displayFollowers(paginate(followers)[0])
  // ====== createPages

  heading.textContent = `Pagination`

  const pages = paginate(followers)
  console.log(pages)
}

window.addEventListener('load', init)
