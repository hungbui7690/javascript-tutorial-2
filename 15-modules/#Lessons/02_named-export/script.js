/*
  Named Export 
  - Module just work when we have Live Server if we work in Local >> otherwise, error (CORS)
    > if we upload to server >> we don't need to care about this

    (1) create utils/data.js
    (2) export using named export
    (3) import in script.js >> must have file extension + correct file name (i.e: data.js but not data) 
    (4) to fix err >> go to index.html to fix the link in script tag (add type='module')

    *** <script type="module" src="./script.js"></script>

    *** named export: 
        > export const random = 'random'

*/

// (3) import >> names must be correct since this is named export
import { random, people } from './utils/data.js'

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person
      return `
     <p>${name} <strong>${job}</strong></p>
    `
    })
    .join('')
  console.log(newPeople)

  container.innerHTML = newPeople
}

btn.addEventListener('click', () => {
  showPeople()
})
