/*
  Event Propagation - Bubbling vs Capturing
    * event capturing - fires at the root and fires until reaches the target
  
  div.second
    ul.list-items
      li.item
      li.item
      li.item

*/

const second = document.querySelector('.second')
const list = document.querySelector('.list-items')

function showBubbling(e) {
  console.log('currentTarget: ', e.currentTarget)
}

////////////////////////////
// *** check the log >> we can see the difference >> it starts at window >> document >> second >> list
////////////////////////////
// (3) add 3rd arg
second.addEventListener('click', showBubbling, { capture: true })
document.addEventListener('click', showBubbling, { capture: true })
window.addEventListener('click', showBubbling, { capture: true }) // (1) add window
list.addEventListener('click', showBubbling, { capture: true }) // (2) move this to the end
