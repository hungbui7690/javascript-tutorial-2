/*
  Tagged Template Literals
  - Here is an example of Tagged Template Literals

  - create this style:
      <style>
        .hl {
          background: #ffc600;
        }
      </style>  
*/

const name = 'Snickers'
const age = '100'

function highlight(strings, ...values) {
  let str = ''
  strings.forEach((string, i) => {
    // ***
    str += `${string} <span class='hl'>${values[i] || ''}</span>`
  })
  return str
}

const html = highlight`My dog's name is ${name} and he is ${age} years old`
console.log(html)

document.body.innerHTML = html // ***
