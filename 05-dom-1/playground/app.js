/*
  Change CSS with style property

  .random
    lorem

*/

const randomDiv = document.querySelector('.random')
console.log(randomDiv.style)

////////////////////////////
// this will add directly to the inline style >> so that it will be hard to overwrite
////////////////////////////
randomDiv.style.backgroundColor = 'crimson'
randomDiv.style.color = 'white'
randomDiv.style.fontSize = '2rem'
randomDiv.style.fontSize = '2rem'
randomDiv.style.textTransform = 'capitalize'

////////////////////////////
// *** should use this one since we can overwrite easily
////////////////////////////
randomDiv.classList.add('title')
