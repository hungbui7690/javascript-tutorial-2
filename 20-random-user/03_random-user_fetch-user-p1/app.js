/*
    https://randomuser.me/
    https://randomuser.me/api/
    https://randomuser.me/api/?gender=female
    https://randomuser.me/api/?password=upper,lower,1-16

    # bài này sử dụng data-label

    - khi chúng ta refresh hoặc click button, chúng ta muốn load user 
*/

import getElement from './utils/getElement.js'

const URL = 'https://randomuser.me/api/'

const img = getElement('.user-img')
const title = getElement('.user-title')
const value = getElement('.user-value')
const btn = getElement('.btn')
const btns = [...document.querySelectorAll('.icon')]

const getUser = async () => {
  const res = await fetch(URL)
  const data = await res.json()
  const person = data.results[0] // vì có quá nhiều data, chúng ta sẽ ko sử dụng destructuring, mà sẽ làm line by line
  const { large: image } = person.picture
  const { phone, email } = person
  const { password } = person.login
  const { first, last } = person.name
  const {
    dob: { age },
  } = person
  const {
    street: { number, name },
  } = person.location

  // value return chỗ này phải match với value trong data-label trong javascript
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  }
}

const showUser = async () => {
  // ====== get user from API
  const person = await getUser()
  console.log(person)
  // ====== display user
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
