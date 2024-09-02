/*
  The DOMContentLoaded event 
  - fires when the "initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and sub-frames to finish loading" >> why this is important >> it is because there are some events that wait for stylesheets, images...loaded to run

  - window.addEventListener('DOMContentLoaded', function(){
      // code goes here
  })
  - document.addEventListener('DOMContentLoaded', function(){
      // code goes here
  });
    >> there are somehow use window/document to run event
    
*/

////////////////////////////
// Example 1: if we move the script tag in HTML file to the top >> run JS before the content loaded >> err
////////////////////////////
// const heading = this.document.querySelector('h1')
// console.log(heading)
// heading.style.color = 'crimson' // error here >> since heading = null
// window.addEventListener('DOMContentLoaded', function () {})

////////////////////////////
// Example 2: but if we put it here >> NO ERR
////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
  const heading = this.document.querySelector('h1')
  console.log(heading)
  heading.style.color = 'crimson'
})

// ??? normally, we put the script tag at the end >>> but we need to be aware of this >> because sooner or later, we will meet this situation
