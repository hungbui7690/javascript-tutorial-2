/*
  - classList: show/get all classes
  - contains: check classList for specific class
  - add
  - remove
  - toggle
*/

const toggleBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})
