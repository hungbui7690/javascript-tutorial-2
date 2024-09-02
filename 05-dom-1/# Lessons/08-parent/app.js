/*
  Parent
    .first
      h1
      .second
        h2
*/

const secondHeading = document.querySelector('h2')

const innerDiv = secondHeading.parentElement // div.second
console.log(innerDiv)

const outerDiv = secondHeading.parentElement.parentElement // div.first
console.log(outerDiv)

console.log(
  secondHeading.parentElement.parentElement.parentElement.parentElement
    .parentElement
) // be careful, since sometimes we will meet null
