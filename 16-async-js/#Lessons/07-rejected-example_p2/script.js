/*
  Rejected Example
  - In the following video we will get a random photo from Unsplash API. Unfortunately, since I recorded the video, API changed it's rules and most likely the photo won't be random (in order to get a random photo, you will need to use API KEY). So just a heads up, the functionality still works, just photos wont be random.

  - in this lesson, we will use Unsplash API and Promise 
    > when we click on the button 
      + if successful, then show image (part 2)
      + if failed, then show error

    
  *** remember this when we return new Promise: 
      > return new Promise((resolve, reject) => {}

*/

const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.two')
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const url = 'https://source.unsplash.com/random'

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.addEventListener('load', () => {
      resolve(img) // (1)
    })
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source: ${url}`)) // (2)
    })
    img.src = url
  })
}

btn.addEventListener('click', () => {
  // (3)
  loadImage(url)
    .then((data) => {
      console.log(data) // <img/>
      container.appendChild(data)
    })

    .catch((err) => console.log(err))
})
