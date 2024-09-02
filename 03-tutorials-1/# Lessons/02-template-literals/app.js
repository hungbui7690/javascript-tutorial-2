// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} : use to insert expression(value)

const firstName = 'john'
const age = 25
const sentence = "Hey it's " + firstName + ' and he is ' + age + ' years old'

const value = `Hey it's ${firstName} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`
console.log(value)

console.log(sentence)
