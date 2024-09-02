/*
  insertBefore
  - createElement()
  - createTextNode()
  - insertBefore('element', 'refNode')

  >> instead of using appendChild(), we can use insertBefore

  #result 
    h1.red

*/

// (1) select >> we need to select the parent first >> then create element >> then invoke parent.insertBefore()
const result = document.querySelector('#result')
const headingOne = document.querySelector('.red')

// (2) create new element
const bodyDiv = document.createElement('div')
const bodyDivTex = document.createTextNode('text for bodyDiv')
bodyDiv.appendChild(bodyDivTex)

// (3) insertBefore()
// # document.body.insertBefore() != document.insertBefore()
document.body.insertBefore(bodyDiv, result) // * insert before result

///////////////////////////////////////
// ***
///////////////////////////////////////
const newHeading = document.createElement('h2')
const newHeadingText = document.createTextNode('text for newHeading (h2) ')
newHeading.appendChild(newHeadingText)
newHeading.classList.add('blue')
result.insertBefore(newHeading, headingOne)
