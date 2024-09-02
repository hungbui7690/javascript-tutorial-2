/*  
  Mouse Events
  * click - fires after full action occurs
  * mousedown - button is pressed
  * mouseup - button is released
  * mouseenter - moved onto an element
  * mouseleave - moved out of an element
  
    h1
    button.btn
    p

*/

const h1 = document.querySelector('h1')
const btn = document.querySelector('.btn')

//////////////////////////////
// 1 enter >> 2 down >> 3 up >> 4 click >> 5 leave
btn.addEventListener('click', () => {
  console.log(`clicked`)
})
btn.addEventListener('mousedown', () => {
  console.log(`down`)
})
btn.addEventListener('mouseup', () => {
  console.log(`up`)
})
btn.addEventListener('mouseenter', () => {
  console.log(`enter`)
  h1.classList.add('blue')
})
btn.addEventListener('mouseleave', () => {
  console.log(`leave`)
  h1.classList.remove('blue')
})
