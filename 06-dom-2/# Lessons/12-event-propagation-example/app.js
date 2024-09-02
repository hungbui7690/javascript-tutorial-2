/*
  Event Propagation - Example
  - allows select dynamic elements
  - event propagation - order the events are fired
  - event bubbling - clicked element first then bubbles up -- default

  *** if (e.target.classList.contains('element'){}

    div.container
      h1.heading
    button.btn

*/

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const heading = document.querySelector('.heading')

///////////////////////////
// ***
///////////////////////////
function sayHello() {
  console.log('hello there')
}
// (1) heading.addEventListener('click', sayHello) // if we comment the h1 in html file >> null.addEventListener() >> error

///////////////////////////
// ***
///////////////////////////
btn.addEventListener('click', function () {
  const element = document.createElement('h1')
  element.classList.add('heading')
  element.textContent = `NEW`
  container.appendChild(element)
})

///////////////////////////
// (2) we want to add it dynamically >> we need to use event bubbling like below
///////////////////////////
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('hello')
  }
})

// ~~ when we click on the gap between 2 headings >> it does not work >> it just work when we click directly on the heading >> this is because of event bubbling
