import getElement from './getElement.js'

const img = getElement('.user-img')
const title = getElement('.user-title')
const value = getElement('.user-value')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = (person) => {
  img.src = person.image
  value.textContent = person.name
  title.textContent = `My name is`
  removeActive(btns)
  btns[0].classList.add('active')

  btns.forEach((btn) => {
    const label = btn.dataset.label
    btn.addEventListener('click', () => {
      // console.log(person[label])
      title.textContent = `My ${label} is`
      value.textContent = person[label]
      removeActive(btns)
      btn.classList.add('active')
    })
  })
}

// * nếu thích thì cũng có thể bỏ thằng này vào riêng 1 module
function removeActive(items) {
  items.forEach((btn) => btn.classList.remove('active'))
}

export default displayUser
