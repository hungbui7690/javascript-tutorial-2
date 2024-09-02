///////////////////////
// MEthod 1: using selectors inside the element
///////////////////////
const questions = document.querySelectorAll('.question') // ## returns NodeList

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn')
  btn.addEventListener('click', () => {
    questions.forEach((q) => {
      // ~~ option 1:
      // if (q !== question) q.classList.remove('show-text')

      // ~~ option 2
      q.classList.remove('show-text')
    })
    question.classList.toggle('show-text')
  })
})

///////////////////////
// Method 2: traversing the dom
///////////////////////
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     // console.log(e.currentTarget)
//     // console.log(e.currentTarget.parentElement)
//     // console.log(e.currentTarget.parentElement.parentElement)

//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })
