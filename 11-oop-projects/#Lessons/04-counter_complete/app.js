// chúng ta có 2 counter (instances), và chúng ta muốn control nó chỉ với 1 JS

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) return element

  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

// constructor function
function Counter(element, value) {
  this.counter = element
  this.value = value
  this.resetBtn = element.querySelector('.reset')
  this.decreaseBtn = element.querySelector('.decrease')
  this.increaseBtn = element.querySelector('.increase')
  this.valueDOM = element.querySelector('.value')
  this.valueDOM.textContent = this.value

  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)

  this.increaseBtn.addEventListener('click', this.increase.bind(this))
  this.decreaseBtn.addEventListener('click', this.decrease)
  this.resetBtn.addEventListener('click', this.reset)
}

Counter.prototype.increase = function () {
  console.log(this)
  this.value++
  this.valueDOM.textContent = this.value
}

Counter.prototype.decrease = function () {
  this.value--
  this.valueDOM.textContent = this.value
}

Counter.prototype.reset = function () {
  this.value = 0
  this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)
