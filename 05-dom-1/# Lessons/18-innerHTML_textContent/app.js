/*
  innerHTML vs textContent
  - textContent returns the full text contained in a node
  - innerText returns only the VISIBLE TEXT contained in the node
  - innerHTML returns all the HTML contained in the node

  ul#first
    li.item
    li
  #second

*/

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const item = document.querySelector('.item')

//////////////////////////////
console.log('first.textContent: ', first.textContent)
console.log('second.textContent: ', second.textContent)
console.log('innerHTML: ', first.innerHTML)

//////////////////////////////
// Example of innerHTML
//////////////////////////////
const random = 'random value'
const ul = document.createElement('ul')
ul.innerHTML = `
  <li class="item">new item 1</li>
  <li>new item 2 (${random})</li>
`
document.body.appendChild(ul)
