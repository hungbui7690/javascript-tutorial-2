/*
  Template String 
  - template string really shines when we work with innerHTML

      h1
      div.result
*/

const person = {
  name: 'joe',
  job: 'developer',
  hobbies: ['surfing', 'baking', 'bowling'],
}

const result = document.querySelector('.result')

// Method 1: string concatenation
result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>' // # cách cũ

////////////////////////////
// Method 2: template string >> it is easy to setup innerHTML with template string
////////////////////////////
result.innerHTML = `
  <h2>${person.name}</h2>
  <p>${person.job}</p>
`

////////////////////////////
// *** we can also use template string inside template string
////////////////////////////
result.innerHTML = `
  <h2>${person.name}</h2>
  <p>${person.job}</p>
  <ul>${person.hobbies
    .map((hobby) => {
      return `<li>${hobby}</li>`
    })
    .join('')}
  </ul>
`
