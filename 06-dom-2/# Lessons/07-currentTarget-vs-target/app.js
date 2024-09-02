/*
  currentTarget vs target
  * currentTarget - always refers to the element to which the event handler has been attach to >> left side of the dot (btn.addEventListener >> currentTarget is btn)
  * target - identifies the element on which the event occurred >> the item under the mouse

    btn
    btn
    btn
    h1
    a

*/

////////////////////////////
// Example 1: when we click on the button >> that button will change to black
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log('currentTarget', e.currentTarget)
    console.log('target', e.target)
    console.log('////////////')
    e.currentTarget.style.color = 'black'
  })
})

/////////////////////////////
// Example 2: this will show the different between target vs currentTarget
const first = document.querySelector('.first')

first.addEventListener('click', function (e) {
  console.log(e.currentTarget) // div
  console.log(e.target) // button
})
