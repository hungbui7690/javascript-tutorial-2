/*
  Spread Operator: 
  - sometimes, we use querySelectAll() or other methods, but it returns NodeList (not array) >> so that, we cannot use map()

  - spread operator + .map() + join()
  
*/

const headings = document.querySelectorAll('h1')
const result = document.getElementById('result')

console.log(headings) // NodeList
// headings.map((item) => console.log(item)) // # error

////////////////////////////
// Convert to Array
////////////////////////////
const text = [...headings] // convert using spread operator
  .map(
    (item) => `
  <span>${item.textContent}</span>
`
  )
  .join('')

console.log(text)

result.innerHTML = text
