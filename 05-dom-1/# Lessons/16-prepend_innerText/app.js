/*
  prepend
  innerText

  - appendChild: adds a node to the end of the list of children of a specified parent node
  - append: inserts a set of Node objects AFTER the last child of the Element
  - prepend: inserts a set of Node objects BEFORE the first child of the Element
  - similar to appendChild >> the difference is the place where we want to insert inside parentElement

    body
      h1.blue

  - textContent returns the full text contained in a node
  - innerText returns only the VISIBLE TEXT contained in the node

*/

const newHeading = document.createElement('h2')
newHeading.innerText = 'newHeading Text'
document.body.prepend(newHeading)
