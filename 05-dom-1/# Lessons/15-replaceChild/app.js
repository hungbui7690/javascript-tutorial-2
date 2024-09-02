/*
  replaceChild(new, old)
    #result
      h1.red

*/

const result = document.querySelector('#result')
const headingOne = document.querySelector('.red')

// (1) create an element >> this one will be replaced later
const body = document.createElement('div')
const bodyText = document.createTextNode('text for body')
bodyDiv.appendChild(bodyDivText)
document.body.insertBefore(bodyDiv, result)

// (2) this one will be used to replaced the above one
const smallHeading = document.createElement('h6')
const smallHeadingText = document.createTextNode(
  'new text for smallHeading (h6)'
)
smallHeading.classList.add('blue')
smallHeading.appendChild(smallHeadingText)

document.body.replaceChild(smallHeading, bodyDiv)
