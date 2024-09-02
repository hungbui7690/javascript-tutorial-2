/*
  Form
  - e.preventDefault() >> when we click on submit button, data and log will be wiped out (refresh) >> this method will prevent that
  - to get the value of an input >> we need to use "value" property

  form#form
    input#name
    input#password
    input:submit

*/

const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const passwordInput = document.getElementById('password')

// submit event >> with form, we don't use 'click' event, but use 'submit' event
form.addEventListener('submit', (e) => {
  e.preventDefault() // ~~ >> when we click on submit button, data and log will be wiped out (refresh) >> this method will prevent that
  console.log(nameInput.value)
  console.log(passwordInput.value)
})
