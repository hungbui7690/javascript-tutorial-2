/*
  Bind Example

*/

const counter = {
  count: 0,
  increment() {
    console.log(this)
    this.count++
    console.log(this.count)
  },
}

const button = document.querySelector('.increment')

button.addEventListener('click', counter.increment) // # lúc này point tới btn

// # method 1
button.addEventListener('click', counter.increment.bind(counter))

// # method 2: with this, we can use removeEventListener() >> we usually see it in interview
const counterIncrement = counter.increment.bind(counter)
button.addEventListener('click', counterIncrement)
button.removeEventListener('click', counterIncrement)
