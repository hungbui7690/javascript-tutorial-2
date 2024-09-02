/*
  Tagged Template Literals
  - That means we can run a template string through a function, and rather than have the browser immediately assign that value to a variable, we can have control over how this actual string is made.

*/

function highlight() {
  return 'cool'
}

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`
console.log(sentence) // 'cool'

/*
  - Obviously, that's not what we want to do,but this function will take in a few arguments so we can create the string ourselves:

  - First, we get an array of all the string pieces:
      My dog's name is
      and he is
      years old
    
  - After the array of all the string pieces, the subsequent arguments will be the values that are being interpolated.

  ## Go to Part 2
*/
