/*
  Callback Functions, Higher Order Functions
  - function that takes another function as argument OR function that returns another function is called HIGHER ORDER Function 
  - function which is passed into another function as argument is called CALLBACK Function

  >> Function which is also called First Citizen Class Objects >> because we can 
    - store function as a variable
    - pass as arguments to another function
    - can return function from another function (closure)
  
*/

function greetMorning(name) {
  const myName = 'john'
  console.log(`Good morning ${name}, my name is ${myName}`)
}

// now, we want to create another function for goodAfternoon, and goodEvening >>> DRY principle
function greetAfternoon(name) {
  const myName = 'john'
  console.log(`Good afternoon ${name}, my name is ${myName}`)
}

greetMorning('Jason')
greetAfternoon('Mark')
