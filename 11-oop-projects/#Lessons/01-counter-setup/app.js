// chúng ta có 2 counter (instances), và chúng ta muốn control nó chỉ với 1 JS

// constructor function
function Counter(element, value) {
  console.log(element, value)
}

// const firstCounter = new Counter(getElement('.first-counter'), 100)
// const secondCounter = new Counter(getElement('.second-counter'), 200)

function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) return

  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

getElement('.first-counter')
