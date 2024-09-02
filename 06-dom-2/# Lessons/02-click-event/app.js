/*
  Click Event

    h2
    button.btn
    p

*/

// (1) select element
const btn = document.querySelector('.btn')
const h2 = document.querySelector('h2')
const para = document.querySelector('p')

// (2) addEventListener()
// (3) what event (click), what to do (callback)
btn.addEventListener('click', () => {
  h2.classList.toggle('blue')
})
