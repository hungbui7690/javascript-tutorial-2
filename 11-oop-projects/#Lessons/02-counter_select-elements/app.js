// chúng ta có 2 counter (instances), và chúng ta muốn control nó chỉ với 1 JS

// constructor function
function Counter(element, value) {
  this.counter = element
  this.value = value
  console.log(this.counter)
  this.resetBtn = element.querySelector('.reset')
  this.decreaseBtn = element.querySelector('.decrease')
  this.increaseBtn = element.querySelector('.increase')
  console.log(this.resetBtn)
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) return element

  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}
