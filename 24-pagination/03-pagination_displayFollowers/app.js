/*
  - Fetch Github Followers

*/

import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const heading = document.querySelector('.section-title h1')

// * bởi vì fetchFollowers() là async >> return promise >> ở đây cũng phải là async
const init = async () => {
  const followers = await fetchFollowers()
  heading.textContent = `Pagination`
  displayFollowers(followers)
}

window.addEventListener('load', init)
