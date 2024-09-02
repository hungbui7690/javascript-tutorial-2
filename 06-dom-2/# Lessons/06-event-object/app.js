'use strict'

/*
  Event Object
  * event object argument - abbreviation: e, evt
  * info about trigger event
      - event.type
      - event.currentTarget
  * this keyword
  * preventDefault(): khi click vào link, default sẽ scroll lên top of page >> tương tự như form

      button.btn
      h1
      a

  - e.target = The thing under the mouse (as ben says... the thing that triggers the event). 
  - e.currentTarget = The thing before the dot

*/

const heading = document.querySelector('h1')
const btn = document.querySelector('button')
const link = document.querySelector('a')

// heading.classList.add('blue') >> if we make a typo >> there will be no effect >> to be always select the correct element >> use event object
heading.addEventListener('click', function (e) {
  // console.log(e) // now, we just need to remember e.currentTarget & e.type
  console.log(e.currentTarget)
  console.log(this) // # this keyword: when using arrow function, will return 'window' object >> use normal function will return element
  heading.classList.add('blue')
})

btn.addEventListener('click', (e) => {
  console.log(e.currentTarget)
  console.log(e.type)
  heading.classList.add('red')
})

const handleLink = (e) => {
  e.preventDefault()
}

link.addEventListener('click', handleLink)
