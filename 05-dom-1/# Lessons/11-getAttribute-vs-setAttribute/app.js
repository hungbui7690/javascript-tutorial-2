/*
  getAttribute() vs setAttribute()
    ul
      li.first#special
      a#link
      li

*/

const first = document.querySelector('.first')
const className = first.getAttribute('class')
console.log('className: ', className)

///////////////////////////////////
const idValue = document.getElementById('special')
console.log('id: ', idValue.getAttribute('id'))

///////////////////////////////////
const link = document.querySelector('#link')
console.log('href: ', link.getAttribute('href'))

///////////////////////////////////
const last = link.nextElementSibling
last.setAttribute('class', 'first')
last.textContent = 'changed by JS'
console.log(last)

///////////////////////////////////
const list = document.querySelectorAll('.first')
console.log(list)
