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

const second = document.querySelector('.second')
const list = document.querySelector('.list-items')

/////////////////////////////////
// *** stopPropagation
/////////////////////////////////
function stopPropagation(e) {
  e.stopPropagation()
}

function showBubbling(e) {
  console.log('currentTarget: ', e.currentTarget)
  console.log('target: ', e.target)

  if (e.target.classList.contains('item')) console.log('You clicked on the LI')
}

list.addEventListener('click', stopPropagation) // ***
second.addEventListener('click', showBubbling)
document.addEventListener('click', showBubbling)
