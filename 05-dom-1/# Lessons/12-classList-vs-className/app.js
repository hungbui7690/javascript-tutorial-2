/*
  classList vs className
    h1.first
    h1.second
    h1.third

*/

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

//////////////////////////////////////
// ***
//////////////////////////////////////
const className = first.className
console.log('className: ', className)

// second.className = 'colors'
// second.className = 'text' // the one after will overwrite the previous one >> now className = 'text' >> no colors
second.className = 'colors text' // this is the way to add 2 classes at the same time >> not recommend >> use the one below (classList)

//////////////////////////////////////
// ***
//////////////////////////////////////
// third.classList.add('colors') // ~~ method 1
// third.classList.add('text')
third.classList.add('text', 'colors') // ~~ method 2: add multi classes with classList at the same time
const classValue = third.className
console.log('classValue: ', classValue)
third.classList.remove('colors')

//////////////////////////////////////
// ***
//////////////////////////////////////
let result = third.classList.contains('colors') // ## remember this method >> contains(): returns true/false
if (result) console.log('contains')
else console.log('NOT contain')
