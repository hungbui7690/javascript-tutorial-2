/*
  getElementByClassName()
  - Select the element or group of elements the we want
  - Decide the effect we want to apply to the selection
  - getElementsByClassName('class-name');
    >> HTMLCollection

*/

const listItems = document.getElementsByClassName('special') // [li.special, li.special, li.special]
listItems[2].style.color = 'blue'
console.log(listItems)
