/*
    https://randomuser.me/
    https://randomuser.me/api/
    https://randomuser.me/api/?gender=female
    https://randomuser.me/api/?password=upper,lower,1-16

    # bài này sử dụng data-label

    - khi chúng ta refresh hoặc click button, chúng ta muốn load user 

    * btns.forEach((btn) => btn.classList.remove('active')) >> có thể bỏ vào function
*/

import getElement from './utils/getElement.js'
import getUser from './utils/fetchUser.js'
import displayUser from './utils/displayUser.js'

const btn = getElement('.btn')

const showUser = async () => {
  // ====== get user from API
  const person = await getUser()
  // ====== display user
  displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
