// LET VS CONST VS VAR

// using var: can access in console (window object) w/o any error >> has some shortcoming
var value = 'some value'
value = 'some other value'

// using let
let name = 'john'
name = 'peter'

// using const (CONSTANT) - can't re-assign
const lastName = 'smith'

console.log(value)
console.log(name)
console.log(lastName)
