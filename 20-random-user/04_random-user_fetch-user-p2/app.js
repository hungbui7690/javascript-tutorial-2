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

const showUser = async () => {
  // ====== get user from API
  const person = await getUser()
  console.log(person)
  // ====== display user
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
