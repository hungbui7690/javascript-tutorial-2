/*
  createElement - createTextNode - appendChild
  - here are the 3 steps to create a new element
    + createElement('element')
    + createTextNode('text content')
    + element.appendChild(childElement)

*/

const resultDiv = document.querySelector('#result')

////////////////////////////
// Example 1
////////////////////////////
// (1) create empty element
const divBody = document.createElement('div')

// (2) create text node
const text = document.createTextNode('new text node')

// (3) append child
divBody.appendChild(text)
document.body.appendChild(divBody)

console.log('children: ', resultDiv.children)

////////////////////////////
// Example 2
////////////////////////////
const newHeading = document.createElement('h2')
const headingText = document.createTextNode('new text for newHeading')
newHeading.appendChild(headingText)
newHeading.classList.add('blue')
resultDiv.appendChild(newHeading)
