/*
  - ở project này, chúng ta sẽ ko lấy data ở bên ngoài mà sử dụng local data >> data.js
 */

import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// ==== set slides
container.innerHTML = people
  .map((person, index) => {
    // console.table(person) // mỗi table là 1 object
    const { img, name, job, text } = person

    // ==== more stuffs later ***

    // ==========================

    return `
     <article class="slide">
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
