/*
  Array.from with DOM Element
  
 */

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const paras = document.querySelectorAll('p') // NodeList(3) [p, p, p]

////////////////////////
// Long Way
////////////////////////
let arrParas = Array.from(paras) // [p, p, p]
let newText = arrParas
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ')

console.log('long way: ', newText)
first.innerHTML = newText

////////////////////////
// Short Way
////////////////////////
const text = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`
}).join(' ')

console.log('short way: ', text)
second.innerHTML = text
