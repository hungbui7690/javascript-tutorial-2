/*
  Arrow Functions - Select Elements and this

*/

const btn = document.querySelector('.btn')

///////////////////////////////
// Regular Callback
///////////////////////////////
btn.addEventListener('click', function () {
  this.style.color = 'black' // this = btn
})

///////////////////////////////
// Arrow Callback
///////////////////////////////
btn.addEventListener('click', () => {
  // this.style.color = 'black' // this = window >> error
})

///////////////////////////////
// Arrow + setTimeout()
///////////////////////////////
// ## outer is regular fn, inner is arrow fn
btn.addEventListener('click', function () {
  setTimeout(() => {
    this.style.color = 'black'
  }, 2000)
})

///////////////////////////////
// Arrow + setTimeout()
///////////////////////////////
// both are arrow fns
btn.addEventListener('click', () => {
  console.log(this) // # window
  setTimeout(() => {
    console.log(this) // # window
    this.style.color = 'black'
  }, 2000)
})
