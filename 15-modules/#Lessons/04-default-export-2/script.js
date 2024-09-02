/*
  Default Export
  - just can have only ONE default export in one file

  (1) create utils/showPeople.js and put function showPeople() there
    (a) add parameter people >> showPeople(people)
    (b) must have return >> return newPeople 
  (2) Default Export >> so we can use any name when import
  (3) btn event >> container.innerHTML = showPeople(people) 
*/

import { random, people } from './utils/data.js'
import showPeople from './utils/showPeople.js' // # default export >> we can use any name

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})
