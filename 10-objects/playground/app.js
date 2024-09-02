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

const btn = document.querySelector('.increment')

btn.addEventListener('click', counter.increment) // # this = btn

// # method 1
btn.addEventListener('click', counter.increment.bind(counter))

// # method 2: with this, we can use removeEventListener() >> we usually see it in interview
const counterIncrement = counter.increment.bind(counter)
btn.addEventListener('click', counterIncrement)
btn.removeEventListener('click', counterIncrement)
