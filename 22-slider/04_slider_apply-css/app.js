/*
  - check file css + check image để hiểu cách hoạt động

  (1) vào file css đẻ setup

 */

import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// ==== set slides
container.innerHTML = people
  .map((person, index) => {
    const { img, name, job, text } = person

    let position = 'next'
    if (index === 0) {
      position = 'active'
    }
    if (index === people.length - 1) {
      position = 'last'
    }

    return `
     <article class="slide ${position}">
       <img
         src="${img}"
         alt="${name}"
         class="img"
       />
       <h4>${name}</h4>
       <p class="title">${job}</p>
       <p class="text">
         ${text}
       </p>
       <div class="quote-icon">
         <i class="fas fa-quote-right"></i>
       </div>
     </article>
  `
  })
  .join('')
