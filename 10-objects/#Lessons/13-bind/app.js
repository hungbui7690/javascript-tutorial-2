/*
  call 
  - run instantly 
  - arguments = list of items
  apply 
  - run instantly 
  - arguments = array of items

  ## bind 
  - assign, use later 
  - arguments = list of items

*/

const john = {
  name: 'john',
  age: 25,
}

const susan = {
  name: 'susan',
  age: 42,
}

function greet(city, country) {
  console.log(this)
  console.log(`Hello, I'm ${this.name} and I live in ${city}, ${country}`)
}

// *** assign
const susanGreet = greet.bind(susan, 'Toronto', 'Canada')

// *** use later
susanGreet()
