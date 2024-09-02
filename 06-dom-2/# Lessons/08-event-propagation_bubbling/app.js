/*
  Event Propagation - Bubbling vs Capturing
  * allow select dynamic elements
    * event propagation - order the events are fire
    * event bubbling - clicked element first the bubbles up (default)
    * event capturing - fires at the root and fires until reaches the target
  
  *** this is the method we use when working with shopping cart or apps >> create element when we add to cart, then remove dynamically


  div.container
    h1.heading
  button.btn
  div.second
    ul.list-items
      li.item
      li.item
      li.item

  *** if (e.target.classList.contains('element')){} >> REMEMBER THIS >> this is the key of event bubbling

*/

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const heading = document.querySelector('.heading')

////////////////////////////
// ***
////////////////////////////
const sayHello = (e) => {
  console.log('hello')
}
heading.addEventListener('click', sayHello)

////////////////////////////
// ***
////////////////////////////
btn.addEventListener('click', () => {
  const element = document.createElement('h1')
  element.classList.add('heading')
  element.style.backgroundColor = 'skyblue'
  element.textContent = 'new Element Heading' // *** textContent === document.createTextNode()
  container.appendChild(element)
})

////////////////////////////
// *** Event Bubbling >> we can see that we addEventListener to the '.container' >> but the target is the '.heading'
////////////////////////////
container.addEventListener('click', (e) => {
  // console.log(e.target) // heading
  // console.log(e.currentTarget) // container
  if (e.target.classList.contains('heading')) {
    console.log('hello there')
  }
})

////////////////////////////
// ***
////////////////////////////
const second = document.querySelector('.second')
const list = document.querySelector('.list-items')

function showBubbling(e) {
  console.log('currentTarget: ', e.currentTarget) // ul
  console.log('target: ', e.target) // li

  // if we want to target only the items >> do this
  if (e.target.classList.contains('item')) console.log('You clicked on the LI')
}

// when we click on the item, the three below will be fired
list.addEventListener('click', showBubbling)
second.addEventListener('click', showBubbling)
document.addEventListener('click', showBubbling)
