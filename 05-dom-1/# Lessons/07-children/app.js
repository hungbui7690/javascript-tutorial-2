/*
  Children
  - childNodes: return all child nodes including white space which is treated as text nodes (be careful)
  - children
  - lastChild: whitespace
  - firstChild: whitespace

*/

const fruits = document.getElementById('fruits')
const fruitsChildNodes = fruits.childNodes // node-list
console.log(fruitsChildNodes)

const children = fruits.children // html-collection
console.log(children)

console.log(fruits.firstChild) // return whitespace
console.log(fruits.lastChild)
