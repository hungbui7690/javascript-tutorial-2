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

// (1)
const headingOne = document.querySelector('.one')
const headingTwo = document.querySelector('.two')
const headingThree = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')

// (2)
const url = 'https://source.unsplash.com/random'

// (3) Image 2 event: load, and error >> these 2 can go together
function loadImage(url) {
  // ***
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.addEventListener('load', () => {
      console.log(`Img Worked`)
    })
    img.addEventListener('error', () => {
      console.log(`Img Error`)
    })
    img.src = url
  })
}

// (4)
btn.addEventListener('click', () => {
  // (a)
  console.log(loadImage(url))

  // (b)
  loadImage(url)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
})
