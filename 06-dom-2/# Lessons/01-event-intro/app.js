/*
  Event Overview
  - make our website more interactive
  - mouseenter
  - mouseleave
  - click

    h2
    p
    button.btn

*/

const h2 = document.querySelector('h2')
const btn = document.querySelector('.btn')
const p = document.querySelector('p')

//////////////////////////////////
// addEventListener: when we hover, it will add the class to h2
//////////////////////////////////
p.addEventListener('mouseenter', function () {
  h2.classList.add('red')
})
p.addEventListener('mouseleave', function () {
  h2.classList.remove('red')
})

//////////////////////////////////
// classList.add() / classList.remove()
//////////////////////////////////
// btn.addEventListener('click', function () {
//   if (h2.classList.contains('blue')) {
//     h2.classList.remove('blue')
//   } else {
//     h2.classList.add('blue')
//   }
// })

//////////////////////////////////
// classList.toggle() >> no need if/else
//////////////////////////////////
btn.addEventListener('click', function () {
  h2.classList.toggle('blue')
})
