/*
  Scroll Event 
  - on element or Document
    
  * scrollY: returns the # of pixels the document is currently scrolled along the vertical axis (pageYOffset)
  * scrollX: returns the # of pixels the document is currently scrolled along the horizontal axis (pageXOffset)
  
  *** Note: we can trigger this one if we can scroll in X direction or Y direction
*/

window.addEventListener('scroll', () => {
  console.log('Y ' + window.scrollY + 'px')
  console.log('X ' + window.scrollX + 'px')
})
