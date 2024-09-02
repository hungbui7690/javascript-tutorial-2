/*
  - Simple: fixed colors > just only have some fixed colors
  - Hex: random colors generator > hex.js

*/

// fixed colors
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

/*  Math.random()      : 0 to 1 (exclusive)
    Math.random() * 4  : 0 to 3 */
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
  // get random # between 0 and 3
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
