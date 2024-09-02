/*


*/

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')
const para = document.querySelector('p')

function changeColors() {
  let hasClass = para.classList.contains('blue')
  if (hasClass) para.classList.remove('blue')
  else para.classList.add('blue')
}

// * ko đc sử dụng changeColors(), mà phải là changeColors >> ko có ngoặc >> truyền vào ref, chứ ko gọi hàm
btn.addEventListener('click', changeColors)
