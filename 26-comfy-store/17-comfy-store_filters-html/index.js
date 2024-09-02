/*
  - setup loading trong products.html &  /pages/products.js 



*/

// global imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'
import { getElement } from './src/utils.js'

// specific import
import fethProducts from './src/fetchProducts.js'
import { setupStore, store } from './src/store.js'
import display from './src/displayProducts.js'

const init = async () => {
  const products = await fethProducts()
  if (products) {
    setupStore(products)

    // ======== Feature Products
    const featuredProducts = store.filter(
      (product) => product.featured === true
    )
    display(featuredProducts, getElement('.featured-center'))
  }
}

window.addEventListener('DOMContentLoaded', init)
