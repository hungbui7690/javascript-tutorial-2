import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const setupSearch = (store) => {
  const form = getElement('.input-form')
  const nameInput = getElement('.search-input')

  form.addEventListener('keyup', () => {
    const value = nameInput.value
    if (value) {
      const newStore = store.filter((products) => {
        let { name } = products
        name = name.toLowerCase()
        if (name.startsWith(value)) return products
      })
      display(newStore, getElement('.products-container'))

      // ===== special case: trường hợp nếu user search nhưng ko ra sản phẩm
      if (newStore.length < 1) {
        const products = getElement('.products-container')
        products.innerHTML = `
            <h3 class="filter-error">Sorry, no product matches your search</h3>
        `
      }
    } else {
      // ====== this is for the case when user clear all text in the input
      display(store, getElement('.products-container'))
    }
  })
}

export default setupSearch
