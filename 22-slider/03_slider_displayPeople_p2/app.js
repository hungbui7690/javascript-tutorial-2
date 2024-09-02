/*
 * - ở project này, chúng ta sẽ ko lấy data ở bên ngoài mà sử dụng data của chính chúng ta >> data.js
 */

import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// ==== set slides
container.innerHTML = people
  .map((person, index) => {
    const { img, name, job, text } = person

    //===== (1) more stuffs: setup extra class >>> bật f12 lên và check sẽ thấy các articles sẽ có thêm 1 class kế bên nó >> nếu có 4 items thì 2 thằng sẽ có next class, tương tự nếu có 5 items tổng cộng thì 3 thằng sẽ là next, 1 thằng active, 1 thằng last
    let position = 'next'
    if (index === 0) {
      position = 'active'
    }
    if (index === people.length - 1) {
      position = 'last'
    }

    // ===== (2) apply class vào article
    return `
     <article class="slide ${position}">
       <img
         src="${img}" alt="${name}" class="img"
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
