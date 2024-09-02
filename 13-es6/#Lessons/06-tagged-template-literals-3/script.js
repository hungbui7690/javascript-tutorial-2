/*
  Tagged Template Literals
  - That means we can run a template string through a function, and rather than have the browser immediately assign that value to a variable, we can have control over how this actual string is made.

*/

const name = 'Snickers'
const age = '100'

// *** use rest operator
function highlight(strings, ...values) {
  console.log('strings: ', strings)
  console.log('values: ', values)
  return 'cool'
}

/*
  What's strings? Strings is an array of three things:

    "My dog's name is "
    "and he is "
    "years old "
  As you can see, it breaks up the string into the biggest pieces it can until a variable interrupts it.

  We've got "My dog's name is" then it pops in a variable, "and he is ", that's the second item in the strings array, and then, "years old ", which are the three strings that don't get changed.

  The other things we get is an array of values, which we passed in two values here. We get "Snickers" and "100" which are the values that I passed in.
*/

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`
console.log(sentence) // 'cool'
