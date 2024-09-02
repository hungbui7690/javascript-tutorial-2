/*
  ES6 Modules: 
  - module is just a file that contains statement(s)
  - provide structures
  - split code into smaller files
  - share code across app
  - same as react
  - use server extension locally 
    > must have extension to run in local, otherwise, err 
    > if we put into server (not local) >> everything is ok
  - used in real world

      h1
      div.container
      button.btn

*/

const people = [
  { name: 'john', job: 'developer' },
  { name: 'susan', job: 'designer' },
  { name: 'anna', job: 'the boss' },
]

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
