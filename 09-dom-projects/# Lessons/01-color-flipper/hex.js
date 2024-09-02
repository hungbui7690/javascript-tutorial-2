const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

const randomColor = () => {
  return Math.floor(Math.random() * hex.length)
}

let hexColor = '#'
const generateRandomColor = () => {
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()]
  }
}

btn.addEventListener('click', () => {
  generateRandomColor()
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
  hexColor = '#'
})
