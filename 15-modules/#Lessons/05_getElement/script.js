/*
  Get Element
  - Because we duplicate code a lot in querySelector() which will make the script.js file becomes a mess >> create util/getElement.js

*/

import { random, people } from './utils/data.js'
import showPeople from './utils/showPeople.js'
import getElement from './utils/getElement.js' // ***

const container = getElement('.container1')
const btn = getElement('.btn')

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})
