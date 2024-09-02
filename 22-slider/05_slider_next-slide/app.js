/*
 
 */

import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

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

const startSlider = (type) => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling //  hiện tại khi ở last slide sẽ bị lỗi do dòng này active.nextElementSibling >> thêm dòng if

  // ===== mở f12 lên và check sự thay đổi class
  // bởi vì chúng ta có nhiều classes, nên chúng ta phải pass vào array
  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}

// ====== slider()
nextBtn.addEventListener('click', () => {
  startSlider()
})

prevBtn.addEventListener('click', () => {
  startSlider('prev')
})
