/*
  DOM - General Concepts
  - similar to css
  - select the element or group of elements that we want to affect
  - decide the effect we want to apply to the selection 

  - many different way
    >> document.body.style.backgroundColor = 'blue'
    >> document.body.style.color = 'yellow'
    >> document.getElementById('btn').style.color = 'red'

    >> document.querySelector('element') >> return a node object or a node list, which is an array-like object

*/

////////////////////////////////////
// window object: browser API
// document: is the document that we are working >> <!DOCTYPE html> >> it is also an object in window object
////////////////////////////////////
console.log(window)
console.dir(window.document)

////////////////////////////////////
// Example 1
////////////////////////////////////
const btn = document.getElementById('btn')
const name = btn.nodeName // BUTTON
const css = btn.style // get all styles
console.log(name)
console.log(css)

////////////////////////////////////
// Example 2
////////////////////////////////////
document.body.style.backgroundColor = 'green'
document.body.style.color = 'yellow'
