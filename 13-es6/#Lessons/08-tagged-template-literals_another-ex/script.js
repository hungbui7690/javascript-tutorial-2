/*
  Tagged Template Literals
  - That means we can run a template string through a function, and rather than have the browser immediately assign that value to a variable, we can have control over how this actual string is made.

*/

const author = 'JOE DOE'
const statement = 'some statement'

/////////////////////////////
// ***
/////////////////////////////
function highlight(text, ...vars) {
  console.log({ text, vars })
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class='blue'>${vars[index] || ''}</strong>`
  })

  return awesomeText.join('')
}

/////////////////////////////
// Normal way to add class with template literal
/////////////////////////////
const quote1 = `Here is the <strong class='blue'>${statement}</strong> by ${author} and it could not be more true`
console.log(quote1)

/////////////////////////////
// Tagged Template Literals
/////////////////////////////
const quote2 = highlight`Here is the ${statement} by ${author} and it could not be more true`
console.log(quote2)

const result = document.querySelector('.result')
result.innerHTML = quote2
