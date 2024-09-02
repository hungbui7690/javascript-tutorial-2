/*
  nodeValue vs textContent
  - at the end of the day, they do the same thing
  - use textContent since it will ignore the whitespace for us

*/

const item = document.getElementById('special')

// ## DON'T USE THIS METHOD
const value1 = item.nodeValue
console.log(value1) // null >> NodeList [text]
console.log(item.childNodes) // null >> this also return NodeList

/////////////////////////////////
// ~~ use this method
console.log(item.childNodes) // return Node List with WHITESPACE
console.log(item.childNodes[0].nodeValue) // with this, we can get "special content"

/////////////////////////////////
// * shorthand
const value2 = item.firstChild.nodeValue
console.log(value2)

/////////////////////////////////
// ~~ this is the way we should use >> the 2 way above we just need to know >> NO NEED to REMEMBER
console.log(item.textContent)
