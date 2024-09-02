/*
  Keyboard Events
  * keypress - when key is pressed
  * keydown - when key is down
  * keyup - when key is released

  input#name

*/

const nameInput = document.getElementById('name')

// down > press > up
nameInput.addEventListener('keypress', () => {
  console.log('press')
})

nameInput.addEventListener('keydown', () => {
  console.log('down')
})

nameInput.addEventListener('keyup', () => {
  console.log('up')
  console.dir(nameInput) // check the value prop
  console.log(nameInput.value)
})
