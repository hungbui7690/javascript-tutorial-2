/*
  querySelector() vs querySelectorAll()
  - Select the element or group of elements the we want 
  - Decide the effect we want to apply to the selection

  - querySelector('css selection') : select SINGLE
  - querySelectorAll('css selection') : select MULTIPLE

*/

const result = document.querySelector('#result')
result.style.backgroundColor = 'skyblue'

const item = document.querySelector('.special')
console.log(item)

const lastItem = document.querySelector('li:last-child')
console.log(lastItem)

/////////////////////////////////////
// *** multi steps
/////////////////////////////////////
// const list = document.querySelectorAll('.special') // * return node list so that we can use forEach() without additional step

// list.forEach(function (item) {
//   console.log(item)
//   item.style.color = 'yellow'
// })

/////////////////////////////////////
// *** using chaining
/////////////////////////////////////
document.querySelectorAll('.special').forEach(function (item) {
  console.log(item)
  item.style.color = 'yellow'
})
