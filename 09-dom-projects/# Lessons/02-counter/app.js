/////////////////////////
// Method 1
/////////////////////////
const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')
let count = 0 // set initial count

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }
    value.textContent = count
  })
})

/////////////////////////
// Method 2
/////////////////////////
// const decreaseBtn = document.querySelector('.decrease')
// const resetBtn = document.querySelector('.reset')
// const increaseBtn = document.querySelector('.increase')

// decreaseBtn.addEventListener('click', () => {
//   const result = Number.parseInt(value.textContent)
//   value.textContent = result - 1
// })

// resetBtn.addEventListener('click', () => {
//   value.textContent = 0
// })

// increaseBtn.addEventListener('click', () => {
//   const result = Number.parseInt(value.textContent)
//   value.textContent = result + 1
// })
