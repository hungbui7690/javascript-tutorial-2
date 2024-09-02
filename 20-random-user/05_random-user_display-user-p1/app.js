/*
    https://randomuser.me/
    https://randomuser.me/api/
    https://randomuser.me/api/?gender=female
    https://randomuser.me/api/?password=upper,lower,1-16

    # bài này sử dụng data-label

    - khi chúng ta refresh hoặc click button, chúng ta muốn load user 

    * ở bài này, chúng ta sẽ chia ra làm nhiều modules
*/

import getElement from './utils/getElement.js'
import getUser from './utils/fetchUser.js'

const img = getElement('.user-img')
const title = getElement('.user-title')
const value = getElement('.user-value')
const btn = getElement('.btn')
const btns = [...document.querySelectorAll('.icon')]

// ======= data-label
const displayUser = (person) => {
  img.src = person.image
  value.textContent = person.name
  title.textContent = `My name is`
  btns.forEach((btn) => btn.classList.remove('active'))
  btns[0].classList.add('active')

  btns.forEach((btn) => {
    const label = btn.dataset.label
    btn.addEventListener('click', () => {
      // console.log(person[label])
      title.textContent = `My ${label} is`
      value.textContent = person[label]
      btns.forEach((btn) => btn.classList.remove('active'))
      btn.classList.add('active')
    })
  })
}
// =======================================

const showUser = async () => {
  // ====== get user from API
  const person = await getUser()
  // ====== display user
  displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
