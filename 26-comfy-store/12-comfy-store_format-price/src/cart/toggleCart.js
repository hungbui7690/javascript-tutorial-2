import { getElement } from '../utils.js'

const cartOverlay = getElement('.cart-overlay')
const closeCartBtn = getElement('.cart-close')
const toggleCartBtn = getElement('.toggle-cart')

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show')
})

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show')
})

// thằng này dùng khi add item vào cart >> sau khi add sẽ tự động mở sidebar
export const openCart = () => {
  cartOverlay.classList.add('show')
}
