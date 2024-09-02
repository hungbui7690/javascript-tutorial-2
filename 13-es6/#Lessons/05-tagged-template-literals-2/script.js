/*
  Tagged Template Literals
  - That means we can run a template string through a function, and rather than have the browser immediately assign that value to a variable, we can have control over how this actual string is made.

*/

const name = 'Snickers'
const age = '100'

// In this case, we're passing name and age.
function highlight(strings, name, age) {
  return 'cool'
}

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`
console.log(sentence) // 'cool'

/*
  Now, we could do this. It passes a name and passes an age, but if you don't know exactly how many values someone is passing, there's no way for you to really scale it. You could say Arg1, Arg2, go through all the way to Arg100, just in case there are a hundred arguments, but that's no way to live your life, right?

  For this, We can use ES6 rest operator, which is three dots. We're going to go into that a lot more in a future video, but know for now, if we do ... values, what it's going to do is take the rest of the values that are passed to that argument, and put them into an array for us.
*/
