/*
  getElementByTagName()
  - return HTML Collection: array-like object 
    >> BUT we can NOT use ARRAY METHODS on it 
    >> if we want to use array methods >> we can use spread operator >> then we can use any array method
  - later, when we use querySelector() & querySelectorAll() >> it will return Node List (collection of Nodes) >> with node list, we can use forEach()

 */

const headings = document.getElementsByTagName('h2') // * return HTML Collection
console.log(headings)

headings[0].style.color = 'red'

/////////////////////////////////
// ***
/////////////////////////////////
const items = document.getElementsByTagName('li')
// items.forEach((item) => {}); // # err
console.log(items)

/////////////////////////////////
// ***
/////////////////////////////////
const betterItems = [...items]
betterItems.forEach((item) => {
  console.log(item)
})

console.log(betterItems)
